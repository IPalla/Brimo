import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

RED = 21
GREEN = 20
BLUE = 22


GPIO.setup(RED, GPIO.OUT)
GPIO.output(RED, 0)
GPIO.setup(GREEN, GPIO.OUT)
GPIO.output(GREEN, 0)
GPIO.setup(BLUE, GPIO.OUT)
GPIO.output(BLUE, 0)

def white():
    GPIO.output(RED, 1)
    GPIO.output(GREEN, 1)
    GPIO.output(BLUE, 1)

def blue():
    GPIO.output(RED, 0)
    GPIO.output(GREEN, 0)
    GPIO.output(BLUE, 1)

def green():
    GPIO.output(RED, 1)
    GPIO.output(GREEN, 0)
    GPIO.output(BLUE, 0)

def off():
    GPIO.output(RED, 0)
    GPIO.output(GREEN, 0)
    GPIO.output(BLUE, 0)


try:
    white()
    time.sleep(2)
    blue()
    time.sleep(2)
    green()
    time.sleep(2)
    off()

except KeyboardInterrupt:
    GPIO.cleanup()
