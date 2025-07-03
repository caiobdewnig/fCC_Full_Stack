let fortune1 = "Se o Quiago Timeley não tropeçar hoje, você vai. Em decisões ruins.", fortune2 = "Quiago Timeley decidiu que você vai passar vergonha hoje. E amanhã também.", fortune3 = "Se o Quiago Timeley mijar pra esquerda hoje, sua autoestima vai evaporar."
, fortune4 = "Você é o protagonista da vida... do Quiago Timeley. E ele te odeia."
, fortune5 = "A estabilidade emocional do seu dia depende da flatulência cósmica do Quiago Timeley.";

let randomNumber = Math.round((Math.random() * (5 - 1)) + 1);
let selectedFortune;

if (randomNumber == 1) {
  selectedFortune = fortune1
} else if (randomNumber == 2) {
  selectedFortune = fortune2
} else if (randomNumber == 3) {
  selectedFortune = fortune3
} else if (randomNumber == 4) {
  selectedFortune = fortune4
} else {
  selectedFortune = fortune5
}

console.log(selectedFortune)
