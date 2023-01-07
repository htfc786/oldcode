import socket
from typing import Text
client = socket.socket()
client.connect(('127.0.0.1', 100))
while True:
    text = input("send>>")
    client.send(bytes(text, encoding='utf-8'))
    print("ok")