import random
import string
print('''##################
####猜字母游戏####
##################''')
zimu = string.ascii_lowercase  # 获取26个小写字母
print('猜出字母范围是26个字母（' + zimu + ')一定要写小写！！')
while True:
    random_zimu = random.choice(zimu)
    my_input = input('请输入猜到的字母：' + random_zimu)
    if my_input == random_zimu:
        print('猜对了')
    else:
        print('猜错了,正确答案是：' + random_zimu)

'''
import string

string.ascii_uppercase  # 获取26个大写字母
string.ascii_lowercase  # 获取26个小写字母
string.ascii_letters  # 获取26个小写字母和26个大写字母
'''
