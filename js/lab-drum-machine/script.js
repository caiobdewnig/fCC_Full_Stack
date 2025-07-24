// Getting buttons
const qKey = document.querySelector("#heater1");
const wKey = document.querySelector("#heater2");
const eKey = document.querySelector("#heater3");
const aKey = document.querySelector("#heater4");
const sKey = document.querySelector("#clap");
const dKey = document.querySelector("#open-hh");
const zKey = document.querySelector("#kick-n-hat");
const xKey = document.querySelector("#kick");
const cKey = document.querySelector("#closed-hh");


// Getting audios
const qAudio = document.querySelector("#Q");
const wAudio = document.querySelector("#W");
const eAudio = document.querySelector("#E");
const aAudio = document.querySelector("#A");
const sAudio = document.querySelector("#S");
const dAudio = document.querySelector("#D");
const zAudio = document.querySelector("#Z");
const xAudio = document.querySelector("#X");
const cAudio = document.querySelector("#C");

// Getting <p> element to display on the screen
const displayText = document.querySelector("#display");

// Play sound on click and display text
qKey.addEventListener("click", () => {
  qAudio.currentTime = 0; 
  qAudio.play();
  displayText.innerText = "Heater 1";
});

wKey.addEventListener("click", () => {
  wAudio.currentTime = 0; 
  wAudio.play();
  displayText.innerText = "Heater 2";
});

eKey.addEventListener("click", () => {
  eAudio.currentTime = 0; 
  eAudio.play();
  displayText.innerText = "Heater 3";
});

aKey.addEventListener("click", () => {
  aAudio.currentTime = 0; 
  aAudio.play();
  displayText.innerText = "Heater 4";
});

sKey.addEventListener("click", () => {
  sAudio.currentTime = 0; 
  sAudio.play();
  displayText.innerText = "Clap";
});

dKey.addEventListener("click", () => {
  dAudio.currentTime = 0; 
  dAudio.play();
  displayText.innerText = "Open HH";
});

zKey.addEventListener("click", () => {
  zAudio.currentTime = 0; 
  zAudio.play();
  displayText.innerText = "Kick N' Hat";
});

xKey.addEventListener("click", () => {
  xAudio.currentTime = 0; 
  xAudio.play();
  displayText.innerText = "Kick";
});

cKey.addEventListener("click", () => {
  cAudio.currentTime = 0; 
  cAudio.play();
  displayText.innerText = "Closed HH";
});



//Play sound pressing a keydown and display text
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "q") {
    qAudio.currentTime = 0; 
    qAudio.play();
    displayText.innerText = "Heater 1";
  } else if (e.key.toLowerCase() === "w") {
    wAudio.currentTime = 0; 
    wAudio.play();
    displayText.innerText = "Heater 2";
  } else if (e.key.toLowerCase() === "e") {
    eAudio.currentTime = 0; 
    eAudio.play();
    displayText.innerText = "Heater 3";
  } else if (e.key.toLowerCase() === "a") {
    aAudio.currentTime = 0; 
    aAudio.play();
    displayText.innerText = "Heater 4";
  } else if (e.key.toLowerCase() === "s") {
    sAudio.currentTime = 0; 
    sAudio.play();
    displayText.innerText = "Clap";
  } else if (e.key.toLowerCase() === "d") {
    dAudio.currentTime = 0; 
    dAudio.play();
    displayText.innerText = "Open HH";
  } else if (e.key.toLowerCase() === "z") {
    zAudio.currentTime = 0; 
    zAudio.play();
    displayText.innerText = "Kick N' Hat";
  } else if (e.key.toLowerCase() === "x") {
    xAudio.currentTime = 0; 
    xAudio.play();
    displayText.innerText = "Kick";
  } else if (e.key.toLowerCase() === "c") {
    cAudio.currentTime = 0; 
    cAudio.play();
    displayText.innerText = "Closed HH";
  } 
}); 
