/*
const mediaIndex = []

//Fiz uma função que acha o maior subarray de um array de duas dimensões

function largestOfAll (arr) {
  for (let i = 0; i < arr.length; i++) {
    let soma = 0;
    for (let j = 0; j < arr[i].length; j++) {
      soma += arr[i][j]
    }
    let media = soma/arr[i].length;
    mediaIndex.push(media)
  }
  return arr[mediaIndex.indexOf(Math.max(...mediaIndex))]
}

console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))
*/


function largestOfAll (arr) {
  const emptyArr = [];
  for (let i=0; i < arr.length; i++) {
    emptyArr.push(Math.max(...arr[i]))
  }
  return emptyArr;
}

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))