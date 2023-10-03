import meowbit
import random
import time

meowbit.screen.showText("随机数生成器（1-10）")


while True:
    if meowbit.sensor.btnValue("a") == 1:
        a = random.randint(1,10)
        meowbit.screen.fill((0,0,0))
        meowbit.screen.showText("随机数生成器（1-10）")
       #补代码充 ，设置自己喜欢的屏幕背景颜色
        meowbit.screen.showText("随机数（1-10）：" + str(a),0,20)
    time.sleep(0.2)