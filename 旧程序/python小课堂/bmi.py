#kg/(m*m)
import sys
title = '''****************************************
********>>>欢迎使用BMI计算器<<<*********
****************************************'''
print(title)

def bmi_jiankang(bmi):
    if bmi <= 18:
        x = "你的身体偏瘦，注意你的饮食!!"
    elif bmi > 18 and bmi <= 24:
        x = "你的身体很正常。"
    elif bmi > 24 and bmi <= 27:
        x = "你的身体超重了！！o(╥﹏╥)o"
    elif bmi >27 and bmi <= 30:
        x = "你的身体肥胖，注意减肥，不要吃太多!!"
    else:
        x = "你的身体严重肥胖，注意减肥，不要吃太多，在这样下去，你可能得“三高”!!"
    return x


while True:
    try:
        m = input('请输入身高（m）(输入exit退出):')
        if m == 'exit':
            sys.exit()
        m = float(m)
        k = float(input('请输入体重（kg）:'))

        bmi = k/(m*m)

        print('您的BMI值为：' + str(bmi))

        bmi_jiankang = bmi_jiankang(bmi)
        print(bmi_jiankang)

    except ValueError as e:
        print('请输入正确的值！！！')

    print('-'*50)