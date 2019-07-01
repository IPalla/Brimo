#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import Adafruit_DHT
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)

def ledOn():
	GPIO.output(18,GPIO.HIGH)


def ledOff():
	GPIO.output(18,GPIO.LOW)


while True:
    humidity, temperature = Adafruit_DHT.read_retry(11, 4)
    if humidity > 50:
		ledOn()
    else:
		ledOff()
    print 'Temp: {0:0.1f} C  Humidity: {1:0.1f} %'.format(temperature, humidity)

