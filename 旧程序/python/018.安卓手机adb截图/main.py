import subprocess

name = input("请输入文件名：")
OK = input("请确保安卓手机打开了adb并用USB数据线连接了电脑   OK了按Ender键截图")

def adb_path():
    import os
    import sys
    path = os.path.dirname(sys.argv[0])
    path = path + '/adb/'
    return path

if OK == "":
    screenshot = subprocess.Popen(adb_path() + "adb.exe shell screencap -p",shell=True,stdout=subprocess.PIPE)
    screenshot = screenshot.stdout.read()
    screenshot = screenshot.replace(b'\r\r\n',b'\n')

    with open(name + '.png','wb') as f:
        f.write(screenshot)

    print("截图成功！")