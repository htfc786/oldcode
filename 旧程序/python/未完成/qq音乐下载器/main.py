import math
import random
import requests
import hashlib


def sign_get(songmid):
    #zza+一段随机的小写字符串，由小写字母和数字组成，长度为10-16位+CJBPACrRuNy7和data取md5。
    st = 'abcdefghijklmnopqrstuvwxyz0123456789';
    count = (math.floor(random.randint(10, 16)));
    sign = 'zza'
    for i in range(count):
        sign += st[math.floor(random.randint(0, 35))];
    data = {"req": {"module": "CDN.SrfCdnDispatchServer", "method": "GetCdnDispatch",
                    "param": {"guid": "5634831300", "calltype": 0, "userip": ""}},
            "req_0": {"module": "vkey.GetVkeyServer", "method": "CgiGetVkey",
                      "param": {"guid": "5634831300", "songmid": [songmid], "songtype": [0],
                                "uin": "1623838", "loginflag": 1, "platform": "20"}},
            "comm": {"uin": 1391345114, "format": "json", "ct": 24, "cv": 0}}
    s ='CJBPACrRuNy7'+str(data)
    s=s.replace("'",'"')
    s=s.replace(' ','')
    s_md5 = hashlib.md5(s.encode('utf-8')).hexdigest()
    sign += s_md5
    return sign,s

song_name = input('请输入想下载的歌名或歌词：')

search_url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=62832266336512953&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=' + song_name + '&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
req = requests.get(url=search_url)

search_data = req.json()
song_data_list = search_data["data"]["song"]["list"]

song_data = []
for data in song_data_list:
    name = data["name"]
    singer = data["singer"][0]["name"]
    album = data["album"]["name"]
    mid = data["mid"]
    song_data.append({"name":name,"singer":singer,"mid":mid})

tp_mb = '{:<5}{:<35}{:<18}'
print(tp_mb.format('序号','歌名','歌手'))
for i in range(len(song_data)):
    if len(song_data[i]["name"]) >= 20:
        name = song_data[i]["name"][0:20] + '…'
    else:
            name = song_data[i]["name"]
    if len(song_data[i]["singer"]) >= 20:
        singer = song_data[i]["singer"][0:20] + '…'
    else:
        singer = song_data[i]["singer"]
    print(tp_mb.format(i,name,singer))

while True:
    try:
        gqh = int(input('请选择要下载歌曲的序号：'))
        song_dict = song_data[gqh]
        break
    except Exception as e:
        print('错误：请输入正确的序号!')
mid = song_dict['mid']
sign = sign_get(mid)[0]
print(search_data)
print(sign)

download_data_url = 'https://u.y.qq.com/cgi-bin/musics.fcg?-=getplaysongvkey5815162101347038&g_tk=5381&sign=' + sign + 'loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"2299923880","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"2299923880","songmid":["' + mid + '"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}'
req = requests.get(url=download_data_url)

print(req.json())
song_url = r'https://isure.stream.qqmusic.qq.com/' + req.json()["req_0"]["data"]["midurlinfo"][0]["purl"]


