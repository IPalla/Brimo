import os, os.path
import random
import string
import sys
import cherrypy
import utils
import requests


from middleware.webtokens import *
from config.config import *
from model.model import *

userName = 'root'
passWord = 'root'
token = ''
deviceId = ''
headers = {'content-type': 'application/json'}


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
class command(object):
    exposed = True
    @cherrypy.tools.json_out()
    def POST(self, command_code):
        if command_code == None:
            cherrypy.response.status = "400 Bad Request"

            return { 'error': 'Missing command_code query param'}
        print('Received command ' + command_code)
        return {'response': 'OK'}

# set the priority according to your needs if you are hooking something
# else on the 'before_finalize' hook point.
@cherrypy.tools.register('before_finalize', priority=60)
def secureheaders():
    headers = cherrypy.response.headers
    headers['X-Frame-Options'] = 'DENY'
    headers['X-XSS-Protection'] = '1; mode=block'
    headers['Access-Control-Allow-Origin'] = '*'

def login():
    data = {'username': userName, 'password': passWord}
    r = requests.post("https://localhost:3000/brimo/login-api/login", data=data, verify = False)
    global token 
    global headers
    token = r.json()['tkn_auth']
    headers = {'content-type': 'application/json', 
    'x-access-token': token}
    return

def register(ip=''):
    login()
    global headers
    global deviceId
    data = {
        'name': 'LEDS DEVICE',
        'camera': 'false',
        'IP': 'localhost:8080',
        'freq': '30',
        'commands': [
            {
			'command_descr': 'ENCENDER',
			'command_code': 'ON'
            },
            {
                'command_descr': 'APAGAR',
                'command_code': 'OFF'
            }
        ]
    }
    print(data)
    r = requests.post("https://localhost:3000/brimo/sensors-api/devices", data=json.dumps(data), headers=headers, verify = False)
    print(r.json()['device_id'])
    deviceId = r.json()['device_id']
    return

def updateInfo(updatedInfo):
    r = requests.get("https://localhost:3000/brimo/interface-api/locations", headers=headers, verify = False)
    print(r.text)
    return

if __name__ == '__main__':
    webservice = webService()
    webservice.config = main_config()
    webservice.command = command()
    cherrypy.engine.subscribe('start', register)
    cherrypy.quickstart(webservice, '/brimo/actuators-api', webservice.config.conf)
