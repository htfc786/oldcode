#https://www.iqiyi.com/lib/m_200065414.html?src=search
from selenium import webdriver
from bs4 import BeautifulSoup

chrom = webdriver.Chrome(r'D:\python\chromedriver.exe')
chrom.get('https://www.iqiyi.com/lib/m_200065414.html?src=search')
dmy = chrom.page_source

dmy = BeautifulSoup(dmy,'xml')
ji = dmy.find_all(name="div", attrs={"class":"subTab-main subTab-sel" ,"data-tab-body":"widget-tab-4" ,"id":"widget-tab-2", "data-tabname":"ablumTab2", "data-seq":"2"})
ji = ji.find_all(name="div", attrs={"class":"site-piclist site-piclist-12068"})[0]
ji = ji.find_all(name="li")
ji_name = ['']
for j in ji:
    ji = j.find_all(name="div",attrs={"class":"site-piclist_info_describe"})[0]
    ji = ji.find_all(name="a")
    ji = '名侦探柯南 普通话版 ' + ji[0].string + ' ' + ji[1].string
    ji_name.append(ji)

print(ji_name)


chrom.quit()