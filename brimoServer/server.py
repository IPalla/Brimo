import os, os.path
import random
import string
import sys
import cherrypy


from middleware.webtokens import *
from config.config import *
from model.model import *

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
        webservice.logging.debug('Log Out received')
        raise cherrypy.HTTPRedirect("/")

@cherrypy.expose
class devices(object):
    exposed = True
    @cherrypy.tools.json_out()
    def GET(self):
        auth_tkn = cherrypy.request.headers['Authorization']
        if validToken(auth_tkn, webservice.config.SECRET_KEY) == -1:
            webservice.logging.debug('No auth user')
            cherrypy.response.status = "401 Unauthorized"
            return "LOG IN NECESSARY"
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        webservice.logging.debug('GET DEVICES')
        res = webservice.cache.getResponse('/devices')
        if res:
            return res
        tocache = devices_JSON()
        webservice.cache.setResponse('/devices', tocache)
        return tocache
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
        webservice.logging.debug('POST DEVICES')
        input_json = cherrypy.request.json
        name = input_json["name"]
        freq = input_json["freq"]
        commands = input_json["commands"]
        IP = input_json["IP"]
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'
        camera = 'false'
        if 'camera' in input_json:
            camera = input_json['camera']
        ret = device_add(name, freq, commands, IP, camera )
        if ret != -1 and ret != 0:
            webservice.logging.info('Resource created, id: ' + str(ret))
            cherrypy.response.status = "201 Resource Created"
            webservice.cache.unsetResponse('/devices')
            result={
                'id': ret
                }
            return result
        if ret == 0:
            webservice.logging.warning('Cannot create resource, bad request')
            cherrypy.response.status = "400 Bad Request"
            result={
                'err': 'Invalid commands'
                }
            return result
        if ret == -1:
            webservice.logging.critical('Internal error accessing DDBB')
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
        webservice.logging.debug('PUT DEVICE/' + device_id)
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
            webservice.logging.debug('EDIT DEVICE INFO')
            ret = device_edit_info(int(device_id), info)
            if ret == 0:
                webservice.logging.warning('Device ' + device_id + ' not found' )
                cherrypy.response.status = "404 Not Found"
                return 
            webservice.logging.info('Device ' + device_id + ' info edited')
            cherrypy.response.status = "200 OK"
            webservice.cache.unsetResponse('/devices')
            return 
        if new_name != "" and new_location != "":
            webservice.logging.debug('EDIT DEVICE LOCATION AND NAME: ' + new_name.upper() + ' ' + new_location.upper())
            ret = device_edit(int(device_id), new_name.upper(), new_location.upper())
            if ret == 0:
                webservice.logging.warning('Device ' + device_id + ' not found')
                cherrypy.response.status = "404 Not Found"
                return
            webservice.logging.info('Device ' + device_id + ' name and location updated: ' + new_name.upper() + ' ' + new_location.upper()) 
            cherrypy.response.status = "200 OK"
            webservice.cache.unsetResponse('/devices')
            return
        
        webservice.logging.warning('Bad request')
        cherrypy.response.status = "400 Bad Request"
        return
    def DELETE(self, device_id):
        webservice.logging.debug('DELETE DEVICE/' + device_id)
        ret = device_delete(int(device_id))
        if ret == 1:
            webservice.logging.info('Device ' + device_id + ' deleted')
            cherrypy.response.status = "200 OK"
            webservice.cache.unsetResponse('/devices')
            return
        if ret == 0:
                webservice.logging.warning('Device ' + device_id + ' not found')
                cherrypy.response.status = "404 Not Found"
                return
        return
    def OPTIONS(self, device_id):
        cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'

    @cherrypy.tools.json_out()
    def GET(self, device_id):
        auth_tkn = cherrypy.request.headers['Authorization']
        if validToken(auth_tkn, webservice.config.SECRET_KEY) == -1:
            webservice.logging.debug('No auth user')
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
        for key in input_json:
            if key == "username":
                username = input_json["username"]
            if key == "password":
                pwd = input_json["password"]
        webservice.logging.debug('POST LOGIN/ username: ' + username)
        id=users_login(username, pwd)
        if id != 0:
            token = createToken(id, webservice.config.SECRET_KEY)
            cherrypy.response.cookie['logged'] = 1
            cherrypy.response.cookie['logged']['expires'] = 3600
            webservice.logging.info('User logged ' + str(username))
            cherrypy.response.status = "200 Ok"
            return { 'tkn_auth': token }
        else:
            cherrypy.response.status = "401 Unauthorized"
            webservice.logging.debug('Bad credentials: ' + username)
            return 'Bad credentials'
    
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
    headers['Access-Control-Allow-Origin'] = '*'

if __name__ == '__main__':
    webservice = webService()
    webservice.config = main_config()
    webservice.devices = devices()
    webservice.device = device()
    webservice.login = login()
    webservice.logging = Logger(webservice.config.DEBUG_LEVEL)
    webservice.cache = Caches(webservice.logging)
    if webservice.config.SSL:
        cherrypy.config.update(webservice.config.ssl_config)
    cherrypy.engine.subscribe('start', setup_databases)
    cherrypy.quickstart(webservice, '/', webservice.config.conf)
