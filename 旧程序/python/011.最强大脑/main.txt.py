import turtle
import random
import time
import sys

print(" 欢迎来到《最强大脑》～")
print("请观察图形，记住数量 ～")

t = turtle.Pen()

while True:
    t.speed(0)
    t.penup()
    
    num = [random.randint(1,8),random.randint(1,8),random.randint(1,8),random.randint(1,8),random.randint(1,8)]
    col = ["red","green","blue","skyblue","pink"]
    clc = ["红色","绿色","蓝色","天蓝色 ","粉色"]
    
    for i in range(num[0]):
        t.goto(random.randint(-300, 300),random.randint(-300, 300))
        t.color(col[0])
        t.dot(random.randint(40, 60))

    for i in range(num[1]):
        t.goto(random.randint(-300, 300),random.randint(-300, 300))
        t.color(col[1])
        t.dot(random.randint(40, 60))
    
    for i in range(num[2]):
        t.goto(random.randint(-300, 300),random.randint(-300, 300))
        t.color(col[2])
        t.dot(random.randint(40, 60))

    for i in range(num[3]):
        t.goto(random.randint(-300, 300),random.randint(-300, 300))
        t.color(col[3])
        t.dot(random.randint(40, 60))

    for i in range(num[4]):
        t.goto(random.randint(-300, 300),random.randint(-300, 300))
        t.color(col[4])
        t.dot(random.randint(40, 60))

    time.sleep(10)
    t.hideturtle()

    n = random.randint(0,4)
    answer = input("颜色为" + clc[n] + "的点有几个(一定要写数字,不然会报错（tc除外）！！！)（输入tc即可退出）:")
    if answer == "tc":
        sys.exit(0)
    answer = int(answer)
    if answer == num[n]:
        print(" 回答正确! ")
    else:
        print(" 回答错误!正确答案为:",num[n])
    print("-"*50)
    time.sleep(10)
