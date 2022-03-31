import socket
import threading


client = socket.socket()

ip = "127.0.0.1"#input("请输入服务器ip：")
port = 100#input("请输入端口号：") 
SERVER_HOST = (ip, int(port))


nick = ""
nc = input("请输入昵称：")
if nc == '':
    print('错误：昵称不能为空。')
elif nick != '':
    print('错误：您已经设置了昵称了，不能重复设置。')
elif len(nc) > 8:
    print('错误：昵称字符不能大于8个字符！')
else:
    nick = nc
    print('系统提示：昵称设置成功')

client.connect(SERVER_HOST)
client.send(bytes('systemmsg${"type":"send_nick","nick":"'+ nick +'"}', encoding='utf-8'))

print("连接成功！")

def hearfrom_msg():
    while True:
        response = b''
        rec = client.recv(1024)
        response += rec
        msg = response.decode()
        msg = str(msg).split('$')
        if msg[0] != 'systemmsg':
            if msg[0] != nick:
                print(msg[0]+":"+msg[1])
        else:
            systemmsg = eval(msg[1])
            print(systemmsg)
            r_type = systemmsg['type']
            if r_type == 'connection_information':
                SERVER_VERSION = systemmsg['server_version']
                print('系统提示：连接成功，服务器版本：' + SERVER_VERSION)
                print('在线人数：' + systemmsg['number_of_people_online'])

thrd=threading.Thread(target=hearfrom_msg)
thrd.start()

while True:
    msg = input("")
    if msg != "":
        client.send(bytes(nick + '$' + msg, encoding='utf-8'))