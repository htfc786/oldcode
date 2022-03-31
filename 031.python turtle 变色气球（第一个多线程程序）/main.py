import turtle
import random
import threading

turtle.bgcolor("skyblue")
turtle.tracer(False)


def xy(x,y):
    pen = turtle.Pen()
    pen.hideturtle()
    pen.speed(0)

    while True:
        #pen.reset()
        pen.penup()
        pen.setheading(0)
        pen.setposition(x,y)
        pen.pendown()
        pen.fillcolor(random.choice(["red","pink","yellow","orange","green","blue"]))
        pen.begin_fill()
        pen.circle(30)
        pen.end_fill()
        pen.setheading(270)
        pen.fd(60)

        turtle.update()

threading.Thread(target=xy,args=(0,0)).start()
threading.Thread(target=xy,args=(100,100)).start()
threading.Thread(target=xy,args=(-100,100)).start()
threading.Thread(target=xy,args=(100,-100)).start()
threading.Thread(target=xy,args=(-100,-100)).start()
threading.Thread(target=xy,args=(200,200)).start()
threading.Thread(target=xy,args=(-200,200)).start()
threading.Thread(target=xy,args=(200,-200)).start()
threading.Thread(target=xy,args=(-200,-200)).start()
threading.Thread(target=xy,args=(200,0)).start()
threading.Thread(target=xy,args=(0,200)).start()
threading.Thread(target=xy,args=(-200,0)).start()
threading.Thread(target=xy,args=(0,-200)).start()

turtle.done()