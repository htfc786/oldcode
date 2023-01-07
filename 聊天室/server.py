import socket
import threading

VERSION = "BATE0.1.5"
server_info = ('0.0.0.0', 100)

clients = []

nicks = []


def server_client():
    global clients
    global nicks

    while True:
        print(clients)
        for client in clients:
            response = b''
            rec = client.recv(10240)
            response += rec
            msg = response.decode()
            msg_json = str(msg).split('$')
            
            if msg_json[0] == 'systemmsg':
                print(msg_json)
                systemmsg = eval(msg_json[1])
                r_type = systemmsg['type']
                if r_type == "send_nick":
                    nick = systemmsg['nick']
                    nicks.append(nick)
                    client.send(bytes('systemmsg${"type":"connection_information","client":"ok","server_version":"'+ VERSION +'","number_of_people_online":"'+ str(len(nicks)) +'"}', encoding='utf-8'))
            else:
                for client in clients:
                    try:
                        client.send(response)
                    except:
                        pass
    """
    while True:
        try:
            response = b''
            rec = socket.recv(10240)
            response += rec
            msg = response.decode()
            msg_json = str(msg).split('$')
            
            if msg_json[0] == 'systemmsg':
                print(msg_json)
                systemmsg = eval(msg_json[1])
                r_type = systemmsg['type']
                if r_type == "send_nick":
                    nick = systemmsg['nick']
                    nicks.append(nick)
                    client.send(bytes('systemmsg${"type":"connection_information","client":"ok","server_version":"'+ VERSION +'","number_of_people_online":"'+ str(len(nicks)) +'"}', encoding='utf-8'))
            else:
                for client in clients:
                    try:
                        client.send(response)
                    except:
                        pass
        except:
            pass
    """


def msg_server():
    global clients, nc
    server = socket.socket()
    server.bind(server_info)
    server.listen()
    print('服务器启动成功。。。')
    st = threading.Thread(target=server_client)
    st.start()

    while True:
            
        client, address = server.accept()
        print("+1")
        client.send(bytes('systemmsg${"type":"connection_information","client":"ok","server_version":"'+ VERSION +'","number_of_people_online":"'+ str(len(nicks)) +'"}', encoding='utf-8'))
        clients.append(client)

if __name__ == '__main__':
    msg_server()

