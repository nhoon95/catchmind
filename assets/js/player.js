const board = document.getElementById("jsPBoard");

//신기하다 두번 봐
const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElemment = document.createElement("span");
    playerElemment.innerHTML = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElemment);
  });
};

//sockets를 전달받음
export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
