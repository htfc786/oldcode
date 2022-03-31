from time import *
from os import *
while True:
    a = strftime("%Y.%m.%d %H:%M:%S", localtime())
    print(a)
    sleep(1)
    system("cls")
#%Y年%m月%h日