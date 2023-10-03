import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox
from PIL import Image
import shutil


def img_to_L():
    def get_desktop_location():
        import winreg
        desktop = winreg.OpenKey(winreg.HKEY_CURRENT_USER,r'Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders', )
        desktop = winreg.QueryValueEx(desktop, "Desktop")[0]
        return desktop

    tp = filedialog.askopenfile().name
    image_file = open(tp, 'rb')
    image_file = Image.open(image_file)
    image_file = image_file.convert('L')
    image_file.save('黑白.jpg')
    shutil.copy('黑白.jpg', get_desktop_location())

    messagebox.showinfo('提示', '已将图片保存到桌面上了')


def init():
    try:
        img_to_L()
    except Exception as e:
        messagebox.showerror('错误', '发生错误：' + str(e))


if __name__ == '__main__':
    win = tk.Tk()
    win.title("彩色图片=>黑白图片")
    win.geometry("300x25")
    win.resizable(width=False, height=False)
    tk.Button(win, text='点击开始选择图片、转换图片为黑白色、保存到桌面上', command=init).pack()
    win.mainloop()
