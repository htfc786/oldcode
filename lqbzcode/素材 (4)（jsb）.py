from time import* 

def fun(line):
    for i in range(len(line)):
        print("\r"+line[0:i+1],end="")
        sleep(0.15)
fun("С������·��������Ҵ�δ������ˡ�")
print("")