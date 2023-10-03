import asyncio

async def handle_echo(reader, writer):
    while True:
        print("1")
        data = await reader.read(100)
        print("1.2")
        message = data.decode()
        addr = writer.get_extra_info('peername')
        print("Received %r from %r \n ----" % (message, addr))
        
    print("2")
    print("Send: %r \n ----" % message)
    writer.write(data)
    await writer.drain()

    #print("Close the client socket")
    #writer.close()

loop = asyncio.get_event_loop()
coro = asyncio.start_server(handle_echo, '0.0.0.0', 8888)#, loop=loop)
server = loop.run_until_complete(coro)

# Serve requests until Ctrl+C is pressed
print('Serving on {}'.format(server.sockets[0].getsockname()))
try:
    loop.run_forever()
except KeyboardInterrupt:
    pass

# Close the server
#server.close()
loop.run_until_complete(server.wait_closed())
loop.close()