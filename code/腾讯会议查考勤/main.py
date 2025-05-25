# pyautogui
import pyautogui
import time
import win32clipboard

StudentListFile = "students.txt"

def getStudents():
    """获取学生名单"""
    with open(StudentListFile, "r", encoding="utf-8") as f:
        students = f.readlines()
    #去除换行
    students = [i.strip() for i in students]
    return students

def click(img, sleep=1):
    """点击图片中心"""
    enter_mt_btn = pyautogui.locateCenterOnScreen(img)  # 锁定位置
    pyautogui.moveTo(enter_mt_btn)  # 移动到这里
    pyautogui.click()  # 单击一下
    time.sleep(sleep)  # 等待1s

# 返回增加窗口
def getAddWindow(name, before, delay=0.5):
    after = pyautogui.getWindowsWithTitle(name)
    while len(after) != len(before):
        time.sleep(delay)
        after = pyautogui.getWindowsWithTitle(name)
    if len(after) > len(before):
        for i in after:
            if i not in before:
                return i
            

# 等待窗口大小变化
def waitWindowSizeChange(window, delay=0.5):
    print(window)
    width = window.width
    height = window.height
    while width != window.width and height != window.height:
        time.sleep(delay)
        
def copyText(text):
    win32clipboard.OpenClipboard()
    win32clipboard.EmptyClipboard()
    win32clipboard.SetClipboardText(text)
    win32clipboard.CloseClipboard()

# 点击成员按钮
# click("icon/member.png", 3)
# click("icon/window.png")

# 根据窗口名字找窗口位置
def hasMember(name):
    h = pyautogui.getWindowsWithTitle("成员")
    if len(h) == 0:
        h = pyautogui.getWindowsWithTitle("管理成员")
    h = h[0]
    # 置顶窗口
    h.activate()
    pyautogui.moveTo(h.left+60, h.top+55)
    pyautogui.click()
    #清空输入框
    pyautogui.hotkey('ctrl', 'a')
    # 将变量放入剪切板
    copyText(name)
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(2)
    # 获取屏幕坐标点颜色
    pyautogui.moveTo(h.left+60, h.top+130)  # TODO <== 根据腾讯会议版本不同或会议类型不同，坐标可能不同，请自行测量修改！
    color = pyautogui.pixel(pyautogui.position().x, pyautogui.position().y)
    # print(color)
    return color != (255, 255, 255)

students = getStudents()

print(students)

for num in range(5):
    result = {}
    for i in students:
        # print(i)
        try:
            has = hasMember(i)
            print(i, has)
            result[i] = has
        except:
            print("检测发生错误：", i)

    students = []
    text = "未进入直播的同学：\n"
    # 输出未找到的学生
    for i in result:
        if result[i] == False:
            text += i + "\n"
            students.append(i)

    print("="*10)
    # print("第 "+(num+1)+" 次尝试:")
    print(text)
    print("="*10)

# time.sleep(2)
# #截图
# img = pyautogui.screenshot()
# img.save("screenshot.png")

