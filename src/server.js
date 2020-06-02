import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () => {
  console.log(`Server running : http://localhost:${PORT}`);
};

//http위에 서버를 하나 더 올리느 방법
const server = app.listen(PORT, handleListening);
export const io = socketIO.listen(server);
//이건 백엔드, 프론트엔드도 연결해줘야댐
//이벤트를 주고 받음
io.on("connection", (socket) => socketController(socket, io));
