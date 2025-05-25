import time
from pynput.mouse import Button, Listener, Controller as MouseController
from pynput.keyboard import Key, Controller as KeyController

keyboard = KeyController()
mouse = MouseController()
leftBtnType = False
shiftBtn = False

def on_click(x, y, button, pressed):
    global leftBtnType, shiftBtn
    # 监听鼠标点击
    # print('{0} at {1}'.format('Pressed' if pressed else 'Released', (x, y)))
    # print(x, y, button, pressed)
    # print("-"*20,leftBtnType)
    if button == Button.left:
        leftBtnType = pressed
        if (not pressed) and shiftBtn: #抬起
            time.sleep(0.5)
            print("RUN! UP")
            keyboard.release(Key.shift)
            shiftBtn = False
    # if button == Button.right:
    if button == Button.middle:
        if pressed and leftBtnType: #按下
            print("RUN! DOWN")
            keyboard.press(Key.shift)
            # mouse.release(Button.right)
            shiftBtn = True

with Listener(on_click=on_click) as listener:
    listener.join()