function reverseString (str) {
    //return str.split("").reverse().join("") - jeito mais fácil que aprendi a usar enquanto tentava construir uma página web que verificava se uma string era um palíndromo.
    const arr = str.split("");
    const reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.push(arr[arr.length - 1 - i]);
    }
    return reversedArr.join("");
}
const mame = "casinha do meu pai e da minha mãe e do meu pai e da minha mãe e fui para a escola e não voltei mais depois de um tempo. A escola é muito legal e eu gosto muito de estudar lá."
console.log(reverseString("casinha do meu pai e da minha mãe e do meu pai e da minha mãe e fui para a escola e não voltei mais depois de um tempo. A escola é muito legal e eu gosto muito de estudar lá.")); // Expected output: ".ral lá estudar de muito gosto eu e legal muito é escola A tempo. um de depois mais voltei não e escola a para fui e mãe minha da e pai meu do e mãe minha da e pai meu do e casinha"