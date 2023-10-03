import asyncio
import sys
import time


async def tcp_echo_client(message, loop):
    reader, writer = await asyncio.open_connection('192.168.0.13', 8888,)
                                                   #loop=loop)
    while True:
        message+="  "+time.strftime("%Y.%m.%d %H:%M:%S", time.localtime())
    
        print('Send: %r \n ----' % message)
        writer.write(message.encode())
        time.sleep(1)

    data = await reader.read(100)
    print('Received: %r' % data.decode())

    #print('Close the socket')
    #writer.close()

loop = asyncio.get_event_loop()
while True:
    message = sys.argv[0]
    loop.run_until_complete(tcp_echo_client(message, loop))
    time.sleep(2)

loop.close()