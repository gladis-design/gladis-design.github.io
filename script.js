const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");
const card   = document.querySelector(".card");

yesBtn.addEventListener("click", () => {
  msg.textContent = "YAY 💖 I can’t wait to celebrate with you, Erick 😌";
  yesBtn.disabled = true;
  noBtn.disabled = true;
});

function moveNo() {
  const maxX = card.clientWidth - noBtn.offsetWidth;
  const maxY = card.clientHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top  = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);
