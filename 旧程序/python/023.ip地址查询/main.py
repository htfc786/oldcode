from bs4 import BeautifulSoup
import requests
import tkinter
from tkinter import messagebox

def shart():
    if len(number.get()) < 0 or len(number.get()) > 16:
        messagebox.showerror('错误','请输入正确的ip')
    else:
        url = 'https://www.ip138.com/iplookup.asp?ip={}&action=2'.format(number.get())
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}

        req = requests.get(url, headers=headers)
        req.encoding = req.apparent_encoding
        req = req.text
        dmy = BeautifulSoup(req, "lxml")
        html_date = dmy.findAll(name="table", attrs={"width":"80%" ,"border":"0" ,"align":"center" ,"cellpadding":"0" ,"cellspacing":"0"})[0]
        html_date = html_date.findAll(name="tr")[2]
        html_date = html_date.findAll(name="li")

        ans = html_date[0].findAll(name="font",attrs={"color":"blue"})[0].string
        cankao = html_date[1].string
        cankao2 = html_date[2].string
        jianrong = html_date[3].string
        yingshe = html_date[4].string

        date_list = [ans ,cankao ,cankao2 ,jianrong ,yingshe]
        tkinter.Label(win, text=date_list[0]).grid(row=1, columnspan=4)
        tkinter.Label(win, text=date_list[1]).grid(row=2, columnspan=4)
        tkinter.Label(win, text=date_list[2]).grid(row=3, columnspan=4)
        tkinter.Label(win, text=date_list[3]).grid(row=4, columnspan=4)
        tkinter.Label(win, text=date_list[4]).grid(row=5, columnspan=4)

if __name__ == '__main__':
    def clean():
        number.delete(0,'end')

    def main():
        try:
            shart()
        except Exception as e:
            messagebox.showerror('错误', '发生错误：' + str(e))

    win = tkinter.Tk()
    win.title("IP地址归属地查询")
    win.geometry("480x160")
    win.resizable(width=False, height=False)

    tkinter.Label(win,text='请输入ip：',fg='green').grid(row=0,column=0)

    number = tkinter.Entry(win,width=40)
    number.grid(row=0,column=1)

    tkinter.Button(win, text='清除', command=clean).grid(row=0, column=3)
    tkinter.Button(win, text='查询信息', font=['微软雅黑', 15], command=main).grid(row=0, column=4)

    win.mainloop()
    print()