/*
Web Sockets are used for real time applications like telegram which This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients. 
*/

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(9000, console.log(9000));
