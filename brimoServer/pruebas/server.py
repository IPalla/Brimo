from cherrypy.lib import auth_basic

USERS = {'jon': 'secret'}

def validate_password(realm, username, password):
    if username in USERS and USERS[username] == password:
       return True
    return False

conf = {
   '/protected/area': {
       'tools.auth_basic.on': True,
       'tools.auth_basic.realm': 'localhost',
       'tools.auth_basic.checkpassword': validate_password
    }
}

cherrypy.quickstart(myapp, '/', conf)