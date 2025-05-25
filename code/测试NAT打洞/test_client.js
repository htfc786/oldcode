const net = require('net');

const serverAddress = '127.0.0.1';
// const serverPort = 8000;
// const localPort = 100;
const serverPort = 100;
const localPort = 200;

const client = new net.Socket();

// 连接，绑定本地端口
client.connect({ port: serverPort, host: serverAddress, localPort: localPort }, () => {
  console.log('成功连接...', serverAddress, serverPort);

  // 循环发送ping包，连接保活
  setInterval(() => {
    client.write('ping...');
  }, 1000)

  // 断开连接时
  client.on('end', () => {
    console.log('断开连接');
    client.destroy(); // 关闭连接
  });

  client.on('error', (err) => {
    console.error('Client error:', err);
    client.destroy(); // 关闭连接
  });
});

client.on('error', (err) => {
  console.error('Client error:', err);
});

// client.on('data', (data) => {
//   console.log('收到数据:', data.toString());
// })

// 在本地端口开一个服务，监听远方的客户端发来的数据
const server = net.createServer((socket) => {
  console.log(`有客户端连接到本地端口 ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('data', (data) => {
    console.log(`${socket.remoteAddress}:${socket.remotePort} 收到数据:`, data.toString());
  });


  // 关闭连接时
  socket.on('end', () => {
    console.log(`${socket.remoteAddress}:${socket.remotePort}断开连接`);
    socket.destroy(); // 关闭连接
  });

  socket.on('error', (err) => {
    console.error(`Error from ${socket.remoteAddress}:${socket.remotePort} `, err);
    socket.destroy(); // 关闭连接
  });
})

server.listen(localPort, () => {
  console.log('本地端口监听成功', localPort);
})