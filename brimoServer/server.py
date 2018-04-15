import os, os.path
import random
import string
import sqlite3
import sys
from err import Logger, levels
from model import device_add, device_edit, device_delete, device_JSON_by_id, devices_JSON, device_edit_info, users_login, setup_databases
from cache import Caches
import cherrypy

SSL =  False
DEBUG_LEVEL = levels.DEBUG


"""

REVISAR CAMARA


ip_actuador/ 
{
    "id" : "33",
    "command" : "ON", "OFF", "+", "-", "texto"
}
sudo raspistill -w 640 -h 480 -q 5 -o /home/pi/Desktop/brimoServer/dist/pic.jpg -tl 100 -t 9999999 -th 0:0:0 -n 
"""


class main_config(object):
    def __init__(self, SSL=False, DEBUG_LEVEL=levels.DEBUG):
        self.SSL = SSL
        self.DEBUG_LEVEL =DEBUG_LEVEL


def is_logged():
    if 'logged' in cherrypy.request.cookie:
        return cherrypy.request.cookie['logged']
    return 0

class webService(object):

    @cherrypy.expose
    def index(self):
        
        return open('./dist/index.html')

    @cherrypy.expose
    def devices_menu(self):
        raise cherrypy.HTTPRedirect("/")

    @cherrypy.expose
    def logout(self):
        cherrypy.response.cookie['logged'] = 0
        cherrypy.response.cookie['logged']['expires'] = 0
        logging.debug('Log Out received')
        raise cherrypy.HTTPRedirect("/")

@cherrypy.expose
class devices(object):
    exposed = True
    @cherrypy.tools.json_out()
    def GET(self):
        if is_logged() == 0:
            logging.debug('No auth user')
            cherrypy.response.status = "401 Unauthorized"
            return "LOG IN NECESSARY"
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        logging.debug('GET DEVICES')
        res = cache.getResponse('/devices')
        if res:
            return res
        tocache = devices_JSON()
        cache.setResponse('/devices', tocache)
        return tocache
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
        logging.debug('POST DEVICES')
        input_json = cherrypy.request.json
        name = input_json["name"]
        freq = input_json["freq"]
        commands = input_json["commands"]
        IP = input_json["IP"]
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        ret = device_add(name, freq, commands, IP )
        if ret != -1 and ret != 0:
            logging.info('Resource created, id: ' + str(ret))
            cherrypy.response.status = "201 Resource Created"
            cache.unsetResponse('/devices')
            result={
                'id': ret
                }
            return result
        if ret == 0:
            logging.warning('Cannot create resource, bad request')
            cherrypy.response.status = "400 Bad Request"
            result={
                'err': 'Invalid commands'
                }
            return result
        if ret == -1:
            logging.critical('Internal error accessing DDBB')
            cherrypy.response.status = "500 Internal Server Error"
            result={
                'err': 'Internal error'
                }
            return result    

@cherrypy.expose
@cherrypy.popargs('device_id')
class device(object):
    exposed = True
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def PUT(self, device_id):
        logging.debug('PUT DEVICE/' + device_id)
        input_json = cherrypy.request.json
        info = ""
        new_location = ""
        new_name = ""

        for key in input_json:
            if key == "info":
                info = input_json["info"]
            if key == "new_location":
                new_location = input_json["new_location"]
            if key == "new_name":
                new_name = input_json["new_name"]
        if info != "":
            logging.debug('EDIT DEVICE INFO')
            ret = device_edit_info(int(device_id), info)
            if ret == 0:
                logging.warning('Device ' + device_id + ' not found' )
                cherrypy.response.status = "404 Not Found"
                return 
            logging.info('Device ' + device_id + ' info edited')
            cherrypy.response.status = "200 OK"
            cache.unsetResponse('/devices')
            return 
        if new_name != "" and new_location != "":
            logging.debug('EDIT DEVICE LOCATION AND NAME: ' + new_name.upper() + ' ' + new_location.upper())
            ret = device_edit(int(device_id), new_name.upper(), new_location.upper())
            if ret == 0:
                logging.warning('Device ' + device_id + ' not found')
                cherrypy.response.status = "404 Not Found"
                return
            logging.info('Device ' + device_id + ' name and location updated: ' + new_name.upper() + ' ' + new_location.upper()) 
            cherrypy.response.status = "200 OK"
            cache.unsetResponse('/devices')
            return
        
        logging.warning('Bad request')
        cherrypy.response.status = "400 Bad Request"
        return
    def DELETE(self, device_id):
        logging.debug('DELETE DEVICE/' + device_id)
        ret = device_delete(int(device_id))
        if ret == 1:
            logging.info('Device ' + device_id + ' deleted')
            cherrypy.response.status = "200 OK"
            cache.unsetResponse('/devices')
            return
        if ret == 0:
                logging.warning('Device ' + device_id + ' not found')
                cherrypy.response.status = "404 Not Found"
                return
        return
    def OPTIONS(self, device_id):
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'

    @cherrypy.tools.json_out()
    def GET(self, device_id):
        if is_logged() == 0:
            logging.debug('No auth user')
            cherrypy.response.status = "401 Unauthorized"
            return "LOG IN NECESSARY"
        return device_JSON_by_id(device_id)


@cherrypy.expose
class login(object):
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def POST(self):
        input_json = cherrypy.request.json
        username = ""
        pwd = ""
        print input_json
        for key in input_json:
            if key == "username":
                username = input_json["username"]
            if key == "password":
                pwd = input_json["password"]
        logging.debug('POST LOGIN/ username: ' + username)
        ret=users_login(username, pwd)
        if ret==1:
            cherrypy.response.cookie['logged'] = 1
            cherrypy.response.cookie['logged']['expires'] = 3600
            logging.info('User logged ' + str(username))
            cherrypy.response.status = "200 Ok"
            return 'Logged'
            #raise cherrypy.HTTPRedirect("/")
        else:
            cherrypy.response.status = "401 Unauthorized"
            logging.debug('Bad credentials: ' + username)
            return 'Bad credentials'
            #raise cherrypy.HTTPRedirect("/")
    
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def OPTIONS(self, device_id):
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
    def GET(self):
        return open('./dist/dist/index.html')
    
# set the priority according to your needs if you are hooking something
# else on the 'before_finalize' hook point.
@cherrypy.tools.register('before_finalize', priority=60)
def secureheaders():
    headers = cherrypy.response.headers
    headers['X-Frame-Options'] = 'DENY'
    headers['X-XSS-Protection'] = '1; mode=block'
    ##headers['Content-Security-Policy'] = "default-src='self'"
    headers['Access-Control-Allow-Origin'] = '*'

if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.sessions.secure' : True,
            'tools.sessions.httponly' : True,
            'tools.secureheaders.on' : True,
            'tools.staticdir.root': os.path.abspath(os.getcwd()),
            'tools.staticdir.on': True,
            'tools.staticdir.dir': os.path.abspath(os.getcwd()) + '/dist',
            'tools.response_headers.headers': [('Access-Control-Allow-Origin', 'http://localhost')]
        },
        '/devices': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher()
        },
        '/device': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher()
        },
        '/login': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
            'tools.staticdir.on': True,
            'tools.staticdir.dir': os.path.abspath(os.getcwd()) + '/dist/dist'
        }
    }
    cherrypy.config.update({'server.socket_host': '0.0.0.0',
                        'server.socket_port': 8080,
                        'log.screen': False,
                        'log.access_file': './logs/cherr.logs',
                        'log.error_file': './logs/cherr.logs'
                       })
    ssl_config =   {   'server.ssl_module' : 'builtin',
                        'server.ssl_certificate' : './cert.pem',
                        'server.ssl_private_key' : './privkey.pem'}
    config_object = main_config(SSL, DEBUG_LEVEL)
    if config_object.SSL:
        cherrypy.config.update(ssl_config)
    webservice = webService()
    logging = Logger(config_object.DEBUG_LEVEL)
    cache = Caches(logging)
    webservice.devices = devices()
    webservice.device = device()
    webservice.login = login()
    cherrypy.engine.subscribe('start', setup_databases)
    cherrypy.quickstart(webservice, '/', conf)
