const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "Which country has the largest population?",
    choices: ["India", "China", "USA"],
    answer: "China"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Thomas Jefferson", "Abraham Lincoln", "George Washington"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is the value of π (pi) rounded to two decimal places?",
    choices: ["3.12", "3.14", "3.16"],
    answer: "3.14"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  }
];

function getRandomQuestion(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

function getRandomComputerChoice(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}