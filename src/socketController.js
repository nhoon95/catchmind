import events from "./events";

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });

  socket.on(events.disconnect, ({ nickname }) => {
    broadcast(events.disconnected, { nickname: socket.nickname });
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
};

export default socketController;

//1 이벤트를 서버로 보내는거
//2 서버에서 이벤트를 리스닝해서 브로드캐스트하는거
