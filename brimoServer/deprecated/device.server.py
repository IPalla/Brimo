import cherrypy
	  
class HelloWorld(object):
    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
      input_json = cherrypy.request.json
      id = input_json["id"]
      command = input_json["command"]
      print command
      print id
      return 'ee'
    def index(self):
      return "Hello World!"
    index.exposed = True

if __name__ == '__main__':
  cherrypy.config.update({'server.socket_host': '0.0.0.0',
                          'server.socket_port': 3080
                        })
  cherrypy.quickstart(HelloWorld())