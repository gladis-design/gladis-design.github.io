const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");
const btnBox = document.querySelector(".btns");

yesBtn.addEventListener("click", () => {
  msg.textContent = "Exactly beep boop 😌";

  // Confetti burst 🎉
  confetti({
    particleCount: 160,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#ff2d55", "#fbc2eb", "#ffd1dc", "#22c55e", "#ffffff"]
  });

  // Second softer burst
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
  noBtn.style.transform = "scale(0.96)";
});

// Make "No" dodge only on the right side
function moveNo(){
  if (noBtn.disabled) return;

  const box = btnBox.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const padding = 6;

  const rightStart = box.width / 2;
  const maxX = box.width - btn.width - padding;
  const minX = rightStart + padding;

  const maxY = box.height - btn.height - padding;
  const minY = padding;

  const x = minX + Math.random() * Math.max(0, maxX - minX);
  const y = minY + Math.random() * Math.max(0, maxY - minY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
  noBtn.style.transform = "scale(1.03)";
}

// Desktop + mobile
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
}, { passive: false });

noBtn.addEventListener("click", moveNo);
