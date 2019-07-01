import random
import string

import cherrypy
nombre='Default'



class StringGenerator(object):
    @cherrypy.expose
    def index(self):
        return """<html>
          <head></head>
          <body>
            <form method="get" action="generate">
              <input type="text" value="8" name="nombre" />
              <button type="submit">Give it now!</button>
            </form>
          </body>
        </html>"""

    @cherrypy.expose
    def generate(self, nombre='hello'):
        return nombre


if __name__ == '__main__':
    cherrypy.quickstart(StringGenerator())
