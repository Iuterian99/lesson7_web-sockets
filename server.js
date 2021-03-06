/*
Web Sockets are used for real time applications like telegram which This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

!socket.emit() -> hammaga jo`natish
!broadcast.emit() -> sizdan boshqa hammaga jo`natish
*/

const express = require("express");
const app = express()
const socketIO =require("socket.io");

app.use(express.static("public"))


const server = app.listen(9000, console.log(9000));

const io = socketIO(server);

io.on("connection", socket =>{
  socket.on("new-user", data => console.log(data))
})