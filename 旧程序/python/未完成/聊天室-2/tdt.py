import asyncio
import socket

VERSION = '1.0.0.1'
server_info = ('0.0.0.0', 100)

clients = []
nick=[]

async def server_client(socket):
    global clients

    while True:
        print("ready")
        response = b''
        rec = socket.recv(10240)
        response += rec
        print("ok")
        msg = response.decode()
        print(msg)
        #print(clients)
        for client in clients:
            client.send(response)#bytes(msg, encoding='utf-8'))

def msg_server():
    global clients, nc
    server = socket.socket()
    server.bind(server_info)
    server.listen()
    print('服务器启动成功。。。')
    event_loop = asyncio.get_event_loop()
    while True:
        
        client, address = server.accept()
        print("+1")
        client.send(bytes('systemmsg${"type":"yz","client":"ok","server_version":"'+ VERSION +'"}', encoding='utf-8'))
        client.send(bytes('systemmsg${"type":"rs","rs":"'+ str(len(nick)) +'"}', encoding='utf-8'))
        coro = server_client(client)
        clients.append(client)
        event_loop.run_until_complete(coro)

if __name__ == '__main__':
    msg_server()





async def coroutine():
    print('in coroutine')


event_loop = asyncio.get_event_loop()
try:
    print('starting coroutine')
    coro = coroutine()
    print('entering event loop')
    event_loop.run_until_complete(coro)
finally:
    print('closing event loop')
    event_loop.close()