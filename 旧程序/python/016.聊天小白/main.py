import turtle
import random

turtle.setup(500,800)
turtle.title("聊天小白")
turtle.bgcolor("#ECEDEE")
turtle.tracer(False)

pen = turtle.Pen()
pen.up()
pen.setposition(-220,360)

top = 340

def talk(who,words):
    global top

    if top < -340:
        pen.reset()
        top = 340

    pen.up()
    if who == "you":
        pen.setposition(-220,top)
    else:
        pen.setposition(220-len(str(words))*14,top)
    pen.setheading(270)
    pen.forward(50)
    top = top-50
    pen.down()
    pen.setheading(0)

    pen.width(40)
    if who == "you":
        pen.color("#93EC6A")
    else:
        pen.color("#FEFFFF")

    length = len(str(words))*14
    pen.forward(length)
    pen.backward(length)
    pen.color("black")
    pen.setheading(270)
    pen.up()
    pen.forward(8)
    pen.down()
    pen.setheading(0)
    pen.write(str(words),align="left")

say = {
    "你好":["你好呀！","你好！","Hello!","Hi!"],
    "您好":["不用那么客气","您好！！","您也好"],
    "什么名字":["我的名字叫小白。"],
    "吃饭了吗":["吃了","吃了，吃的饱饱的！！","还没吃呢","还没吃呢，我不想吃饭"],
    "学业怎么样":["不太好，的我在努力","挺好的！！哈哈哈","中等，中下等，还行吧。","考试考了100分，你说呢"],
    "你爸爸是谁":["我的爸爸是我的开发人员"],
    "你妈妈是谁":["我的妈妈是我的开发人员"],
    "工作是什么":["我的工作就是和你聊天"],
    "几岁了":["我{}岁".format(2020-int(2020))],
    "hello":["你好呀！","你好！","Hello!","Hi!"],
    "hi":["不用那么客气","您好！！","您也好"],
    "None":["输入处输入esc可退出"],
}

talk("me","你好，我是小白，在输入处输入esc可退出")

while True:
    words = str(turtle.textinput("输入","请输入聊天内容："))
    talk("you", words)
    answer = None
    for x in say.keys():
        if words.find(x) != -1:
            answers = say[x]
            answer = random.choice(answers)
            break

    if answer:
        talk("me",answer)
    elif words == "esc":
        talk("me","你输入了esc即将退出。")
        break
    elif words.find("+") != -1 or words.find("-") != -1 or words.find("*") != -1 or words.find("/") != -1 :
        try:
            talk("me","计算结果是：" + str(eval(words)))
        except Exception as e:
            talk("me","计算发生错误")
    else:
        talk("me","小白还不知道是什么意思呢")
