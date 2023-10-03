from random import*
while True:
    a = randint(0,99999)
    b = input("请输入猜到的数字:")
    b = int(b)
    if a != b:
        print("您没猜中，正确的是",a)
    else:
        print("您猜中了！")
        break