import events from "./events";
import { io } from "./server";
import { chooseWord } from "../assets/js/words";

//이렇게 해주는 이유가 뭘까?
let sockets = [];
let inprogress = false;
let word = null;

const chooseLeader = () => sockets[Math.ceil(Math.random() * sockets.length)];

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendMsgPlayer = () => superBroadcast(events.playerUpdate, { sockets });
  const startGame = () => {
    if (inprogress === false) {
      inprogress = true;
      const leader = chooseLeader();
      word = chooseWord();
    }
  };

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, points: 0, nickname: nickname });
    broadcast(events.newUser, { nickname });
    sendMsgPlayer();
  });

  socket.on(events.disconnect, ({ nickname }) => {
    //소켓츠에 없는 닉네임을 지우는거
    sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendMsgPlayer();
  });

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });

  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );

  socket.on(events.strokePath, ({ x, y, color }) =>
    broadcast(events.strokedPath, { x, y, color })
  );

  socket.on(events.fill, ({ color }) => broadcast(events.filled, { color }));
};

export default socketController;

//setInterval(() => console.log(sockets), 3000);

//1 이벤트를 서버로 보내는거
//2 서버에서 이벤트를 리스닝해서 브로드캐스트하는거
