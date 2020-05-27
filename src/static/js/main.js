(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var socket = io("/"); //메세지를 인자로 받고, helloMsg 이벤트를 발생하면 메세지를 보낸다.

function sendMessage(message) {
  socket.emit("helloMsg", {
    message: message
  });
  console.log("You ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

function handleBroad(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}

socket.on("messageNotif", handleBroad);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWJhMGZhYS5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsImhhbmRsZUJyb2FkIiwiZGF0YSIsIm9uIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakIsQyxDQUVBOztBQUNBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUF4QjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUJILE9BQW5CO0FBQ0Q7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0JSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUksSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0Q7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFBQSxNQUNqQlAsT0FEaUIsR0FDS08sSUFETCxDQUNqQlAsT0FEaUI7QUFBQSxNQUNSSyxRQURRLEdBQ0tFLElBREwsQ0FDUkYsUUFEUTtBQUV6QkgsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVFLFFBQWYsZ0JBQTZCTCxPQUE3QjtBQUNEOztBQUVESCxNQUFNLENBQUNXLEVBQVAsQ0FBVSxjQUFWLEVBQTBCRixXQUExQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbi8v66mU7IS47KeA66W8IOyduOyekOuhnCDrsJvqs6AsIGhlbGxvTXNnIOydtOuypO2KuOulvCDrsJzsg53tlZjrqbQg66mU7IS47KeA66W8IOuztOuCuOuLpC5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gIHNvY2tldC5lbWl0KFwiaGVsbG9Nc2dcIiwgeyBtZXNzYWdlIH0pO1xyXG4gIGNvbnNvbGUubG9nKGBZb3UgJHttZXNzYWdlfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROaWNrbmFtZShuaWNrbmFtZSkge1xyXG4gIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQnJvYWQoZGF0YSkge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XHJcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9IDogJHttZXNzYWdlfWApO1xyXG59XHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlQnJvYWQpO1xyXG4iXX0=
},{}]},{},[1])