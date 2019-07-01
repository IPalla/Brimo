#!/usr/bin/env python
# -*- coding: utf-8 -*-
import RPi.GPIO as GPIO   #Importamos las librerias necesarias para usar los pines GPIO
import time               #Importamos time para poder realizar pausas
 
def bin2dec(string_num):  #Creamos una función para transformar de binario a decimal
    return str(int(string_num, 2))
 
data = []                 #Definimos data como un array
 
GPIO.setmode(GPIO.BCM)    #Ponemos la placa en modo BCM
GPIO.setup(4,GPIO.OUT)    #Configuramos el pin 4 como salida
GPIO.output(4,GPIO.HIGH)  #Enviamos una señal
time.sleep(0.025)         #Pequeña pausa
GPIO.output(4,GPIO.LOW)   #Cerramos la señal
time.sleep(0.02)          #Pequeña pausa
 
GPIO.setup(4, GPIO.IN, pull_up_down=GPIO.PUD_UP) #Ponemos el pin 4 en modo lectura
 
for i in range(0,500): #Lee los bits que conforman la respuesta binaria del sensor
    data.append(GPIO.input(4))
 
#Define algunas variables usadas para cálculos más adelante
count = 0
inicio = 0
word = ""
crc_check = 0
 
try:   #Hazlo mientras no existan errores, si detectas error salta a "except"
#El siguiente código lee los bits de respuesta que envia el
#sensor y los transforma a un número decimal leible.
#Buscamos el primer canto de bajada
    inicio = data.index(0)
   
    flag = 0   
    for senal in data[inicio:500]:
        if senal == 1:
            flag = 1
            count = count + 1

        if senal == 0 and flag == 1:
            flag = 0
            if count < 4: word = word + "0"
            else: word = word + "1"
            count = 0               

    Humidity = bin2dec(word[0:8])
    Temperature = bin2dec(word[16:24])
    crc = bin2dec(word[32:40])
          
except:
    for a in data[0:500]:
        print data[a]
    print "ERR_RANGE1"
    exit(0)
   
crc_check = int(Humidity) + int(Temperature) - int(crc)

if  crc_check < 2 and crc_check > -2: #La comprobacion del CRC se ha validado
    print "Humidity:"+ str(Humidity) +" %"
    print "Temperature:"+ str(Temperature) +" C"
else: #Si no es válido
    print "ERR_CRC ("+ str(crc) +"): ERR_H ("+str(Humidity)+") or ERR_T ("+str(Temperature)+")"
