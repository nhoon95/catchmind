//프론트엔드
import { handleNewUser, handleDisconnect } from "./notifications";
import { handleNewMsg } from "./chat";
import { handleBeginPath, handleStrokePath, handleFilled } from "./paint";
import {
  handlePlayerUpdate,
  handleGameStarted,
  handleLeaderNotifi,
  handleGameEnded,
  handleGameStarting,
} from "./player";

let socket = null;

export const getSocket = () => socket;

//처음에 로드할때는 소켓 = null 그 다음에 로그인 할떄는
//initSocket을 호출할거임 loginjs에서
export const initSocket = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnect, handleDisconnect);
  //newMsg이벤트를 받는거
  socket.on(events.newMsg, handleNewMsg);
  socket.on(events.beganPath, handleBeginPath);
  socket.on(events.strokedPath, handleStrokePath);
  socket.on(events.filled, handleFilled);
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStarted);
  socket.on(events.leaderNotifi, handleLeaderNotifi);
  socket.on(events.gameEnded, handleGameEnded);
  socket.on(events.gameStarting, handleGameStarting);
};
