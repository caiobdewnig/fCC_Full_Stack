console.time("oiee")

function getAverageRating(arr) {
  const soma = eval(arr.join("+"));
  return soma/arr.length;
}

console.log(getAverageRating([1,2,3,4,5,6,7,8,9,10]))
console.timeEnd("oiee")



console.time("bla")
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(soma/numeros.length); // 15

console.timeEnd("bla")


console.time("alou")
let soma1 = 0;
for (let i = 0; i < numeros.length; i++) {
  soma1 += numeros[i];
}
console.log(soma1/numeros.length)
console.timeEnd("alou")