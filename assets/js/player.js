import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetBoard,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

//신기하다 두번 봐
const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElemment = document.createElement("span");
    playerElemment.innerHTML = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElemment);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

//sockets를 전달받음
export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
};
export const handleLeaderNotifi = ({ word }) => {
  enableCanvas();
  showControls();
  notifs.innerText = `You are the leader, paint : ${word}`;
};

export const handleGameEnded = () => {
  notifs.innerText = "Game End";
  disableCanvas();
  hideControls();
  resetBoard();
};
