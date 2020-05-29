import { initSocket } from "./sockets";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
//key in localstaorage

//변수화 안하면 key가 null로 나옴
const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const nickname = localStorage.getItem(NICKNAME);

//프로퍼티는 object를 위해서 데이터를 저장한다.
//파라미터:함수의 특정한 성질을 나타내는 변수
const login = (nickname) => {
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSocket(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  login(nickname);
}

const handleLoginSubmit = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleLoginSubmit);
}
