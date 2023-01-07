import re
import json
import pickle
import requests
import logging
import pprint
from lxml import etree #xPath

#常量
bakFileName = "bakFile.bak"

#log信息
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
DATE_FORMAT = "%Y/%m/%d %H:%M:%S %p"
logging.basicConfig(
    level=logging.INFO, 
    format=LOG_FORMAT, 
    datefmt=DATE_FORMAT
)

#请求头
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
}

print("欢迎使用")

logging.info("init OK！")

"""
logging.info("获取国家数据")

# https://www.worldometers.info/coronavirus/
countryInfoURL = "https://www.worldometers.info/coronavirus/"
logging.info("请求 https://www.worldometers.info/coronavirus/")
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
countryInfoxPath = countryInfoxPathObj.xpath('//*[@id="main_table_countries_today"]/tbody[1]')[0]
countryInfoHtml = str(etree.tostring(countryInfoxPath))
#print(countryInfoHtml)
#print(type(countryInfoHtml))
logging.info("成功提取到数据")

logging.info("获取各个国家的数据url")
countryInfoRe = re.compile('<td style="font-weight: bold; font-size:15px; text-align:left;"><a class="mt_a" href="(.*?)">(.*?)</a></td>')
countryInfoList = countryInfoRe.findall(countryInfoHtml)
logging.info("获取完成")
"""

countryInfoList = [("country/china/","China")]

#初始化(定义)各种列表
countryDataTime = []
countryData = {
    "countryInfoList": countryInfoList,
    "countryDataTime": [],
    "getDataCountry": [],
    "data": {}
}

with open(bakFileName, 'wb') as fp: #备份数据
    pickle.dump(countryData, fp)
    
logging.info("开始国家信息列表循环,获取数据")
#国家信息列表循环
logging.info("共" + str(len(countryInfoList)) + "条数据")
i = 0
for countryInfo in countryInfoList:
    i+=1
    #print(i)
    # https://www.worldometers.info/coronavirus/ + countryInfo[0]
    countryName = countryInfo[1]
    countryUrl = "https://www.worldometers.info/coronavirus/" + countryInfo[0]
    
    logging.info("获取第 " + str(i) + " 条数据（" + str(countryName) + "）")
    #print(countryInfo)
    #请求国家数据url
    logging.info("请求 " + str(countryUrl))
    countryReq = requests.get(countryUrl,headers=headers)
    countryReq.encoding = "utf-8"
    countryHtml = countryReq.text
    logging.info("请求成功")
    
    #解析返回的数据
    logging.info("解析返回的数据")
    countryRe = re.compile("Highcharts.chart\('coronavirus-cases-linear', (.*?)\);", re.DOTALL)
    countryDataText = countryRe.findall(countryHtml)[0]
    countryDataText = re.sub("(\w+):", r'"\1":', countryDataText.replace("'",'"'))
    countryJson = json.loads(countryDataText)
    logging.info("解析成功")
    
    #print(countryJson['series'][0]['data'])#数据列表
    #print(countryJson['xAxis']['categories'])#日期列表
    print(len(countryJson['series'][0]['data']))
    print(len(countryJson['xAxis']['categories']))
    
    if len(countryJson['xAxis']['categories']) > len(countryDataTime):
        countryDataTime = countryJson['xAxis']['categories']
        countryData["countryDataTime"] = countryDataTime
        with open(bakFileName, 'wb') as fp: #备份数据
            pickle.dump(countryData, fp)
        logging.info("时间列表加长")
    
    #提取数据
    logging.info("提取数据")
    countryData["getDataCountry"].append(countryName)
    countryData["data"][countryName] = countryJson['series'][0]['data']
    logging.info("提取完成")
    
    with open(bakFileName, 'wb') as fp: #备份数据
        pickle.dump(countryData, fp)
    logging.info("数据备份完成")
    
    logging.info("第 " + str(i) + " 条数据（" + str(countryName) + "）获取完成！")
    break;

logging.info("全部数据获取完成")


