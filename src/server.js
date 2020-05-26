import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`Server running : http://localhost:${PORT}`);
};

//http위에 서버를 하나 더 올리느 방법
const server = app.listen(PORT, handleListening);
const io = socketIO.listen(server);
//이건 백엔드, 프론트엔드도 연결해줘야댐
//이벤트를 주고 받음
io.on("connection", (socket) => {
  //누군가 helloMsg를 하면 그걸 broadcast 할거야 현재유저를 제외한 넘한테
  //helloMsg라는 이벤트를 듣는다
  socket.on("helloMsg", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Santa",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
