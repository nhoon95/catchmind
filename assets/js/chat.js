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
  input.value = "";
  appenMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleMsgSubmit);
}
