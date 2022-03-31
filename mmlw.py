import random
import turtle

pen = turtle.Pen()

turtle.setup(700,450)
turtle.title("(✪ω✪)祝妈妈生日快乐(✪ω✪)")
#turtle.tracer(False)


pen.hideturtle()
pen.penup()
pen.pencolor('pink')
pen.goto(-200,100)

for i in range(200):
    pen.goto(-200+random.randint(0,100),100+random.randint(-0,100))
    pen.pendown()
    pen.dot(random.randint(1,10))
    pen.penup()




