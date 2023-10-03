import socket
import threading

ip = "127.0.0.1"#input("请输入服务器ip：")
port = 100#input("请输入端口号：") 
nc = input("请输入昵称：")

client = socket.socket()
SERVER_HOST = (ip, int(port))
client.connect(SERVER_HOST)


nick = ""
if nc == '':
    print('错误：昵称不能为空。')
elif nick != '':
    print('错误：您已经设置了昵称了，不能重复设置。')
elif len(nc) > 8:
    print('错误：昵称字符不能大于8个字符！')
else:
    client.send(bytes('@systemMsgSetNickName$'+nc, encoding='utf-8'))
    response = b''
    rec = client.recv(1024)
    response += rec
    msg = response.decode()
    msg = str(msg).split('$')
    
    print(msg[0]+":"+msg[1])
    if msg[1] == "昵称设置成功":
        nick = nc
if not nick:
    client.close()
    exit()

#client.send(bytes('systemmsg${"type":"send_nick","nick":"'+ nick +'"}', encoding='utf-8'))

print("服务器连接成功！")

def hearfrom_msg():
    while True:
        response = b''
        rec = client.recv(1024)
        response += rec
        msg = response.decode()
        msg = str(msg).split('$')
        print(msg[0]+":"+msg[1])

thrd=threading.Thread(target=hearfrom_msg)
thrd.start()

while True:
    msg = input("")
    if msg:
        client.send(bytes(nick + '$' + msg, encoding='utf-8'))