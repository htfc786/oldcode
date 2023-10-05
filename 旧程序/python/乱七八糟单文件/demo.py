#body > div > div.wrapbox > div.hotcity > span
from bs4 import BeautifulSoup
from tkinter import ttk
import requests
import tkinter 

def fandurl(headers):
	req = requests.get("https://www.tianqi.com/chinacity.html", headers=headers)
	req.encoding = req.apparent_encoding
	req = req.text
	soup = BeautifulSoup(req, "lxml")
	chengshiji = soup.findAll(name="div", attrs={"class": "citybox"})[0]

	chengshitqurl = {}
	chengshilist = []

	for k in chengshiji.find_all('h2'):
		for k in k.find_all('a'):
			chengshitqurl[k.string] = "https://www.tianqi.com" + k['href']
			chengshilist.append(k.string)
	return [chengshitqurl, chengshilist]

def cityurl(url,headers):
	city_dict = {}
	city_dict['list'] = url[1]
	city_dict['北京'] = {'list':['北京'],'北京': 'https://www.tianqi.com/beijing/'}
	city_dict['重庆'] = {'list':['重庆'],'重庆': 'https://www.tianqi.com/chongqing/'}
	city_dict['上海'] = {'list':['上海'],'上海': 'https://www.tianqi.com/shanghai/'}
	city_dict['天津'] = {'list':['天津'],'天津': 'https://www.tianqi.com/tianjin/'}
	for k,v in url[0].items():
		if k == '北京' or k == '重庆' or k == '上海' or k == '天津':
			pass
		else:
			dict = {}
			list = []
			req = requests.get(v,headers=headers)
			req.encoding = req.apparent_encoding
			req = req.text
			soup = BeautifulSoup(req, "lxml")
			soup = soup.findAll(name="div", attrs={"class": "racitybox"})[1]
			soup = soup.findAll(name="ul")[0]
			soup = soup.findAll(name="li")
			for i in soup:
				try:
					soup = i.findAll(name="b")[0]
					soup = soup.findAll(name="a")[0]
					list.append(soup.string)
					url = 'https://www.tianqi.com' + soup['href']
					dict[soup.string] = url
				except Exception as e:
					pass
			dict['list'] = list
			city_dict[k] = dict
	return city_dict

def suanze(city_url):
	shi = {'list':[]}

	def sheng(a):
		shi = sheng(a)
		print(111)

	win = tkinter.Tk() #构造窗体
	win.title("天气预报--城市选择")
	win.geometry("300x150+500+200")
	win.resizable(width=False,height=False)

	tkinter.Label(win,text="选择省份:").pack()
	comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值
	comboxlist=ttk.Combobox(win,textvariable=comvalue) #初始化
	comboxlist["values"]=city_url['list']
	shi = comboxlist.bind(lambda:sheng(comboxlist.get()))  #绑定事件,(下拉列表框被选中时，绑定go()函数)
	comboxlist.pack()
	print(shi,comboxlist)

	tkinter.Label(win,text="选择城市:").pack()
	comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值
	comboxlist1=ttk.Combobox(win,textvariable=comvalue) #初始化
	comboxlist1["values"]=shi['list']
	#comboxlist1.bind("<<ComboboxSelected>>",go)  #绑定事件,(下拉列表框被选中时，绑定go()函数)
	comboxlist1.pack()

	tkinter.Button(win,text="ok")#,command=binddef).pack()
	win.mainloop() #进入消息循`
	#return url

def wather(url,headers):
	def citywether(url, headers):
		dmy = requests.get(url, headers=headers)
		dmy.encoding = dmy.apparent_encoding
		dmy = dmy.text

		citydmy = BeautifulSoup(dmy, "lxml")

		citydmy = citydmy.findAll(name="dl", attrs={"class": "weather_info"})[0]

		cityname = citydmy.findAll(name="dd", attrs={"class": "name"})[0]
		cityname = cityname.findAll(name="h2")[0]
		cityname = cityname.string + "天气预报"

		cityweek = citydmy.findAll(name="dd", attrs={"class": "week"})[0]
		cityweek = cityweek.string

		cityweather = citydmy.findAll(name="dd", attrs={"class": "weather"})[0]
		cityweathertemp = cityweather.findAll(name="p", attrs={"class": "now"})[0]
		cityweathertemp = cityweathertemp.findAll(name="b")[0]
		cityweathera = cityweather.findAll(name="span")[0]
		cityweatherb = cityweathera.findAll(name="b")[0]
		cityweather = cityweathertemp.string + "℃," + cityweatherb.string

		cityshidu = citydmy.findAll(name="dd", attrs={"class": "shidu"})[0]
		cityshidua = cityshidu.findAll(name="b")
		cityshidu = cityshidua[0].string
		cityfengxiang = cityshidua[1].string
		cityziwaixian = cityshidua[2].string

		citykongqi = citydmy.findAll(name="dd", attrs={"class": "kongqi"})[0]
		citykongqizhiliang = citykongqi.findAll(name="h5")[0].string
		citykongqiPM = citykongqi.findAll(name="h6")[0].string

		return [cityweek, cityname, cityweather, cityshidu, cityfengxiang, cityziwaixian, citykongqizhiliang,
				citykongqiPM]

	citywether = citywether(url,headers)

	win = tkinter.Tk()
	win.title("天气预报--预报")
	win.geometry("280x180+500+200")
	win.resizable(width=False, height=False)

	tkinter.Label(win, text=citywether[0]).pack()
	tkinter.Label(win, text=citywether[1]).pack()
	tkinter.Label(win, text=citywether[2]).pack()
	tkinter.Label(win, text=citywether[3]).pack()
	tkinter.Label(win, text=citywether[4]).pack()
	tkinter.Label(win, text=citywether[5]).pack()
	tkinter.Label(win, text=citywether[6]).pack()
	tkinter.Label(win, text=citywether[7]).pack()

	win.mainloop()

def main():
	try:
		headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}
		urls = fandurl(headers)
		city_url = cityurl(urls, headers)
		suanze(city_url)
	except Exception as e:
		print('发生错误：' + str(e))

if __name__ == '__main__':
	main()