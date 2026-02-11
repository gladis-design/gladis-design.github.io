const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");
const btnBox = document.querySelector(".btns");

yesBtn.addEventListener("click", () => {
  msg.textContent = "Exactly beep boop! 😌";
  yesBtn.disabled = true;
  noBtn.disabled  = true;
  noBtn.style.transform = "scale(0.98)";
});

// Move "No" inside the button area only (so it feels intentional)
function moveNo(){
  if (noBtn.disabled) return;

  const box = btnBox.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const pad = 6;

  const maxX = box.width  - btn.width  - pad;
  const maxY = box.height - btn.height - pad;

  const x = pad + Math.random() * Math.max(0, maxX);
  const y = pad + Math.random() * Math.max(0, maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
  noBtn.style.right = "auto"; // so left/top take over
  noBtn.style.transform = "scale(1.02)";
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNo);

// Mobile taps
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
}, { passive: false });

// Optional: if they manage to click "No" anyway
noBtn.addEventListener("click", moveNo);
