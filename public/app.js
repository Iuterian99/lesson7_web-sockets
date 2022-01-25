const socket = io("http://localhost:7000");

const JoinedUserName = document.querySelector(".inputName").value;
const message = document.querySelector(".inputMessage").value;

socket.emit("new user", { JoinedUserName, message });

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".username").textContent = JoinedUserName;
  document.querySelector(".usertext").textContent = message;
});
