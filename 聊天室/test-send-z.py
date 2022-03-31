import socket
from typing import Text
client = socket.socket()
client.connect(('127.0.0.1', 100))
while True:
    client.send(bytes("test", encoding='utf-8'))
    print("ok")