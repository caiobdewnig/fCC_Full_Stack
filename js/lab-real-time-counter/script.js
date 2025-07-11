const characters = document.getElementById("text-input");
const p = document.getElementById("char-count");
const h1 = document.querySelector("h1");

let chaosInterval = null;

function randomPosition(el) {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
}

function startChaos() {
  [characters, p, h1].forEach(el => {
    el.classList.add("chaotic");
  });

  chaosInterval = setInterval(() => {
    [characters, p, h1].forEach(el => {
      randomPosition(el);
    });
  }, 300);
}

function stopChaos() {
  clearInterval(chaosInterval);
  chaosInterval = null;
  [characters, p, h1].forEach(el => {
    el.classList.remove("chaotic");
    el.style.left = "";
    el.style.top = "";
  });
}

characters.addEventListener("input", () => {
  let text = characters.value;

  if (text.length > 50) {
    characters.value = text.slice(0, 50);
  }

  p.textContent = `Character Count: ${characters.value.length}/50`;

  if (characters.value.length >= 50) {
    characters.style.color = "red";
    p.style.color = "red";
    if (!chaosInterval) startChaos();
  } else {
    characters.style.color = "";
    p.style.color = "";
    stopChaos();
  }
});


