import meowbit
import time
while True:
    temp = meowbit.sensor.getTemp()
    meowbit.screen.showText('温度是：' + str(temp))
    time.sleep(0.1)
    meowbit.screen.clear()