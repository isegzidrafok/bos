const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", socket => {
  console.log("Bağlandı:", socket.id);
  socket.emit("mesaj", "Merhaba client!");
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server çalışıyor:", port);
});
