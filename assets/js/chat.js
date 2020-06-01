import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appenMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="author ${nickname ? "out" : "self"}">
    ${nickname ? nickname : "me"}:</span> ${text}
    `;
  messages.appendChild(li);
};

const handleMsgSubmit = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  //sendMsg 이벤트를 상대방에게 보내주는거
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appenMsg(value);
};

export const handleNewMsg = ({ message, nickname }) =>
  appenMsg(message, nickname);

if (sendMsg) {
  sendMsg.addEventListener("submit", handleMsgSubmit);
}
