import json

# 标题
print('''--------------------------------------------
--欢迎使用学生信息管理系统V1.0（命令行版）--
--------------------------------------------''')

student_data = open('student.json', 'r', encoding='utf-8').read()
student_data = json.loads(student_data)

# 菜单
ts = '''--------------
1-增加学生信息
2-显示学生信息
3-查询学生信息
4-更改学生信息
5-删除学生信息
6-保存文件
0-退出
--------------'''

while True:
    print(ts)  # 输出菜单
    xuxa = input('请输入您想要操作的项目：')  # 让用户选择操作项目
    if xuxa == '1':  # 增加学生信息
        new_name = input('请输入学生的新姓名：')
        new_age = input('请输入学生的新年龄：')
        new_home_address = input('请输入学生的新家庭住址：')
        new_id_card_number = input('请输入学生的新身份证号：')
        new_grade = input('请输入学生的新年级：')
        new_class = input('请输入学生的新班级：')
        gg_new = input('确定要更改吗（y/n）:')
        if gg_new == 'y':
            jdict = {'name': new_name, 'age': new_age, 'home_address': new_home_address,
                     'id_card_number': new_id_card_number, 'grade': new_grade, 'class': new_class}
            student_data.append(jdict)
            print('更改成功！')
        else:
            print('更改已被取消。')
    elif xuxa == '2':  # 显示学生信息
        print('+----------------------------学生信息--------------------------------------+')
        pkt = '|姓名      年龄     家庭住址           身份证号               年级   班级'
        pmb = '|{}    {}     {}       {}      {}     {} '  # 定义模板
        print(pkt)
        for student in student_data:  # 遍历数据库列表
            name = student['name']
            if len(name) == 2:  # 判断名字长度
                name += '    '
            elif len(name) == 3:
                name += '  '
            print(pmb.format(name, student['age'], student['home_address'], student['id_card_number'], student['grade'],
                             student['class']))  # 用模板输出学生信息
        print('+--------------------------------------------------------------------------+')
    elif xuxa == '3':  # 查询学生信息
        cx_name = input('请输入要查询学生的姓名：')
        cs = 0
        for student in student_data:  # 遍历数据库列表
            if student['name'] == cx_name:
                break
            cs += 1
        if cs == len(student_data):
            print('没有此学生信息！！')
        else:
            print('+--------------------------查询到的学生信息-----------------------------------+')
            pkt = '|姓名      年龄     家庭住址           身份证号               年级   班级'
            pmb = '|{}    {}     {}       {}      {}     {} '  # 定义模板
            print(pkt)
            student = student_data[cs]  # 遍历数据库列表
            name = student['name']
            if len(name) == 2:  # 判断名字长度
                name += '    '
            elif len(name) == 3:
                name += '  '
            print(pmb.format(name, student['age'], student['home_address'], student['id_card_number'], student['grade'],
                             student['class']))  # 用模板输出学生信息
            print('+--------------------------------------------------------------------------+')
    elif xuxa == '4':  # 更改学生信息
        cx_name = input('请输入要更改学生老的姓名：')
        cs = 0
        for student in student_data:  # 遍历数据库列表
            if student['name'] == cx_name:
                break
            cs += 1
        if cs == len(student_data):
            print('没有此学生信息！！')
        else:
            print('+--------------------------预览到的学生信息-----------------------------------+')
            pkt = '|姓名      年龄     家庭住址           身份证号               年级   班级'
            pmb = '|{}    {}     {}       {}      {}     {} '  # 定义模板
            print(pkt)
            student = student_data[cs]  # 遍历数据库列表
            name = student['name']
            if len(name) == 2:  # 判断名字长度
                name += '    '
            elif len(name) == 3:
                name += '  '
            print(pmb.format(name, student['age'], student['home_address'], student['id_card_number'], student['grade'],
                             student['class']))  # 用模板输出学生信息
            print('+--------------------------------------------------------------------------+')
            new_name = input('请输入学生的新姓名：')
            new_age = input('请输入学生的新年龄：')
            new_home_address = input('请输入学生的新家庭住址：')
            new_id_card_number = input('请输入学生的新身份证号：')
            new_grade = input('请输入学生的新年级：')
            new_class = input('请输入学生的新班级：')
            gg_new = input('确定要更改吗（y/n）:')
            if gg_new == 'y':
                student_data[cs]['name'] = new_name
                student_data[cs]['age'] = new_age
                student_data[cs]['home_address'] = new_home_address
                student_data[cs]['id_card_number'] = new_id_card_number
                student_data[cs]['grade'] = new_grade
                student_data[cs]['class'] = new_class
                print('更改成功！')
            else:
                print('更改已被取消。')
    elif xuxa == '5':  # 删除学生信息
        cx_name = input('请输入要更改学生的姓名：')
        cs = 0
        for student in student_data:  # 遍历数据库列表
            if student['name'] == cx_name:
                break
            cs += 1
        if cs == len(student_data):
            print('没有此学生信息！！')
        else:
            gg_new = input('确定要更改吗（y/n）:')
            if gg_new == 'y':
                student = student_data[cs]
                student_data.remove(student)
                print('更改成功！')
            else:
                print('更改已被取消。')
    elif xuxa == '6':  # 文件保存设置
        open('student.json', 'w', encoding='utf-8').write(str(student_data))
        print('保存成功')
    elif xuxa == '0':  # 退出
        open('student.json', 'w', encoding='utf-8').write(str(student_data))
        print('保存成功')
        break
    else:
        print('提示：没有此选项')
