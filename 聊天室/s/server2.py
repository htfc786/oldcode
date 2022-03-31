import socket
import threading


# 聊天服务器
class MsgServer:
    server_info = ('0.0.0.0', 100)
    # 保存所有连接客户端的对象
    clients = []
    # 保存所有连接客户端的昵称
    nc = []

    def __init__(self):
        server = socket.socket()
        server.bind(self.server_info)
        server.listen()
        print('服务器启动成功。。。')

        while True:
            #try:
            if True:
                client, address = server.accept()
                client.send(bytes('ok', encoding='utf-8'))
                man = MsgHandle(socket, self.clients)
                man.start()
                self.clients.append(man)
            #except Exception as e:
            #    pass


# 信息处理类
class MsgHandle(threading.Thread):
    client = None
    clients = None

    def __init__(self, client, clients):
        super(MsgHandle, self).__init__()
        self.client = client
        self.clients = clients

    def run(self):
        while True:
            print(type(self.client))
            print(self.client)
            data = self.client.recv(1024).decode()
            print(data)
            for usr in self.clients:
                usr.client.send(bytes(data, encoding='utf-8'))


if __name__ == '__main__':
    MsgServer()


