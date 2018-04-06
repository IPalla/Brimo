import cherrypy
import os, os.path
import sqlite3
import json

SERVER_DB= "rooms.bd"

class device:
	def __init__(self, name, tyype, freq, commands, IP):
		self.name = name
		self.type = tyype
		self.freq = freq
		self.info = ""
		self.location = ""
		self.lastupdate = ""
		self.commands = commands
		self.IP = IP

#DEVICES TABLE

def device_add(name, freq, commands, IP,info=""):
	if len(commands) != 3:
		return 0
	if commands[0] != "Y" and commands[0] != "N":
		return 0
	if commands[1] != "Y" and commands[1] != "N":
		return 0 
	if commands[2] != "Y" and commands[2] != "N":
		return 0 
	with sqlite3.connect(SERVER_DB) as c:
		r = c.execute("INSERT INTO devices (name, freq, info , lastupdate,commands,IP) VALUES (?,?,?,datetime('now', 'localtime'),?,? )", [name.upper(), freq, info, commands, IP])
		c.commit()
		if r.rowcount != 1:
			return -1
		return device_get_last()
	return -1

def device_get_last():
	stmnt = "SELECT * FROM devices "  
	with sqlite3.connect(SERVER_DB) as c:
		for row in c.execute(stmnt):
			None
		c.commit()
		return row[0]
	return -1

def device_edit(id, name, location):
	stmnt='UPDATE devices SET name = \'%s\', location=\'%s\' WHERE id = %d ' %(name.upper(), location.upper(), id)
	with sqlite3.connect(SERVER_DB) as c:
		r = c.execute(stmnt)
		c.commit()
		return r.rowcount
	return 0
def device_edit_info(id, info):
	stmnt='UPDATE devices SET info = \'%s\', lastupdate= datetime(\'now\', \'localtime\') WHERE id = %d ' %(info, id)
	with sqlite3.connect(SERVER_DB) as c:
		r = c.execute(stmnt)
		c.commit()
		return r.rowcount
	return 0
def device_delete(device_id):
	stmnt='DELETE FROM devices WHERE ID=%d' %(device_id)
	with sqlite3.connect(SERVER_DB) as c:
		r = c.execute(stmnt)
		c.commit()
		return r.rowcount #1 si success 0 si err
	return 0

"""DUMP DATABASE INTO XML and JSON"""

def devices_JSON():
	with sqlite3.connect(SERVER_DB) as c:
		index = 0
		ndic = {}
		for row in c.execute('SELECT * FROM devices'):
			index += 1
			ndic.update(dict({str(row[0]): device_JSON(row)}))
		c.commit()
	return ndic

def device_JSON(row):
	mid_json = {'id' : str(row[0]), 'name': row[1], 'type': str(row[2]), 'freq': str(row[3]), 'info': str(row[4]), 'location': str(row[5]), 'lastupdate': str(row[6]), 'commands': str(row[7]), 'ip': str(row[8])  }
	return mid_json

def device_JSON_by_id(id):
	ndic = {}
	with sqlite3.connect(SERVER_DB) as c:
		for row in c.execute('SELECT * FROM devices WHERE id = ' + id):
			ndic.update(dict({str(row[0]): device_JSON(row)}))
		c.commit()
	return ndic

#USERS ADMINISTRATION

def add_default_user():
	with sqlite3.connect(SERVER_DB) as c:
		r = c.execute('SELECT * FROM users')
	if r.fetchone() == None:
		with sqlite3.connect(SERVER_DB) as c:
			r = c.execute('INSERT INTO users (user, pass) VALUES ("root", "root")')
			r = c.execute('INSERT INTO users (user, pass) VALUES ("laura", "laura")')
			c.commit()
def users_login(user, pwd):
	stmnt='SELECT * FROM users WHERE user="' + user + '" AND pass= "' + pwd + '"'
	with sqlite3.connect(SERVER_DB) as c:
		r = c.execute(stmnt)
	if r.fetchone()==None:
		return 0
	return 1

#DATABASES SETTINGS


def setup_devices_table():
	with sqlite3.connect(SERVER_DB) as con:
		con.execute("CREATE TABLE IF NOT EXISTS devices (id INTEGER PRIMARY KEY AUTOINCREMENT,name, type, freq, info,location ,lastupdate, commands, IP) ")
		con.commit()
    
def clean_devices_table():
    with sqlite3.connect(SERVER_DB) as con:
        con.execute("DROP TABLE IF EXISTS devices")

def setup_users_table():
	with sqlite3.connect(SERVER_DB) as con:
		con.execute("CREATE TABLE IF NOT EXISTS users (user,pass) ")
		con.commit()
	add_default_user()



def clean_users_table():
	with sqlite3.connect(SERVER_DB) as con:
		con.execute("DROP TABLE IF EXISTS users")

def clean_databases():
    clean_devices_table()
    clean_users_table()

def setup_databases():
    setup_devices_table()
    setup_users_table()


##POBLAR BASE DATOS

if __name__ == '__main__':
	clean_databases()
	setup_databases()