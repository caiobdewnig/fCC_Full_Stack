/* Primeiro tentei converter o array em string, retirar as vírgulas do array e encontrar algum padrão para pegar subdivisões do array original.... Ridiculamente trabalhoso e desnecessário.

function chunkArrayInGroups (arr, num) {
  let finalArr = [];
  let stringfyArr = String(arr);
  stringfyArr = stringfyArr.replaceAll(",","")

  for (let i=0;i<=((arr.length)%num)-1;i++) {
    finalArr.push("[" + stringfyArr.slice(i*num, (i+1)*num) + "]")
  }

  return finalArr
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)) */

function chunkArrayInGroups(arr, num) {
  const finalArr = [];

  for (let i = 0; i < arr.length; i += num) {
    finalArr.push(arr.slice(i, i + num));
  }

  return finalArr;
}