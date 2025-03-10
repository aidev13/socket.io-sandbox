const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

const btn = document.getElementById("btn");
const btnBoo = document.getElementById("btnBoo");
const btnYes = document.getElementById("btnYes");

btn.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6 + 1);
  socket.emit("chat message", roll);
});
btnBoo.addEventListener("click", () => {
  socket.emit("chat message", "Boo!");
});

const toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (socket.connected) {
    toggleButton.innerText = "Connect";
    socket.disconnect();
  } else {
    toggleButton.innerText = "Disconnect";
    socket.connect();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
