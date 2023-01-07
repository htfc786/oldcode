'''
#有多少字母
def count_letter(letter,word_list):
    c = 0
    for word in word_list:
        if letter in word:
            c += 1
    return c

m = count_letter('j','jhghgvlj,hsddfhsdkjjhfjggg')
print(m)

#九九乘法表
n = 9
for c in range(1,n+1):
    for r in range(1,c+1):
        print(str(r)+'x'+str(c)+'='+str(c*r),end=' ')
#         if c == r:
#             break
    print()

#######：
lb = ['22','11','33','00','22']
cz = '220'
for i in range(len(lb)):
    if lb[i] == cz:
        print('zd{}'.format(cz))
        break
    else:
        print('n{}'.format(cz))

#字符倒叙算法：
s = 'xbc'
h = ''
for i in range(len(s)-1,-1,-1):
    h += s[i]
print(h)

#python运算顺序：
#括号
#指数
#not。or
#乘除
#加减
#and

#python导入模块名字并取新的名字：
#from 函数名 import 函数名 as 新函数名

#python math库
# math.ceil(x) ---x的值向上取整
# math.frexo(x) ---返回一个元组(m,e)
# math.fmod(x,y) ---得到x/y的余数，其实是一个浮点数
# math.fabs(x) ---返回x的绝对值
# math.floor(x) ---取小于等于x的最大值，如果x是一个整数，则返回自身值

#python 列表切片
# list[start:end:step]


#python冷门知识：
#0 or 5 ---> 5
#+用于组合列表，*用于重复列表

'''
#2--100的素数
start = 2
end = 100
while start <= end:
    m = True
    for i in range(2,start):
        if start % i == 0:
            m = False
            continue
    if m:
        print(start)
        #break
    start = start + 1

