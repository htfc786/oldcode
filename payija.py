import os
import re
import json
import datetime
import requests
import logging
from lxml import etree #xPath 
from googletrans import Translator 

"""
pip install requests
pip install lxml
pip install googletrans
"""

#常量
ENCODING = "UTF-8"
OUTCSVFILENAME = "dataShow.csv" #文件名称
#DATAMODE = "dataFirst" 
DATAMODE = "dataShow"
USECACHE = True #是否使用缓存
CACHEFILE = "cache.json"
CACHENUM = "num"
USEFANYI = False #是否使用翻译
INPUTLANGUAGE = "en"
OUTPUTLANGUAGE = "zh-cn"
ADTATYPE = "coronavirus-cases-linear"
#ADTATYPE = "graph-cases-daily"

#log信息
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
DATE_FORMAT = "%Y/%m/%d %H:%M:%S %p"
logging.basicConfig(
    level=logging.INFO, 
    format=LOG_FORMAT, 
    datefmt=DATE_FORMAT
)

#翻译配置
translator = Translator(service_urls=[ 
    'translate.google.cn' 
])

#请求头
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
}

print("欢迎使用数据爬取器 ---By：htfc786 ")

logging.info("init OK！")

#检查文件是否存在
"""
if os.path.exists(OUTCSVFILENAME):
    logging.warning("文件 " + OUTCSVFILENAME + " 已经存在是否继续？")
    isDel = input("是否继续？(Y - 删除文件并继续 N - 退出)：")
    if not(isDel == "y" or isDel == "Y"):
        print("程序退出")
        exit()
    #删除文件
    try:
        os.remove(OUTCSVFILENAME)
    except:
        logging.error("文件删除失败！")
        exit()
    logging.info("文件删除成功")
"""

if os.path.exists(CACHEFILE) and USECACHE:
    logging.info("检测到有缓存，使用缓存")
    with open(CACHEFILE,"r",encoding=ENCODING) as f:
        c_data_str = f.read()
        c_data = json.loads(c_data_str)
        countryInfoList = c_data["data"]

else:
    logging.info("获取国家数据")

    # https://www.worldometers.info/coronavirus/
    countryInfoURL = "https://www.worldometers.info/coronavirus/"
    logging.info("请求 "+countryInfoURL)
    #国家获取
    countryInfoReq = requests.get(countryInfoURL,headers=headers)
    countryInfoReq.encoding = "utf-8"
    countryInfoHtml = countryInfoReq.text
    logging.info("请求成功")

    logging.info("开始解析html文件")
    #<tbody>
    logging.info("提取<tbody>数据")
    countryInfoxPathObj = etree.HTML(countryInfoHtml)
    #result = etree.tostring(html)
    #countryInfoxPath = countryInfoxPathObj.xpath('//*[@id="main_table_countries_today"]/tbody[1]')[0]
    #//*[@id="main_table_countries_yesterday"]/tbody[1]
    countryInfoxPath = countryInfoxPathObj.xpath('//*[@id="main_table_countries_yesterday"]/tbody[1]')[0]
    countryInfoHtml = str(etree.tostring(countryInfoxPath))
    #print(countryInfoHtml)
    #print(type(countryInfoHtml))
    logging.info("成功提取到数据")

    logging.info("获取各个国家的数据url")
    countryInfoRe = re.compile('<td style="font-weight: bold; font-size:15px; text-align:left;"><a class="mt_a" href="(.*?)">(.*?)</a></td>')
    countryInfoList = countryInfoRe.findall(countryInfoHtml)
    logging.info("获取完成")

    #countryInfoList = [("country/china/","China"),("country/taiwan/","Taiwan"),("country/china-hong-kong-sar/","Hong Kong"),("country/china-macao-sar/","Macao"),]

    logging.info("共获取了 "+str(len(countryInfoList))+" 个国家的数据url")
    #print(countryInfoList)

    with open(OUTCSVFILENAME,"w",encoding=ENCODING) as f:
        f.write("name,value,date\n")
        
    logging.info("开始国家信息列表循环,获取数据")
    #国家信息列表循环
    logging.info("共" + str(len(countryInfoList)) + "条数据")
    #缓存
    if USECACHE:
        c_data = {"data": countryInfoList}
        with open(CACHEFILE,"w",encoding=ENCODING) as f:
            c_data_str = json.dumps(c_data)
            f.write(c_data_str)
        logging.info("缓存成功")

i = 1
if os.path.exists(CACHENUM) and USECACHE:
    with open(CACHENUM,"r",encoding=ENCODING) as f:
        i = int(f.read())
elif USECACHE:
    with open(CACHENUM,"w",encoding=ENCODING) as f:
        f.write(str(i))
countryInfoListLen = len(countryInfoList)
#print(countryInfoListLen)
dataList = []
while countryInfoListLen!=i:
    countryInfo = countryInfoList[i-1]    
    #print(i)
    # https://www.worldometers.info/coronavirus/ + countryInfo[0]
    countryName = countryInfo[1]
    countryUrl = "https://www.worldometers.info/coronavirus/" + countryInfo[0]
    
    logging.info("获取第 " + str(i) + " 条数据")
    
    #国家名字翻译
    if USEFANYI:
        countryName = translator.translate(countryName,src=INPUTLANGUAGE,dest=OUTPUTLANGUAGE).text
        ##把 台湾 转换成 中国台湾 香港 转换成 中国香港 澳门 转换成 中国澳门
        if countryName=="中国": countryName = "中国大陆地区"
        elif countryName=="台湾": countryName = "中国台湾省"
        elif countryName=="香港": countryName = "中国香港特别行政区"
        elif countryName=="澳门": countryName = "中国澳门特别行政区"
        
        logging.info("国家名字翻译完成")
    
    logging.info("获取 " + str(countryName) + " 的数据")
    
    #print(countryInfo)
    #请求国家数据url
    logging.info("请求 " + str(countryUrl))
    countryReq = requests.get(countryUrl,headers=headers)
    countryReq.encoding = "utf-8"
    countryHtml = countryReq.text
    logging.info("请求成功")
    
    #解析返回的数据
    logging.info("解析返回的数据")
    countryRe = re.compile("Highcharts.chart\('"+ADTATYPE+"', (.*?)\);", re.DOTALL)
    countryDataText = countryRe.findall(countryHtml)[0]
    countryDataText = re.sub("(\w+):", r'"\1":', countryDataText.replace("'",'"'))
    countryJson = json.loads(countryDataText)
    logging.info("解析成功")
    
    #print(len(countryJson['series'][0]['data']))
    #print(len(countryJson['xAxis']['categories']))
    countryDate = countryJson['xAxis']['categories'] #日期列表
    countryData = countryJson['series'][0]['data'] #数据列表
    
    logging.info("共获取数据 "+ str(len(countryDate)) +" 天的数据")
    
    #处理数据
    logging.info("处理数据")
    countryOutputData = ""
    if DATAMODE == "dataFirst":
        for j in range(len(countryDate)):
            countryDateText = datetime.datetime.strftime(datetime.datetime.strptime(countryDate[j],'%b %d, %Y'),"%Y年%m月%d日")
            countryOutputData += "{},{},{}\n".format(countryName,countryData[j],countryDateText)
    elif DATAMODE == "dataShow":
        for j in dataList:
            countryOutputData += "{},{},{}\n".format(j[0],j[1],i)
        countryOutputData += "{},{},{}\n".format(countryName,countryData[len(countryDate)-1],i)
        dataList.append([countryName,countryData[len(countryDate)-1]])
        
        
    logging.info("处理完成")
    
    with open(OUTCSVFILENAME,"a",encoding=ENCODING) as f:
        f.write(countryOutputData)
    logging.info("文件保存成功")
    
    logging.info("第 " + str(i) + " 条数据（" + str(countryName) + "）获取完成！")
    
    i+=1
    #缓存
    if USECACHE:
        with open(CACHENUM,"w",encoding=ENCODING) as f:
            f.write(str(i))
        logging.info("进度缓存成功")

os.remove(CACHEFILE)
os.remove(CACHENUM)

logging.info("全部数据获取完成")
