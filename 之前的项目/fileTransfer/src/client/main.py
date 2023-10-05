import argparse
import logging
import websocket

#常量
NAME = "fileTransfer 大文件传输"
VERSION = "BATE 0.1"

#配置日志模块
LOG_FORMAT = "[%(asctime)s] - %(levelname)s - %(message)s"
DATE_FORMAT = "%Y/%m/%d %H:%M:%S %p"
logging.basicConfig(
    level=logging.INFO, 
    format=LOG_FORMAT, 
    datefmt=DATE_FORMAT
)
#配置命令行解析器
description = NAME + " " + VERSION
parser = argparse.ArgumentParser(description = description)
parser.add_argument("-v", "--version", action='version',
                    version=description,
                    help='show version')
parser.add_argument("-m", "--mode", type=str,
                    choices=['send', 'recv'],
                    help='Working mode, send or recv')
parser.add_argument("-s", "--server",
                    help='Server host')
parser.add_argument("-f", "--file",
                    help='Send file name')
parser.add_argument("-r", "--roomid",
                    help='Room id')
args = parser.parse_args()


#发送
class Send:
    serverHost = None
    file = None
    ws = None

    def __init__(self, serverHost : str, file : str) -> None:
        self.serverHost = serverHost
        self.file = file

    def connet_server(self) -> None: # 链接WS
        websocket.enableTrace(True)
        try:
            self.ws = websocket.WebSocketApp(self.serverHost)
            self.ws.run_forever()
        except Exception as e:
            print(e)
            pass

    def run(self) -> None:
        self.connet_server()


#接收
class Recv:
    def __init__(self) -> None:
        pass

def main() -> None:
    #各种不存在判断
    if not args.mode: print("请选择模式 (-m 参数)"); return
    if args.mode == "send":
        if (not args.server): print("请输入中间服务器地址 (-s 参数)"); return
        if (not args.file): print("请输入文件链接 (-f 参数)"); return
        print("mode = Send")
        send = Send(args.server, args.file)
        send.run()

    elif args.mode == "recv":
        if (not args.server): print("请输入中间服务器地址 (-s 参数)"); return
        if (not args.roomid): print("请输入传输文件的地址号 (-r 参数)"); return

if __name__ == "__main__":
    main()