#https://fanyi.baidu.com/gettts?lan=en&spd=3&text=folder
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "Cookie": "PHPSESSID=26a38n3j45rnjmt67vvug5odq1",
    "Host1": "www.tjjiaocaidaan.com1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
}


import requests

i = 0

with open("words.txt","r",encoding="utf-8") as f:
    words = f.read().splitlines()
    for word in words:
        i+=1
        url = "http://fanyi.baidu.com/gettts?lan=en&spd=3&text="+word
        r = requests.get(url,headers=headers)
        with open("./yinpin/%03d " % (i)+word+".mp3", "wb") as code:
            code.write(r.content)
            
        print("%03d "%(i)+word)

