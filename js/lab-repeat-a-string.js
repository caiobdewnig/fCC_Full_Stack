function repeatStringNumTimes(str, num) {
  let strToFill = "";
  for (let i = 0; i < num; i++) {
    strToFill += str
  }
  return strToFill;
}

console.log(repeatStringNumTimes("abc", 4))