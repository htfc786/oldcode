from socket import *
 
 
ip_port=("127.0.0.1",1000)
back_log =5
buffer_size = 1024
 
tcp_client = socket(AF_INET,SOCK_STREAM)
tcp_client.connect(ip_port)
 
while True:
    msg = input(">>>:").strip()
    if not msg:continue
    if msg =="quit":break
    tcp_client.sendall(msg.encode("utf-8"))
    data = tcp_client.recv(buffer_size)
    print("服务器命令执行的结果是:", data.decode("utf-8"))
 
tcp_client.close()
#原文链接：https://blog.csdn.net/ruanxingzi123/article/details/83010914