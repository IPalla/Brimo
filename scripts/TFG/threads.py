#!/usr/bin/env python
# -*- coding: utf-8 -*-
import time, threading
import cherrypy
from gpiozero import LightSensor, Buzzer

import sys
import Adafruit_DHT
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)

contador=-1
nombre='Default'
temp=0

def ledOn():
	GPIO.output(18,GPIO.HIGH)


def ledOff():
	GPIO.output(18,GPIO.LOW)


class StringGenerator(object):
    @cherrypy.expose
    def index(self, interruptor=0):
        global contador
        global temp
        texto_boton = ''
        if contador == 0:
			contador-=1
			ledOn()
			texto_boton = 'Apaga el Led'
        else:
			contador+=1
			ledOff()
			texto_boton = 'Enciende el Led'
        return """<html>
		  <head></head>
		  <body>
			<form method="get" action="/">
			  <button type="submit">%s</button>
			</form>
		  <h2> Temperatura: %i ºC </h2>
		  </body>
		</html>""" %(texto_boton, temp)
    @cherrypy.expose
    def on(self, interruptor=0):
        global contador
        global temp
        contador=1
        return """<html>
		  <head></head>
		  <body>
			<form method="get" action="/">
			  <button type="submit">Apaga el Led</button>
			</form>
			<h2> Temperatura: %i ºC </h2>
		  </body>
		</html>""" %temp



def led():
	return 0
	global contador
	flag=0
	while True:
		if flag != contador:
			if contador==0:
				ledOff()
				flag=0
			if contador==1:
				ledOn()
				flag=1
		time.sleep(0.2)
		
def cherry():
	cherrypy.config.update(
	{'server.socket_host':'0.0.0.0'} )
	cherrypy.quickstart(StringGenerator())

def temp():
	while True:
		global temp
		humidity, temperature = Adafruit_DHT.read_retry(11, 4)
		temp=temperature
		time.sleep(0.5)
	
def main():
	hilo1=thread_cherrypy = threading.Thread(target=cherry)
	hilo2=thread_led = threading.Thread(target=led)
	hilo3=thread_temp = threading.Thread(target=temp)
	hilo1.start()
	hilo2.start()
	hilo3.start()
	ldr = LightSensor(17)  # alter if using a different pin
	while True:
		print(ldr.value)
		time.sleep(0.2)
	print 'Hola'
	return 0

if __name__ == '__main__':
	main()

