const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");
const btnBox = document.querySelector(".btns");

const noMessages = [
  "Are you sure? 🥺",
  "Really sure?? 😳",
  "Positive??? 😭",
  "Last chance… 😔",
  "Surely not 😭💔"
];

let noCount = 0;
let yesScale = 1;

yesBtn.addEventListener("click", () => {
  msg.textContent = "Exactly Beep Boop 😌";

  // Confetti 🎉
  confetti({
    particleCount: 160,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#ff2d55", "#fbc2eb", "#ffd1dc", "#22c55e", "#ffffff"]
  });

  setTimeout(() => {
    confetti({
      particleCount: 120,
      spread: 110,
      origin: { y: 0.7 },
      colors: ["#ff2d55", "#fbc2eb", "#ffffff"]
    });
  }, 300);

  yesBtn.disabled = true;
  noBtn.disabled  = true;
  noBtn.style.transform = "scale(0.95)";
});

function moveNo(){
  const box = btnBox.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const padding = 6;

  // constrain to RIGHT HALF only
  const minX = box.width / 2 + padding;
  const maxX = box.width - btn.width - padding;
  const minY = padding;
  const maxY = box.height - btn.height - padding;

  const x = minX + Math.random() * Math.max(0, maxX - minX);
  const y = minY + Math.random() * Math.max(0, maxY - minY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
  noBtn.style.transform = "scale(1.05)";
}

function handleNo(e){
  e.preventDefault();
  if (noBtn.disabled) return;

  noBtn.textContent = noMessages[Math.min(noCount, noMessages.length - 1)];

  yesScale = Math.min(yesScale + 0.18, 2.2);
  yesBtn.style.transform = `scale(${yesScale})`;

  msg.textContent = "Please say yes 🥹";

  moveNo();
  noCount++;
}

noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("touchstart", handleNo, { passive: false });
noBtn.addEventListener("mouseenter", moveNo);
