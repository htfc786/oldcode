from turtle import *
from random import *
Screen().bgcolor("black")
t = Turtle()
t.speed(0)
while True:
    x=randint(-300,300)
    y=randint(-300,300)
    r=randint(1,10)
    t.penup()
    t.goto(x,y)
    t.pendown()
    t.color("yellow")
    t.dot(r)