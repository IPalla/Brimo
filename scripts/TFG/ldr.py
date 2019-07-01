from gpiozero import LightSensor, Buzzer
import sys, time
ldr = LightSensor(17)  # alter if using a different pin
while True:
  print(ldr.value)
  time.sleep(0.2)
