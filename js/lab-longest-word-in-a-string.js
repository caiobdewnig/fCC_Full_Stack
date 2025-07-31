function findLongestWordLength(str) {
  let strToArr = str.split(" ")
  let emptyStr = []
  for (let i=0; i < strToArr.length; i++) {
    emptyStr.push(strToArr[i].length)
  }
  return Math.max(...emptyStr)
}

