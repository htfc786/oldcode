from bs4 import BeautifulSoup
import requests
import tkinter

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"}

def citywether(url,headers):
	dmy = requests.get(url,headers=headers)
	dmy.encoding = dmy.apparent_encoding
	dmy = dmy.text

	citydmy = BeautifulSoup(dmy,"lxml")

	citydmy = citydmy.findAll(name="dl", attrs={"class" :"weather_info"})[0]

	cityname = citydmy.findAll(name="dd", attrs={"class" :"name"})[0]
	cityname = cityname.findAll(name="h2")[0]
	cityname = cityname.string + "天气预报"

	cityweek = citydmy.findAll(name="dd", attrs={"class" :"week"})[0]
	cityweekname = cityweek.string + cityname

	cityweather = citydmy.findAll(name="dd", attrs={"class" :"weather"})[0]
	cityweathertemp = cityweather.findAll(name="p", attrs={"class" :"now"})[0]
	cityweathertemp = cityweathertemp.findAll(name="b")[0]
	cityweathera = cityweather.findAll(name="span")[0]
	cityweatherb = cityweathera.findAll(name="b")[0]
	cityweather = cityweathertemp.string + "℃," + cityweatherb.string

	cityshidu = citydmy.findAll(name="dd", attrs={"class" :"shidu"})[0]
	cityshidua = cityshidu.findAll(name="b")
	cityshidu = cityshidua[0].string
	cityfengxiang = cityshidua[1].string
	cityziwaixian = cityshidua[2].string

	citykongqi = citydmy.findAll(name="dd", attrs={"class" :"kongqi"})[0]
	citykongqizhiliang = citykongqi.findAll(name="h5")[0].string
	citykongqiPM = citykongqi.findAll(name="h6")[0].string

	return [cityweekname,cityweather,cityshidu,cityfengxiang,cityziwaixian,citykongqizhiliang,citykongqiPM]
a = citywether("https://www.tianqi.com/beijing/",headers)

win = tkinter.Tk() #构造窗体
win.title("天气预报--预报")
win.geometry("300x250+500+200")
win.resizable(width=False,height=False)
		
t = tkinter.Text(win)
t.delete(0.0,'end')
t.configure(state='disabled')
t.pack()  
t.insert(0.0,a)
print(a[2])

win.mainloop()
