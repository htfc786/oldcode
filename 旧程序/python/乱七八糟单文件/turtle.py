from turtle import *
t=Turtle()
t.shape("turtle")
t.forward(20)
for i in range(19):
    for i in range(5):
        for i in range(45):
            t.forward(1)
            t.right(8)
        t.forward(10)
    t.right(20)
t.right(-40)
for i in range(20):
    for i in range(18):
        for i in range(5):
            for i in range(45):
                t.forward(1)
                t.right(-8)
            t.forward(10)
        t.right(20)