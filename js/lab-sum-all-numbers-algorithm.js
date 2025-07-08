function sumAll(arr) {
  let sum = (arr[1]*(arr[1]-1) - arr[0]*(arr[0]-1))/2;

  if (arr[0] <= arr[1]) {
    return sum + arr[1]
  } else {
    return -sum + arr[0]
  }
}


function sumAll2(arr) {
  let sum = 0;
  if (arr[0] <= arr[1]) {
    for (let i=arr[0]; i<=arr[1]; i++) {
      sum += i;
    }
  } else {
    for (let i=arr[1]; i<=arr[0]; i++) {
      sum += i;
    }
  }
  return sum;
}


console.time()
sumAll([60,7])
console.timeEnd()

console.time()
sumAll2([60,7])
console.timeEnd()

console.log(Number(undefined))