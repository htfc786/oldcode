import os
from tqdm import trange

# 1.读取文件，把文件的每一行转成列表
def read_file(file_path):
    lines = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if line:
                lines.append(line)
    return lines

enList = read_file('en.txt')
cnList = read_file('chinese.txt')
# enList = ['apple', 'banana', 'orange']
# cnList = ['苹果', '香蕉', '橙子']

# 初始化adb剪切板
# 请先安装clipper.apk
# https://github.com/majido/clipper
os.system('adb shell am startservice ca.zgrs.clipper/.ClipboardService')
# 命令：f'adb shell am broadcast -a clipper.set -e text "{text}"'

#关闭输入法
def close_input_method():
    os.system('adb shell input tap 996 1048')

# 2. 遍历两个列表，逐行比较，找到匹配的行
minLen = min(len(enList),len(cnList))
for i in trange(minLen):
    en = enList[i]; cn = cnList[i]
    # 3.填写单词
    # 将单词放到剪切板
    os.system(f'adb shell am broadcast -a clipper.set -e text "{en}"')
    # 点击“卡片正面”区域
    os.system('adb shell input tap 150 350')
    close_input_method()
    # 粘贴到此区域
    # 在 150 375 位置长按 500毫秒
    os.system('adb shell input swipe 150 350 150 350 500')
    # 点击粘贴
    os.system('adb shell input tap 128 260')
    # 4.获取信息
    # 点击“获取单词”按钮 550 1733
    os.system('adb shell input tap 550 1733')
    # 5 中文替换
    # 替换剪切板
    os.system(f'adb shell am broadcast -a clipper.set -e text "{cn}"')
    # 长按全选
    os.system('adb shell input swipe 100 780 100 780 500')
    close_input_method()
    os.system('adb shell input tap 100 684')
    # 模拟键盘，删除内容
    os.system('adb shell input keyevent KEYCODE_DEL')
    # 粘贴内容
    os.system('adb shell input swipe 100 780 100 780 500')
    os.system('adb shell input tap 100 684')
    # 6 点击按钮，完成添加
    os.system('adb shell input tap 940 150')
    #### 完成添加！
    print(f'完成添加({i+1}/{minLen})：{en} {cn}')


