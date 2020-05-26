const socket = io("/");

//메세지를 인자로 받고, helloMsg 이벤트를 발생하면 메세지를 보낸다.
function sendMessage(message) {
  socket.emit("helloMsg", { message });
  console.log(`You ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

function handleBroad(data) {
  const { message, nickname } = data;
  console.log(`${nickname} : ${message}`);
}

socket.on("messageNotif", handleBroad);
