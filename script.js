const text = "Hey there!  Would you like to attend my graduation?";
const dialogText = document.getElementById("dialogText");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let index = 0;
let looping = false; // control if "Are you sure?" loop is running

// Typing effect for main question
function typeWriter() {
  if (index < text.length) {
    dialogText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  } else {
    buttons.style.display = "flex";
  }
}

typeWriter();

// YES  go to next screen
yesBtn.addEventListener("click", () => {
  window.location.href = "transition.html";
});

// NO trigger looping "Are you sure?" messages, keeping buttons active
noBtn.addEventListener("click", () => {
  looping = true;
  showLoopMessage();
});

function showLoopMessage() {
  const responses = [
    "Are you sure?",
    "Really sure?",
    "Come on... it's my graduation!",
    "Please? ",
    "Think again...",
    "Last chance? ",
    "Just press Yes already "
  ];

  dialogText.innerHTML = "";
  let message = responses[Math.floor(Math.random() * responses.length)];
  let i = 0;

  buttons.style.display = "none";

  function typeMessage() {
    if (i < message.length) {
      dialogText.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeMessage, 40);
    } else {
      buttons.style.display = "flex"; // buttons reappear every time
    }
  }
  typeMessage();
}

document.addEventListener("click", () => {
  const audio = document.getElementById("player");
  audio.muted = false;
  audio.play();
}, { once: true });

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('player');
    if (audio) audio.volume = 0.3; // 0.0 - 1.0 (50%)
});

