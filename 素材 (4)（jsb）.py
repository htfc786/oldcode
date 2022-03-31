from time import* 

def fun(line):
    for i in range(len(line)):
        print("\r"+line[0:i+1],end="")
        sleep(0.15)
fun("helloworld 你好世界 join（1234567890qwertyuiopasdfghjklzxcvbnm）")
print("")