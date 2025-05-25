const net = require('net');

const serverPort = 8000;

const server = net.createServer((socket) => {
  console.log(`有新的客户端连接: ${socket.remoteAddress}:${socket.remotePort}`);

  // socket.on('data', (data) => {
  //   console.log(`收到来自 ${socket.remoteAddress}:${socket.remotePort} 的数据: ${data}`);
  //   socket.write('pong...');
  // })

  socket.on('end', () => {
    console.log(`${socket.remoteAddress}:${socket.remotePort}断开连接`);
    socket.destroy(); // 关闭连接
  });

  socket.on('error', (err) => {
    console.error(`Error from ${socket.remoteAddress}:${socket.remotePort} `, err);
    socket.destroy(); // 关闭连接
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(serverPort, '0.0.0.0', () => {
  console.log('服务器已启动，监听端口'+serverPort);
});
