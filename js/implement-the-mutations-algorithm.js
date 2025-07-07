
/* Minha tentativa (Minha intenção era comparar as duas strings, ver qual delas era menor e ver se essa string menor tinha todos os caracteres presentes na outra string. Só fui me tocar depois que eu teria que verificar se a segunda string estava contida na primeira... Minha tentativa só falhou no caso em que o array era ["ate", "date"]):

function mutation(arr) {

  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  if (firstWord.length >= secondWord.length) {
    let firstBoolCounter = 1;

    for (let char of secondWord) {
      if (firstWord.includes(char)) {
        firstBoolCounter *= 1;
      } else {
        firstBoolCounter *= 0
      }
    }

    if (firstBoolCounter == 1) {
      return true
    } else {
      return false
    }
  } else {
    let secondBoolCounter = 1;

    for (let char of firstWord) {
      if(secondWord.includes(char)) {
        secondBoolCounter *= 1
      } else {
        secondBoolCounter *= 0
      }
    }

    if (secondBoolCounter == 1) {
      return true
    } else {
      return false
    }
  }
} */

//Correção:

function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let char of secondWord) {
    if (!firstWord.includes(char)) {
      return false;
    }
  }

  return true;
}