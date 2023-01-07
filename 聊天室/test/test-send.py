import socket
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
    client.connect(('127.0.0.1', 100))
    while True:
        text = input("send>>")
        if text == "exit":
            break
        client.send(bytes(text, encoding='utf-8'))
        print("ok")