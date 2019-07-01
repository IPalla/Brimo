import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# defining the pins
green = 20
red = 21
blue = 22


GPIO.setup(green,GPIO.OUT)
GPIO.setup(red, GPIO.OUT)
GPIO.setup(blue, GPIO.OUT)

def white():
    green = 20
    red = 21
    blue = 22
    print("LED white")
    GPIO.output(green,GPIO.HIGH)
    GPIO.output(red,GPIO.HIGH)
    GPIO.output(blue,GPIO.HIGH)

def green():
    green = 20
    red = 21
    blue = 22
    print("LED green")
    GPIO.setup(green,GPIO.OUT)
    GPIO.setup(red, GPIO.LOW)
    GPIO.setup(blue, GPIO.LOW)

def red():
    green = 20
    red = 21
    blue = 22
    print("LED red")
    GPIO.setup(red,GPIO.OUT)
    GPIO.setup(green, GPIO.LOW)
    GPIO.setup(blue, GPIO.LOW)

def blue():
    green = 20
    red = 21
    blue = 22
    print("LED blue")
    GPIO.setup(blue,GPIO.OUT)
    GPIO.setup(green, GPIO.LOW)
    GPIO.setup(red, GPIO.LOW)

def off():
    green = 20
    red = 21
    blue = 22
    print("LED off")
    GPIO.output(green,GPIO.LOW)
    GPIO.output(red,GPIO.LOW)
    GPIO.output(blue,GPIO.LOW)

white()
time.sleep(2)

red()
time.sleep(2)

blue()
time.sleep(2)

green()
time.sleep(2)

off()