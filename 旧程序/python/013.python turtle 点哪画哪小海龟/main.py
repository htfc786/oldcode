import turtle
import random

try:
    turtle.bgcolor("skyblue")
    pen = turtle.Pen()
    pen.shape("turtle")

    pos = []

    def xy(x,y):
        pos.append([x,y])
        for y in range(28000):
            for z in pos:
                z[0] = z[0] + 0#random.randint(-1,2)
                z[1] = z[1] + 0

                x = z[0]
                y = z[1]

                #pen.reset()
                pen.penup()
                pen.setheading(0)
                pen.setposition(x,y)
                pen.pendown()
                pen.fillcolor(random.choice(["red","pink","yellow","orange"]))
                pen.begin_fill()
                pen.circle(30)
                pen.end_fill()
                pen.setheading(270)
                pen.fd(60)

                turtle.update()

    turtle.onscreenclick(xy)
    turtle.done()

except Exception as e:
    print("发生错误：",e)