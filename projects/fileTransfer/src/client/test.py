import asyncio
import websockets

def run(websocket) -> None:
        websocket.send("Hello world!")
        recv = websocket.recv()
        print(recv)


async def hello():
    try:
        async with websockets.connect("ws://yjikwe.lafyun.com/chat-websocket") as websocket:
            run(websocket)
    except OSError as e:
        print(e)
    except websockets.exceptions.InvalidStatusCode as e:
        print(e)

asyncio.run(hello())