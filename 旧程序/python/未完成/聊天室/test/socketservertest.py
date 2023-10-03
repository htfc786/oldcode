import socketserver

ip_port=("127.0.0.1",100)

userSocketList = []
userInfoList = {}

def sandMsg(CSocket,msg):
    for userSocket in userSocketList:
        if userSocket == CSocket:
            continue
        userInfo = userInfoList[userSocket]
        if not userInfo[0]:
            continue
            
        userSocket.sendall(msg)

def setNickName(CSocket,nickName):
    userInfo = userInfoList[CSocket]
    if nickName == '':
        CSocket.sendall(bytes('错误$昵称不能为空。', encoding='utf-8'))
        return
    #elif userInfo[0] == "" or userInfo[0] == None:
    #    CSocket.sendall(bytes('错误$您已经设置了昵称了，不能重复设置。', encoding='utf-8'))
    #    return
    #elif len(nickName) > 16:
    #    CSocket.sendall(bytes('错误$昵称字符不能大于16个字符！', encoding='utf-8'))
    #    return
    else:
        for v in userInfoList.values():
            if v[0] == nickName:
                CSocket.sendall(bytes('错误$此昵称已存在', encoding='utf-8')) 
                return
        userInfoList[CSocket][0] = nickName
        CSocket.sendall(bytes('系统信息$昵称设置成功', encoding='utf-8'))

# Tcp服务器
class TcpServer(socketserver.BaseRequestHandler):
    def setup(self):
        #print(self.client_address,"加入了聊天室")
        userSocketList.append(self.request)
        userInfoList[self.request] = [None]
        
        print(userSocketList)
        print(userInfoList)
    
    def handle(self):
        while True:
                #收消息
            data = self.request.recv(1024)
            if not data:
                continue
            print(self.client_address,"客户端发送的信息",data.decode("utf-8"))
            splitMsgList = str(data.decode("utf-8")).split('$')
            if splitMsgList[0] == '@systemMsgSetNickName':
                setNickName(self.request,splitMsgList[1])
                print(userInfoList)
                continue
            userInfo = userInfoList[self.request]
            if not userInfo[0]:
                self.request.sendall(bytes("系统信息$您没有设置，昵称不能发送信息", encoding='utf-8'))
                continue
            sandMsg(self.request,data)
            #发消息
            #self.request.sendall(data.upper())
    
    def finish(self):
        print(userInfoList[self.request][0]+" 退出了聊天室")
        sandMsg(userInfoList[self.request][0]+" 退出了聊天室")

        userSocketList.remove(self.request)
        userInfoList.pop(self.request)
        
        print(userSocketList)
        print(userInfoList)
 
if __name__ == "__main__":
    print(f"服务在本机 {ip_port[1]} 端口启动。。。")
    print(f"提示:按 CTRL+C 关闭服务")
    try:
        s = socketserver.ThreadingTCPServer(ip_port,TcpServer)
        s.serve_forever()
    except KeyboardInterrupt:
        print("\n服务已关闭")
        exit()
    
    
#原文链接：https://blog.csdn.net/ruanxingzi123/article/details/83010914