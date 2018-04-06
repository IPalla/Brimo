import cherrypy
import os, os.path
import sqlite3
import json

SERVER_DB= "rooms.bd"

USERS={}

def validate_password(realm, username, password):
    if username in USERS and USERS[username] == password:
       return True
    return False

def device_XML(xml):
	with open('static/Data/devices.xml', 'a') as devices_file:
		devices_file.write('	<device>\n')
		devices_file.write('		<id>' + str(xml[0]) + '</id>\n')
		devices_file.write('		<name>' + xml[1] + '</name>\n')
		devices_file.write('		<type>' + str(xml[2]) + '</type>\n')
		devices_file.write('		<freq>' + str(xml[3]) + '</freq>\n')
		devices_file.write('		<info>' + str(xml[4]) + '</info>\n')
		devices_file.write('		<location>' + str(xml[5]) + '</location>\n')
		devices_file.write('		<lastupdate>' + str(xml[6]) + '</lastupdate>\n')
		devices_file.write('		<commands>' + str(xml[7]) + '</commands>\n')
		devices_file.write('	</device>\n')

def devices_XML():
	with open('static/Data/devices.xml', 'w') as devices_file:
		devices_file.write('<?xml version="1.0" encoding="utf-8"?>\n')
		devices_file.write('<devices>\n')
	with sqlite3.connect(SERVER_DB) as c:
		for row in c.execute('SELECT * FROM devices'):
				device_XML(row)
		c.commit()
	with open('static/Data/devices.xml', 'a') as devices_file:
		devices_file.write('</devices>\n')


#ROOMS TABLE


def room_add(room_name):
	with sqlite3.connect(SERVER_DB) as c:
		c.execute("INSERT INTO rooms (name) VALUES (?);", [room_name])
		c.commit()
		rooms_XML()

def rooms_XML():
	with open('static/Data/rooms.xml', 'w') as rooms_file:
		rooms_file.write('<?xml version="1.0" encoding="utf-8"?>\n')
		rooms_file.write('<rooms>\n')
	with sqlite3.connect(SERVER_DB) as c:
		for row in c.execute('SELECT * FROM rooms'):
				room_XML(row)
		c.commit()
	with open('static/Data/rooms.xml', 'a') as devices_file:
		devices_file.write('</rooms>\n')

def room_XML(xml):
	with open('static/Data/rooms.xml', 'a') as devices_file:
		devices_file.write('	<room>\n')
		devices_file.write('		<id>' + str(xml[0]) + '</id>\n')
		devices_file.write('		<name>' + xml[1] + '</name>\n')
		devices_file.write('	</room>\n')

def setup_rooms_table():
    with sqlite3.connect(SERVER_DB) as con:
        con.execute("CREATE TABLE IF NOT EXISTS rooms (id INTEGER PRIMARY KEY AUTOINCREMENT, name)")
        con.commit()
    
def clean_rooms_table():
    with sqlite3.connect(SERVER_DB) as con:
        con.execute("DROP TABLE rooms")
