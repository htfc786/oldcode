import requests

downloadheaders = {
    'Origin': 'https://www.bilibili.com',
    'Referer': 'https://www.bilibili.com/video/av26522634',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
}
url = \
    "https://cn-bj3-cc-bcache-14.bilivideo.com/upgcxcode/95/56/306785695/306785695-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1615692276&gen=playurlv2&os=bcache&oi=1981669958&trid=35a6a8230b8e4fb5b5afb852ffd866b9u&platform=pc&upsig=b5e97c25d7ad1be28daeda66a4c458a3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3233&mid=626519554&orderid=0,3&agrr=0&logo=80000000",



name = '1.mp4'

req = requests.get(url=url, headers=downloadheaders)

with open(name, 'wb') as f:
    f.write(req.content)