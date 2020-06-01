import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

const INITIAL_COLOR = "#2c2c2c";

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = INITIAL_COLOR;
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

export const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

//null로 안만들어주면 작동 안함
export const strokePath = (x, y, color = null) => {
  let currentColor = ctx.strokeStyle;
  if (color !== null) {
    ctx.strokeStyle = color;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    beginPath(x, y);
    getSocket().emit(window.events.beginPath, { x, y });
  } else {
    strokePath(x, y);
    getSocket().emit(window.events.strokePath, {
      x,
      y,
      color: ctx.strokeStyle,
    });
  }
}

function onMouseDown(event) {
  painting = true;
}

//array.from()은 오브젝트를 어레이로 만들어줌
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColor)
);

function handleColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handelCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleMode() {
  if (filling === true) {
    filling = false;
    mode.innerText = "fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleBlock(event) {
  event.preventDefault();
}

function handleSaveBtn(event) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "successfulk";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handelCanvasClick);
  //to protect click of right mouse
  canvas.addEventListener("contextmenu", handleBlock);
}

function handleRange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener("input", handleRange);
}

if (mode) {
  mode.addEventListener("click", handleMode);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveBtn);
}

export const handleBeginPath = ({ x, y }) => beginPath(x, y);
export const handleStrokePath = ({ x, y, color }) => strokePath(x, y, color);
