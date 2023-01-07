import meowbit
import time

#可以设置字体大小
meowbit.screen.textSize(1)
#可以设置字体颜色
meowbit.screen.setColor((255,255,255))
zd_634 = ['1  刘园公交站','2  紫瑞园西门','3  龙岩道','4  辰旺路','5  艺术家园','6  瑞秀花园','7  瑞贤园','8  瑞达里','9  佳园新里','10  佳园里地铁站','11  佳园南里','12  本溪路地铁站','13  宁城楼','14  同心楼','15  绮水苑','16  阁林园','17  千禧园','18  幸福里','19  雅园里','20  人民医院','21  怡华路','22  吕祖堂','23  复兴路','24  铃铛阁','25  西马路','26  中研院附属','27  北门','28  城厢东路','29  鼓楼东','30  时代广场','31  意式风情区','32  天津站']
a = 0
lb = 0
a += 1
#补代码充 ，设置自己喜欢的屏幕背景颜色
meowbit.screen.fill((0,0,255))
meowbit.screen.showText("**电子站牌*******",0,10)
meowbit.screen.showText("000|634路|000000",0,30)
#将代码补充完整，然后可以设置自己喜欢的奖牌文字内容、文字显示的位置
meowbit.screen.showText("634路 刘园<=>天津站",5,60)
meowbit.screen.showText("00000000000000",0,90)
meowbit.screen.showText("********" + str(a),0,110)
while True:
    if meowbit.sensor.btnValue("a") == 1:
        a += 1
       #补代码充 ，设置自己喜欢的屏幕背景颜色
        meowbit.screen.fill((0,0,255))
        meowbit.screen.showText("**电子站牌*******",0,10)
        meowbit.screen.showText("000|634路|000000",0,30)
        #将代码补充完整，然后可以设置自己喜欢的奖牌文字内容、文字显示的位置
        meowbit.screen.showText("634路 刘园<=>天津站",5,60)
        meowbit.screen.showText("00000000000000",0,90)
        meowbit.screen.showText("********" + str(a),0,110)
    if meowbit.sensor.btnValue("up") == 1:
        a += 1
        lb -= 1
        if lb == len(zd_634):
            lb = 0
        if lb == -1:
            lb = len(zd_634) - 1
        #补充代码，设置自己喜欢的屏幕背景颜色
        meowbit.screen.fill((0,0,255))
        meowbit.screen.showText("**电子站牌********",0,10)
        meowbit.screen.showText("000|634路|000000",0,30)
        #将代码补充完整，然后可以设置自己喜欢的奖牌文字内容、文字显示的位置
        meowbit.screen.showText(zd_634[lb],35,60)
        meowbit.screen.showText("00000000000000",0,90)
        meowbit.screen.showText("********" + str(a),0,110)
    if meowbit.sensor.btnValue("down") == 1:
        a += 1
        lb += 1
        if lb == len(zd_634):
            lb = 0
        if lb == -1:
            lb = len(zd_634) - 1
        #补充代码，设置自己喜欢的屏幕背景颜色
        meowbit.screen.fill((0,0,255))
        meowbit.screen.showText("**电子站牌*******",0,10)
        meowbit.screen.showText("000|634路|000000",0,30)
        #将代码补充完整，然后可以设置自己喜欢的奖牌文字内容、文字显示的位置
        meowbit.screen.showText(zd_634[lb],35,60)
        meowbit.screen.showText("00000000000000",0,90)
        meowbit.screen.showText("********" + str(a),0,110)
        
    time.sleep(0.2)