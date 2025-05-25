const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require("socket.io")(httpServer,{
  cors: true, // https://github.com/plhwin/nodejs-socketio-chat/issues/5
  allowEIO3: true // false by default https://www.coder.work/article/7568827
});
const path = require("path")


const DEFAULT_PORT = 5173;


var activeSockets = [];

app.use(require('express').static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});


io.on("connection", socket => {
  const existingSocket = activeSockets.find(
    existingSocket => existingSocket === socket.id
  );

  if (!existingSocket) {
    activeSockets.push(socket.id);

    socket.emit("update-user-list", {
      users: activeSockets.filter(
        existingSocket => existingSocket !== socket.id
      )
    });

    socket.broadcast.emit("update-user-list", {
      users: [socket.id]
    });
  }

  socket.on("call-user", (data) => {
    socket.to(data.to).emit("call-made", {
      offer: data.offer,
      socket: socket.id
    });
  });

  socket.on("make-answer", data => {
    socket.to(data.to).emit("answer-made", {
      socket: socket.id,
      answer: data.answer
    });
  });

  socket.on("reject-call", data => {
    socket.to(data.from).emit("call-rejected", {
      socket: socket.id
    });
  });

  socket.on("disconnect", () => {
    activeSockets = activeSockets.filter(
      existingSocket => existingSocket !== socket.id
    );
    socket.broadcast.emit("remove-user", {
      socketId: socket.id
    });
  });
});

httpServer.listen(DEFAULT_PORT, () =>{
  console.log("server runing on port", DEFAULT_PORT)
});
 
