from bs4 import BeautifulSoup
import requests
import tkinter
from tkinter import messagebox

def shart():
    if len(number.get()) < 7:
        messagebox.showerror('错误','电话号码最少要写前7位！')
    elif len(number.get()) > 11:
        messagebox.showerror('错误', '电话号码最多有11位！')
    else:
        url = 'https://www.ip138.com/mobile.asp?mobile={}&action=mobile'.format(number.get())
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}

        req = requests.get(url, headers=headers)
        req.encoding = req.apparent_encoding
        req = req.text
        dmy = BeautifulSoup(req, "lxml")
        html_date = dmy.findAll(name="div", attrs={"class": "table"})[0]
        html_date = html_date.findAll(name="tbody")[0]
        html_date = html_date.findAll(name="tr")
        kahaoguishudi = html_date[1].findAll(name="td")[1]
        kahaoguishudi = kahaoguishudi.findAll(name="span")[0].string
        kahaoguishudi = kahaoguishudi.plreace('\xa0',' ')
        kaleixing = html_date[2].findAll(name="td")[1]
        kaleixing = kaleixing.findAll(name="span")[0].string
        quhao = html_date[3].findAll(name="td")[1]
        quhao = quhao.findAll(name="span")[0].string
        youbian = html_date[4].findAll(name="td")[1]
        youbian = youbian.findAll(name="span")[0].string
        date_list = ['',kahaoguishudi ,kaleixing ,quhao ,youbian]
        tkinter.Label(win, text=date_list[1], fg='red').grid(row=1, column=1)
        tkinter.Label(win, text=date_list[2], fg='red').grid(row=2, column=1)
        tkinter.Label(win, text=date_list[3], fg='red').grid(row=3, column=1)
        tkinter.Label(win, text=date_list[4], fg='red').grid(row=4, column=1)

if __name__ == '__main__':
    def clean():
        number.delete(0,'end')

    def main():
        try:
            shart()
        except Exception as e:
            messagebox.showerror('错误', '发生错误：' + str(e))

    win = tkinter.Tk()
    win.title("在线电话号码位置查询器")
    win.geometry("600x140")
    win.resizable(width=False, height=False)

    tkinter.Label(win,text='请输入电话号码（前7~11位）：',fg='green').grid(row=0,column=0)

    number = tkinter.Entry(win,width=40)
    number.grid(row=0,column=1)

    tkinter.Button(win, text='清除', command=clean).grid(row=0, column=3)
    tkinter.Button(win, text='查询信息', font=['微软雅黑', 15], command=main).grid(row=0, column=4)

    tkinter.Label(win, text='卡号归属地：', fg='green').grid(row=1, column=0)
    tkinter.Label(win, text='卡类型：', fg='green').grid(row=2, column=0)
    tkinter.Label(win, text='区号：', fg='green').grid(row=3, column=0)
    tkinter.Label(win, text='邮编：', fg='green').grid(row=4, column=0)

    win.mainloop()