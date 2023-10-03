import time
def effect_typewriter(line):
    for i in range(len(line)):
        print("\r"+line[0:i+1],end="")
        time.sleep(0.1)
    print()

def effect_progresbar(scale,percentage):
    '''这是一个效果函数，用于模仿进度条效果，scale=进度条的长度，'''

    for i in range(scale+1):
        print("\r{:^3.0f}%[{}>>{}]".format((i/scale)*percentage,'='*i,'-'*(scale-i)),end='')
        time.sleep(0.3)

def zhishu(start,end):
    a = []
    for i in range(start,end + 1):
        a.append(i)
    print(a)

if __name__ == '__main__':

    effect_progresbar()
    zhishu(1,5)