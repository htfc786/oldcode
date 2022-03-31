from bs4 import BeautifulSoup
from tkinter import ttk
from PIL import ImageTk
from tkinter import messagebox
import requests
import tkinter

def download(url,name,suffix):
    from contextlib import closing
    with closing(requests.get(url, stream=True)) as response:
        chunk_size = 1024  # 单次请求最大值
        with open(name + '.' + suffix, "wb") as file:
            for data in response.iter_content(chunk_size=chunk_size):
                file.write(data)

def get_img():
    fhz = {'个性签': 'jfcs.ttf', '连笔签': 'qmt.ttf', '潇洒签': 'bzcs.ttf', '草体签': 'lfc.ttf', '合文签': 'haku.ttf', '商务签': 'zql.ttf', '可爱签': 'yqk.ttf'}
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}
    date = {
        'word': name.get(),
        'sizes': '60',
        'fonts': fhz[comboxlist.get()],
        'fontcolor': '#000000'
    }

    req = requests.post('http://www.uustv.com',date,headers=headers)
    req.encoding = req.apparent_encoding
    req = req.text
    dmy = BeautifulSoup(req, "lxml")
    dmy = dmy.findAll(name="div", attrs={"class": "tu"})[0]
    img_url = dmy.findAll(name="img")[0]['src']
    img_url = 'http://www.uustv.com/' + img_url

    download(img_url,'签名','gif')

    bm = ImageTk.PhotoImage(file=r'.\签名.gif')
    image = tkinter.Label(win,image=bm)
    image.bm = bm
    image.grid(row=1,columnspan=7)

    def get_img_to_desktop():
        import winreg
        import shutil
        desktop = winreg.OpenKey(winreg.HKEY_CURRENT_USER,r'Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders', )
        desktop = winreg.QueryValueEx(desktop, "Desktop")[0]
        shutil.copy('签名.gif', desktop)
        messagebox.showinfo('提示','已将您的签名图片保存置桌面了。')

    tkinter.Button(win,text='保存签名图片到桌面',command=get_img_to_desktop).grid(row=2,columnspan=7)

def clean():
    name.delete(0,'end')

win = tkinter.Tk()
win.title("在线签名设计")
win.geometry("540x285")
win.resizable(width=False, height=False)

tkinter.Label(win, text='输入你的名字:').grid(row=0,column=0)

name = tkinter.Entry(win, width=30)
name.grid(row=0,column=1)

tkinter.Button(win, text='清除' ,command=clean).grid(row=0,column=3)
tkinter.Label(win, text='样式:').grid(row=0,column=4)

comvalue = tkinter.StringVar()#窗体自带的文本，新建一个值
comboxlist = ttk.Combobox(win,textvariable=comvalue,width=7) #初始化
comboxlist["values"] = ['个性签', '连笔签', '潇洒签', '草体签', '合文签', '商务签', '可爱签']
comboxlist.current(0)
comboxlist.grid(row=0,column=5)

tkinter.Button(win, text='生成签名' ,font=['微软雅黑',15] ,command=get_img).grid(row=0,column=6)

win.mainloop()