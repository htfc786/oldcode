import random
import requests


class Bilibili_reptile:
    def __init__(self, heardes=None):
        if not heardes:
            self.HEADERS = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q = 0.9'
            }
        else:
            self.HEADERS = heardes

    def get_live_ranking(self):
        API_URL = 'https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getList?platform=web'
        requests.get()


import socket as socket
import time
import sys

def do_connect(essid,password):
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect(essid,password)
        time.sleep(10) # 连接有延时，睡眠10秒         
    print('network config:', wlan.ifconfig())
    return wlan.isconnected()

def request(host,path,cs,port=80):
    HOST = str(host)
    PORT = int(port)
    BUFSIZ = 1024
    
    header_send =  'GET '+ str(path) +' HTTP/1.1\r\n'
    header_send += 'Host:'+ str(host) +'\r\n'
    header_send += 'Connection: close\r\n'
    header_send += '\r\n'
    header_send += str(cs)
    
    
    header_send = header_send.encode()
    # create a socket which support IPv4/IPv6
    for res in socket.getaddrinfo(HOST, PORT, 0,
    				socket.SOCK_STREAM, 0):
    	af, socktype, proto, canonname, sockaddr = res
    	sockaddr = HOST, PORT
    	print(sockaddr)
     
    	try:
    		webClient = socket.socket(af, socktype)
    	except OSError as msg:
    		webClient = None
    		continue
    	try:
    		webClient.connect(sockaddr)
    	except OSError as msg:
    		webClient.close()
    		webClient = None
    		continue
    	break
     
    if webClient is None:
    	print('could not open socket')
    	sys.exit(1)
    
    webClient.send(header_send)
    response = b''   
    chunk = webClient.recv(BUFSIZ)    # 从socket接收数据
    while chunk:
        try:
            if chunk:
                response += chunk
                chunk = webClient.recv(BUFSIZ)
            else:
                break
        except:
            break
    webClient.close()
    return str(response.decode("utf-8","ignore"))


#https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all

url = ('api.bilibili.com','/x/web-interface/ranking/v2','rid=0&type=all')

qq = request(url[0],url[1],url[2])
print(qq)
with open('1.json', 'w', encoding='utf-8') as f:
    f.write(qq)
print('ok')