import requests
import time
import random
import hashlib
import tkinter

def md5(str):
    str = str.encode('utf-8')
    md5 = hashlib.md5(str).hexdigest()
    return md5

def main():
    ts = str(int(time.time()*1000))
    salt = ts + str(int(random.randint(0,9)))
    sign = md5("fanyideskweb" + t.get(0.0,'end') + salt + "n%A-rKaT5fb[Gy?;N5@Tj")
    bv = "5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.8 Safari/537.36"
    
    data = {
        'i': t.get(0.0,'end'),
        'from': 'AUTO',
        'to': 'AUTO',
        'smartresult': 'dict',
        'client': 'fanyideskweb',
        'salt': salt,
        'sign': sign,
        'ts': ts,
        'bv': bv,
        'doctype': 'json',
        'version': '2.1',
        'keyfrom': 'fanyi.web',
        'action':'FY_BY_REALTlME'
    }
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': '236',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'OUTFOX_SEARCH_USER_ID=-1208969194@10.108.160.19; JSESSIONID=aaaZx4YoB7arnax8phZax; OUTFOX_SEARCH_USER_ID_NCOO=702949480.8118539; ___rl__test__cookies=1581406176433',
        'Host': 'fanyi.youdao.com',
        'Origin': 'http://fanyi.youdao.com',
        'Referer': 'http://fanyi.youdao.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.8 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }

    a = requests.post('http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule',data = data,headers = headers).json()
    if a == {'errorCode': 50}:
        a = {'translateResult': [[{'tgt': '您没有输入内容，无法翻译！！！', 'src': '法和'}]], 'errorCode': 0, 'type': 'zh-CHS2en'}
    else:
        pass
    t.delete(0.0,'end')
    text = a["translateResult"][0][0]["tgt"]
    t.insert(0.0,text)

win = tkinter.Tk()
win.title("翻译软件")
win.geometry("400x200+20+50")
win.resizable(width=False,height=False)
tkinter.Button(win,text = "翻译",command = main).pack()
s = tkinter.Scrollbar(win,orient=tkinter.VERTICAL)
s.pack(fill=tkinter.Y, side=tkinter.RIGHT)
t = tkinter.Text(win,yscrollcommand=s.set)
t.pack()
s.config(command=t.yview)
win.mainloop()