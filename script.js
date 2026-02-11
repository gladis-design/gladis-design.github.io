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
let locked = false;

// Move NO on right side only
function moveNo(){
  if (locked) return;

  const box = btnBox.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const padding = 6;

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

// NO click behavior
function handleNo(e){
  e.preventDefault();
  if (locked) return;

  noBtn.textContent =
    noMessages[Math.min(noCount, noMessages.length - 1)];

  yesScale = Math.min(yesScale + 0.15, 1.6);
  yesBtn.style.transform = `scale(${yesScale})`;

  msg.textContent = "Please say yes 🥺";

  moveNo();
  noCount++;
}

noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("touchstart", handleNo, { passive: false });
noBtn.addEventListener("mouseenter", moveNo);

// YES click behavior
yesBtn.addEventListener("click", () => {
  locked = true;

  msg.textContent = "Exactly Beep Boop 😌 There was never a doubt in my mind.";
  msg.classList.add("msg-final");

  yesBtn.style.transform = "scale(1)";
  noBtn.style.transform  = "scale(1)";
  noBtn.style.left = "50%";
  noBtn.style.top  = "0";
  noBtn.style.pointerEvents = "none";

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
});
