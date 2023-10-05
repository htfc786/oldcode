from tkinter import *
from tkinter import colorchooser
from tkinter import messagebox
win = Tk()
win.title("颜色查询器")
win.geometry("250x350+200+50")
win.resizable(width=False,height=True)

Label(win,text="欢迎来到颜色查询器").pack()

def yansebianma():
    yansebianma = colorchooser.askcolor()
    print(yansebianma)
    
def ok():
    messagebox.askyesno('查询结果',yansebianma)
    
def jishiber():
    jishiber = Tk()
    jishiber.title("记事本")
    jishiber.geometry("250x300+200+50")
    jishiber.resizable(width=True,height=False)
    jishibers = Scrollbar(jishiber,orient=VERTICAL)
    jishibers.pack(fill=Y, side=RIGHT)
    jishibert = Text(jishiber,yscrollcommand=jishibers.set)
    jishibert.pack()
    jishibers.config(command=jishibert.yview)
    


Button(win,text = "选色",width = 20,height = 5,command = yansebianma).pack()
Button(win,text = "确定",width = 20,height = 5,command = ok).pack()
Button(win,text = "记事本",width = 5,height = 1,command = jishiber).pack()

v = StringVar()
Entry(win, width=30,textvariable=v,stat="readonly").pack()
v.set(yansebianma)

win.mainloop()
