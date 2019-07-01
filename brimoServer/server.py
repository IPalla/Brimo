import os, os.path
import random
import string
import sys
import cherrypy
import utils
import requests
import socket
import threading
import RPi.GPIO as GPIO
import time

from middleware.webtokens import *
from config.config import *
from model.model import *


GPIO.setmode(GPIO.BCM)

RED = 21
GREEN = 20
BLUE = 22


userName = 'root'
passWord = 'root'
token = ''
deviceId = ''
status = 'OFF'
headers = {'content-type': 'application/json'}

class Timer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.event = threading.Event()

    def run(self):
        while not self.event.is_set():                
            updateInfo(status)  
            self.event.wait(15)

    def stop(self):
        self.event.set()


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
        if (command_code == 'OFF'):
            off()
        elif (command_code == 'WHITE'):
            white()
        elif (command_code == 'GREEN'):
            green()
        elif (command_code == 'BLUE'):
            blue()
        else:
            print('Unkwon command')
            cherrypy.response.status = "400 Bad Request"
            return { 'error': 'Unkwon command'}
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
    r = requests.post("https://192.168.1.40:3000/brimo/login-api/login", data=data, verify = False)
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
        'IP': getIp() + ':8090',
        'freq': '20',
        'commands': [
            {
			'command_descr': 'GREEN ON',
			'command_code': 'GREEN'
            },
            {
			'command_descr': 'BLUE ON',
			'command_code': 'BLUE'
            },
            {
			'command_descr': 'WHITE ON',
			'command_code': 'WHITE'
            },
            {
			'command_descr': 'OFF',
			'command_code': 'OFF'
            }
        ]
    }
    r = requests.post("https://192.168.1.40:3000/brimo/sensors-api/devices", data=json.dumps(data), headers=headers, verify = False)
    deviceId = r.json()['device_id']
    gpioSetUp()
    tmr = Timer()
    tmr.start()
    return

def updateInfo(updatedInfo):
    global deviceId
    global status
    status = updatedInfo
    r = requests.put("https://192.168.1.40:3000/brimo/sensors-api/devices/" + str(deviceId) + "?info=" + str(updatedInfo), headers=headers, verify = False)
    if r.status_code == 401:
        login()
    return

def getIp():
    ip = ''
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    ip = s.getsockname()[0]
    s.close()
    return ip

def gpioSetUp():
    GPIO.setup(RED, GPIO.OUT)
    GPIO.output(RED, 0)
    GPIO.setup(GREEN, GPIO.OUT)
    GPIO.output(GREEN, 0)
    GPIO.setup(BLUE, GPIO.OUT)
    GPIO.output(BLUE, 0)

def white():
    GPIO.output(RED, 1)
    GPIO.output(GREEN, 1)
    GPIO.output(BLUE, 1)
    updateInfo('WHITE')

def blue():
    GPIO.output(RED, 0)
    GPIO.output(GREEN, 0)
    GPIO.output(BLUE, 1)
    updateInfo('BLUE')

def green():
    GPIO.output(RED, 1)
    GPIO.output(GREEN, 0)
    GPIO.output(BLUE, 0)
    updateInfo('GREEN')

def off():
    GPIO.output(RED, 0)
    GPIO.output(GREEN, 0)
    GPIO.output(BLUE, 0)
    updateInfo('OFF')

if __name__ == '__main__':
    webservice = webService()
    webservice.config = main_config()
    webservice.command = command()
    cherrypy.engine.subscribe('start', register)
    cherrypy.config.update({'server.socket_host': getIp(),
                        'server.socket_port': 8090,
                       })
    cherrypy.quickstart(webservice, '/brimo/actuators-api', webservice.config.conf)
