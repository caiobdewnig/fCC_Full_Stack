function getAverage(arr) {
  let soma = 0;
  for(let i of arr) {
    soma+=i;
  }
  return soma/arr.length;
}

function getGrade(score) {
  if (score == 100) {
    return "A+";
  }

  if (score >= 90) {
    if (score <= 99) {
      return "A"
    }
  }
  
  if (score >= 80) {
    if (score <= 89) {
      return "B"
    }
  }

  if (score >= 70) {
    if (score <= 79) {
      return "C"
    }
  }

  if (score >= 60) {
    if (score <= 69) {
      return "D"
    }
  }

  if (score >= 0) {
    if (score <= 59) {
      return "F"
    }
  }
}

function hasPassingGrade (score) {
  if (getGrade(score) != "F") {
    return true
  } else {
    return false
  }
}

function studentMsg (arrScore, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(arrScore)}. Your grade: ${getGrade(score)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(arrScore)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
} 