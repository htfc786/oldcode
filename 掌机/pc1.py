import usocket as socket
import network
import time
import wifi_cfg

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

def request(url,port=80):
    sock = socket.socket()   # 建立socketsock
    sock.connect((url, port))    # 远程连接
    request = 'GET {} HTTP/1.0\r\nHost: xkcd.com\r\n\r\n'.format(url)  # 构建请求
    sock.send(request.encode('ascii'))  # 向socket发送数据
    response = b''   
    chunk = sock.recv(4096)    # 从socket接收数据
    while chunk:
        response += chunk
        chunk = sock.recv(4096)
    return str(response)

#'http://api.live.bilibili.com/xlive/web-interface/v1/webMain/getList?platform=web'
MY_SSID = wifi_cfg.apName
MY_PASSWORD = wifi_cfg.apPass
do_connect(MY_SSID,MY_PASSWORD)

url = 'live.bilibili.com'
qq = request(url)
with open('1.json', 'w', encoding='utf-8') as f:
    f.write(qq)
