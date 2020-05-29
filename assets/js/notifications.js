//프론트 엔드
const body = document.querySelector("body");

export const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");
};

export const handleDisconnect = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");
};
