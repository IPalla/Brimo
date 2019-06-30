import cherrypy
import os, os.path

SSL =  False

class main_config(object):
    conf = {
        '/command' : {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
        }
    }

    ssl_config =   {   'server.ssl_module' : 'builtin',
                        'server.ssl_certificate' : './cert.pem',
                        'server.ssl_private_key' : './privkey.pem'}
    SECRET_KEY = 'bkrkikmko'

class WebTools(object):
    def __init__(self, other):
        other.SECRET_KEY = 'bkrkikmko'