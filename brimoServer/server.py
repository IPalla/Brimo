import os, os.path
import random
import string
import sqlite3
import sys
from err import Logger, levels
from model import device_add, device_edit, device_delete, device_JSON_by_id, devices_JSON, device_edit_info, users_login, setup_databases

import cherrypy

"""

CREAR LOGS INFO Y ERRORES
OBJETOS __STR__

REVISAR CAMARA


ip_actuador/ 
{
    "id" : "33",
    "command" : "ON", "OFF", "+", "-", "texto"
}
sudo raspistill -w 640 -h 480 -q 5 -o /home/pi/Desktop/brimoServer/dist/pic.jpg -tl 100 -t 9999999 -th 0:0:0 -n 
"""


def is_logged():
    if 'logged' not in cherrypy.session:
        return 0
    return cherrypy.session['logged']

class webService(object):

    @cherrypy.expose
    def index(self):
        if is_logged() == 0:
            raise cherrypy.HTTPRedirect("/login")
        return open('./dist/index.html')

    @cherrypy.expose
    def devices_menu(self):
        raise cherrypy.HTTPRedirect("/")

    @cherrypy.expose
    def logout(self):
        if 'logged' in cherrypy.session:
            cherrypy.session.pop('logged', None)
        cherrypy.lib.sessions.expire
        raise cherrypy.HTTPRedirect("/")

@cherrypy.expose
class devices(object):
    exposed = True

    @cherrypy.tools.json_out()
    def GET(self):
        logging.debug('GET DEVICES')
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        return devices_JSON()
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
        logging.debug('POST DEVICES')
        #,name, freq, commands, info=""
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

    cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def PUT(self, device_id):
        logging.debug('PUT DEVICE/' + device_id)
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
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
            return
        
        logging.warning('Bad request')
        cherrypy.response.status = "400 Bad Request"
        return
    def DELETE(self, device_id):
        logging.debug('DELETE DEVICE/' + device_id)
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        ret = device_delete(int(device_id))
        if ret == 1:
            logging.info('Device ' + device_id + ' deleted')
            cherrypy.response.status = "200 OK"
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
        """Trigger function"""
        return device_JSON_by_id(device_id)


@cherrypy.expose
class login(object):
    def POST(self, username, pwd):
        ret=users_login(username, pwd)
        if ret==1:
            if 'logged' not in cherrypy.session:
                cherrypy.session['logged'] = 1
            else:
                cherrypy.session['logged'] = 1
            raise cherrypy.HTTPRedirect("/")
        else:
            raise cherrypy.HTTPRedirect("/")
    def GET(self):
        return open('./dist/dist/index.html')
    

if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
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
    webservice = webService()
    webservice.devices = devices()
    webservice.device = device()
    webservice.login = login()
    cherrypy.engine.subscribe('start', setup_databases)
    logging = Logger(levels.INFO)
    cherrypy.quickstart(webservice, '/', conf)
