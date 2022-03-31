import socket
client = socket.socket()
client.connect(('127.0.0.1', 100))
while True:
    response = b''
    rec = client.recv(10240)
    response += rec
    msg = response.decode()
    print(msg)