import requests
import json
import time
wz = "D:\\blilbili_uid_data\\"
#各种url
uid_url = "https://api.bilibili.com/x/space/acc/info?mid=UID&jsonp=jsonp"
nofaceurl = "http://i0.hdslb.com/bfs/face/member/noface.jpg"
#计数
i = 16810

def send_req(uid):
    try:
        #请求
        req = requests.get(uid_url.replace("UID", str(uid)))
        uid_json = req.json()
        #code
        code1 = uid_json["code"]
        if code1 == -404 or code1 == -400:
            code = str(code1)+"!! 啥也木有"
        elif code1 == -412:
            #pass
            print("UID"+str(i)+" 请求被拦截！！")
            time.sleep(300)
            continue
        elif code1 == 0:
            #uid
            uid = uid_json["data"]["mid"]
            #昵称
            name = uid_json["data"]["name"]
            #头像tf
            face = True
            if uid_json["data"]["face"] == nofaceurl:
                face = False
            #个性签名tf
            sign = False
            if uid_json["data"]["sign"] != "":
                sign = True
            #lvx
            lvl = uid_json["data"]["level"]
            #up
            up = uid_json["data"]["official"]["role"]
            #大会员
            vip = uid_json["data"]["vip"]["label"]["text"]
            if vip == "":
                vip = "无"
            #直播间tf
            zbj = uid_json["data"]["live_room"]["roomStatus"]
        else:
            print(uid_json) 
            continue
        #保存数据
        if code1 == -404 or code1 == -400:
            data_all = {"uid":i,"code":code}
        elif code1 == 0:
            data_all = {"uid":uid,"code":code1,"has_face":face,"has_sign":sign,"lvl":lvl,"is_up":up,"vip":vip,"zbj_open":zbj}
        with open(wz+str(i),'w',encoding='utf-8') as json_file:
            json.dump(data_all,json_file,ensure_ascii=False)
        with open(wz+"jd","w",encoding='utf-8') as json_file:
            json_file.write(str(i))
        #打印数据
        if code1 == -404 or code1 == -400:
            print("UID"+str(i)+" 400!! 啥也木有")
        else:
            print("UID"+str(uid)+" OK "+str(name),end = "")#)
            print(" 头像：",face,"个性签名：",sign,"LV"+str(lvl),"up：",up,"大会员：",vip,"直播间：",zbj)
        
        
    except:
        print("UID"+str(i)+" ERROR!")
        print(uid_json)
    time.sleep(1)
    
def main():
    while 1:
        send_req(i)
        i+=1
    
if __name__ == "__main__":
    