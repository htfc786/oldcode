import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox
from PIL import Image

def main():
    def get_img(tp,codelib):
        image_file = open(tp ,'rb')
        image_file = Image.open(image_file)
        image_file = image_file.convert('L')
        pic = ''
        for h in range(0,image_file.size[1]):   #1:纵  2:横
            for w in range(0,image_file.size[0]):
                gray = image_file.getpixel((w,h))
                pic = pic + codelib[int((len(codelib)*gray)/256)]
            pic = pic + '\n'
        return pic

    def get_desktop_location():
        import winreg
        desktop = winreg.OpenKey(winreg.HKEY_CURRENT_USER,r'Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders', )
        desktop = winreg.QueryValueEx(desktop, "Desktop")[0]
        return desktop

    tp = filedialog.askopenfile().name
    codelib = '''@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'. '''
    text_img = get_img(tp,codelib)

    with open(get_desktop_location() + r'\字符画.txt','w') as f:
        f.write(text_img)

    messagebox.showinfo('提示','已将图片保存到桌面上的字符画.txt，用记事本打开并把字体调整到1或2就可以看到图片了')

def init():
    try:
        main()
    except Exception as e:
        messagebox.showerror('错误','发生错误：' + str(e))

if __name__ == '__main__':
    win = tk.Tk()
    win.title("图片=>像素画")
    win.geometry("300x50")
    win.resizable(width=False,height=False)
    tk.Label(win,text='提示：在运行此程序是可能会未响应，不用管它就行了').pack()
    tk.Button(win,text='选择一张图片并转换成字符画并将txt文本保存到桌面上',command=init).pack()
    win.mainloop()