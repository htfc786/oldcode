import socket
import threading
print("Waitting to be connected......")
HostPort = ('127.0.0.1',9999)
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.bind(HostPort)
s.listen(1)
conn,addr = s.accept()
true=True
addr = str(addr)
print('Connecting by : %s ' %addr )
def Receve(conn):
    global true
    while true:
        data = conn.recv(1024).decode('utf8')
        if data == 'quit':
            true=False
        print("you have receve: \033[1;35m%s\033[0m from %s " %(data,addr))
thrd=threading.Thread(target=Receve,args=(conn,))
thrd.start()
while true:
    user_input = input('>>>')
    conn.send(user_input.encode('utf8'))
    if user_input == 'quit':
        true = False
    #conn.close()
s.close()
