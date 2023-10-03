import meowbit
import time
import random

while True:
    rgb = (random.randint(0,128),random.randint(0,128),random.randint(0,128))
    meowbit.screen.fill(rgb)
    time.sleep(0.1)
