const socket = io();

console.log(socket);
const name = prompt("input your name: ");

socket.emit("new-user", { name })