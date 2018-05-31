from  cache import Caches
from err import Logger, levels
import cherrypy
import os, os.path

DEBUG_LEVEL = levels.DEBUG
SSL =  False

class main_config(object):
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
        }
    }

    ssl_config =   {   'server.ssl_module' : 'builtin',
                        'server.ssl_certificate' : './cert.pem',
                        'server.ssl_private_key' : './privkey.pem'}
    SECRET_KEY = 'bkrkikmko'
    def __init__(self):
      self.SSL = SSL
      self.DEBUG_LEVEL = DEBUG_LEVEL

class WebTools(object):
    def __init__(self, other):
        other.logging = Logger(DEBUG_LEVEL)
        other.cache = Caches(other.logging)
        other.SECRET_KEY = 'bkrkikmko'