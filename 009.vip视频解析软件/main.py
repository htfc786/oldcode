import requests
import re
import tkinter
import webbrowser

wangyeidaimayuan = requests.get('http://www.qmaile.com/')
wangyeidaimayuan.encoding = wangyeidaimayuan.apparent_encoding

lianjeileibiao = re.findall(re.compile('<option value="(.*?)" selected="">'),wangyeidaimayuan.text)
lianjei1 = lianjeileibiao[0]
lianjei2 = lianjeileibiao[1]
lianjei3 = lianjeileibiao[2]
lianjei4 = lianjeileibiao[3]

root = tkinter.Tk()
root.geometry('500x200')
root.title('vip视频解析软件（免费全网vip视频）（可恨的曹轶勿用）')
root.resizable(width=False,height=False)

def jishiber():
    jishiber = tkinter.Tk()
    jishiber.title("记事本")
    jishiber.geometry("250x300+200+50")
    jishiber.resizable(width=False,height=False)
    jishibers = tkinter.Scrollbar(jishiber,orient=tkinter.VERTICAL)
    jishibers.pack(fill=tkinter.Y, side=tkinter.RIGHT)
    jishibert = tkinter.Text(jishiber,yscrollcommand=jishibers.set)
    jishibert.pack()
    jishibers.config(command=jishibert.yview)

def shiyongshuoming():
    shiyongshuoming = tkinter.Tk()
    shiyongshuoming.title("使用说明")
    shiyongshuoming.geometry("250x300+200+50")
    shiyongshuoming.resizable(width=False,height=False)
    tkinter.Label(shiyongshuoming,text="使用说明").pack()
    tkinter.Label(shiyongshuoming,text="第1步：进入各大视频网站，找到想\n要观看的VIP视频，然后复制链接\n（浏览器上的视频地址）。            ").pack()
    tkinter.Label(shiyongshuoming,text="第2步：将复制的链接粘贴（Ctrl+v）\n到本软件播放地址，选择一个播放接\n口并点击播放。                                   ").pack()
    tkinter.Label(shiyongshuoming,text="第3步：你的电脑会弹出你的默认浏览\n器并解析，等待解析完成，即可免费\n观看VIP视频。                                  ").pack()
    tkinter.Label(shiyongshuoming,text="注意：你的电脑上的默认浏览器不是\nIE，并保证你的电脑已经安装Flash，\n并保证电脑已经连接网络。                 ").pack()
    
def shipinwangzan():
    shipinwangzan = tkinter.Tk()
    shipinwangzan.title("视频网站")
    shipinwangzan.geometry("250x300+200+50")
    shipinwangzan.resizable(width=False,height=False)
    def le():
        webbrowser.open('http://www.le.com/')
    def iqiyi():
        webbrowser.open('https://www.iqiyi.com/')
    def mgtv():
        webbrowser.open('http://www.mgtv.com/')
    def tudou():
        webbrowser.open('http://www.tudou.com/')
    def vqq():
        webbrowser.open('https://v.qq.com/')
    def youku():
        webbrowser.open('https://www.youku.com/')
    def tvsohu():
        webbrowser.open('https://tv.sohu.com/')
    def pptv():
        webbrowser.open('http://www.pptv.com/')
    tkinter.Button(shipinwangzan,text = "进入乐视视频  ",command = le).pack()
    tkinter.Button(shipinwangzan,text = "进入爱奇艺视频",command = iqiyi).pack()
    tkinter.Button(shipinwangzan,text = "进入芒果视频  ",command = mgtv).pack()
    tkinter.Button(shipinwangzan,text = "进入土豆视频  ",command = tudou).pack()
    tkinter.Button(shipinwangzan,text = "进入腾讯视频  ",command = vqq).pack()
    tkinter.Button(shipinwangzan,text = "进入优酷视频  ",command = youku).pack()
    tkinter.Button(shipinwangzan,text = "进入搜狐视频  ",command = tvsohu).pack()
    tkinter.Button(shipinwangzan,text = "进入pptv视频  ",command = pptv).pack()
menu = tkinter.Menu(root)
menu.add_command(label='使用说明',command=shiyongshuoming)
menu.add_command(label='视频网站',command=shipinwangzan)
menu.add_cascade(label='记事本',command=jishiber)
root['menu'] = menu

tkinter.Label(root,text='播放接口:',font=12).grid(row=0,column=0)
rootstr = tkinter.StringVar()
tkinter.Radiobutton(root,text='播放接口1',variable=rootstr,value=lianjei1).grid(row=0,column=1)
tkinter.Radiobutton(root,text='播放接口2',variable=rootstr,value=lianjei2).grid(row=1,column=1)
tkinter.Radiobutton(root,text='播放接口3',variable=rootstr,value=lianjei3).grid(row=2,column=1)
tkinter.Radiobutton(root,text='播放接口4',variable=rootstr,value=lianjei4).grid(row=3,column=1)

tkinter.Label(root,text='播放链接:',font=12).grid(row=5,column=0)
bofangurl = tkinter.StringVar()
cls = tkinter.Entry(root,text='',width=50,textvariable=bofangurl).grid(row=5,column=1)

def bfm():
    webbrowser.open(rootstr.get()+bofangurl.get())

tkinter.Button(root,text='播放',font=20,width=8,command=bfm).grid(row=6,column=1)

root.mainloop()