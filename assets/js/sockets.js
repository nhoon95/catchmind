//프론트엔드
import { handleNewUser, handleDisconnect } from "./notifications";
import { handleNewMsg } from "./chat";
import { handleBeginPath, handleStrokePath } from "./paint";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);

//처음에 로드할때는 소켓 = null 그 다음에 로그인 할떄는
//initSocket을 호출할거임 loginjs에서
export const initSocket = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnect, handleDisconnect);
  //newMsg이벤트를 받는거
  aSocket.on(events.newMsg, handleNewMsg);
  aSocket.on(events.beganPath, handleBeginPath);
  aSocket.on(events.strokedPath, handleStrokePath);
};
