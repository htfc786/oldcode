#body > div > div.wrapbox > div.hotcity > span
from bs4 import BeautifulSoup
from tkinter import ttk
import requests
import tkinter 

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"}

def fandurl():
	req = requests.get("https://www.tianqi.com/chinacity.html",headers=headers)
	req.encoding = req.apparent_encoding
	req = req.text
	
	soup = BeautifulSoup(req,"lxml")

	chengshiji = soup.findAll(name="div", attrs={"class" :"citybox"})[0]
	
	chengshitqurl = {}
	chengshilist = []

	for k in chengshiji.find_all('h2'):
		for k in k.find_all('a'):
			chengshitqurl[k.string] = "https://www.tianqi.com" + k['href']
			chengshilist.append(k.string)
	return [chengshitqurl,chengshilist]
	
def cityurl(city,url):
	if city in url:
		return url[city]
	else:
		return "没有此城市或省份"
		
def citywether(citytqurl):
	if citytqurl == "https://www.tianqi.com/beijing/" or citytqurl == "https://www.tianqi.com/tianjin/" or citytqurl == "https://www.tianqi.com/chongqing/" or citytqurl == "https://www.tianqi.com/shanghai/":
		win = tkinter.Tk() #构造窗体
		win.title("天气预报--预报")
		win.geometry("500x500+500+200")
		win.resizable(width=False,height=False)
		
		readOnlyText = tkinter.Text(win)
		readOnlyText.insert(0.0,"656")
		readOnlyText.configure(state='disabled')
		readOnlyText.pack()  
		
		req = requests.get(citytqurl,headers=headers)
		req.encoding = req.apparent_encoding
		req = req.text
		
		soup = BeautifulSoup(req,"lxml")
		
		citywetherdmy = soup.findAll(name="dl", attrs={"class" :"weather_info"})[0]
		
		for k in citywetherdmy.find_all('dd'):
			print(k)
			
			


def sheng(*args):
	if comboxlist.get() == "北京" or comboxlist.get() == "重庆" or comboxlist.get() == "上海" or comboxlist.get() == "天津":
		pass
	else:
		citytqurl = cityurl(comboxlist.get(),citytqurljh[0])
		req = requests.get(citytqurl)
		req.encoding = req.apparent_encoding
		req = req.text
		
		soup = BeautifulSoup(req,"lxml")
		
		for k in soup.findAll(name="div", attrs={"class" :"racitybox "}):
			print(k)
			
'''
def binddef(*args):   #处理事件，*args表示可变参数  
	citytqurl = cityurl(comboxlist.get(),citytqurljh[0])
	print(citytqurl)
	citywether(citytqurl)
'''
win = tkinter.Tk() #构造窗体
win.title("天气预报--城市选择")
win.geometry("300x150+500+200")
win.resizable(width=False,height=False)
		
tkinter.Label(win,text="选择省份:").pack()
citytqurljh = fandurl()
		
comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值  
comboxlist=ttk.Combobox(win,textvariable=comvalue) #初始化 
comboxlist["values"]=citytqurljh[1]  
comboxlist.bind("<<ComboboxSelected>>",sheng)  #绑定事件,(下拉列表框被选中时，绑定go()函数)    
comboxlist.pack()
		
tkinter.Label(win,text="选择城市:").pack()

shi = []
		
comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值  
comboxlist1=ttk.Combobox(win,textvariable=comvalue) #初始化 
comboxlist1["values"]=shi
#comboxlist1.bind("<<ComboboxSelected>>",go)  #绑定事件,(下拉列表框被选中时，绑定go()函数)    
comboxlist1.pack()
		
tkinter.Button(win,text="ok")#,command=binddef).pack()
win.mainloop() #进入消息循
