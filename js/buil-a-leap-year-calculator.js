function isLeapYear (num) {
  if((num % 4 == 0 && num % 100 != 0) || num % 400 == 0){
    return `${num} is a leap year.`
  } else {
    return `${num} is not a leap year.`
  }
}

let year = "", result = isLeapYear(year);

console.log(result)