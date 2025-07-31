/* 
Minha tentativa: (não consegui implementar a lógica para a animação!)

const generateBtn = document.querySelector("#generate-btn");
const startingArr = document.querySelector("#starting-array");
const arrContainer = document.querySelector("#array-container");
const sortBtn = document.querySelector("#sort-btn")

const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () => {
  const filledArr = [];
  for (let i = 0; i < 5; i++) {
    filledArr.push(generateElement());
  }
  return filledArr;
};

const generateContainer = () => {
  return document.createElement("div");
};

const fillArrContainer = (htmlElement, arr) => {
  htmlElement.innerHTML = "";
  arr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    htmlElement.appendChild(span);
  });
};

const isOrdered = (firstInt, secondInt) => {
  return firstInt <= secondInt;
};

const swapElements = (arr, numIndex) => {
  if (!isOrdered(arr[numIndex], arr[numIndex + 1])) {
    const temp = arr[numIndex];
    arr[numIndex] = arr[numIndex + 1];
    arr[numIndex + 1] = temp;
  }
};

const highlightCurrentEls = (htmlElement, numIndex) => {
  htmlElement.children[numIndex].style.border = "2px dashed red";
  htmlElement.children[numIndex + 1].style.border = "2px dashed red";
};

generateBtn.addEventListener("click", () => {
  arrContainer.innerHTML = "";
  const newArr = generateArray();
  fillArrContainer(startingArr, newArr);
});

const bubbleSort = (arr) => {
  if (arr.length !== 1) {
    const copy = arr
    for (let j = 0; j < arr.length - 1; j++) {
      for (let i = 0; i < arr.length - 1 - j; i++) {
        if (!isOrdered(arr[i], arr[i + 1])) {
          swapElements(arr, i);
        }
      }
    }
    if (arr === copy.sort((a, b) => a - b)) {
      return arr
    }
  } else {
    return arr
  }
}

sortBtn.addEventListener("click", () => {
  
}) */

var arrayContainer = document.getElementById("array-container");
var generateArrayBtn = document.getElementById("generate-btn");
var sortArrayBtn = document.getElementById("sort-btn");

var generateElement = function() {
    return Math.floor(Math.random() * 100) + 1;
};

var generateArray = function() {
    return Array.from({ length: 5 }, generateElement);
};

var generateContainer = function() {
    var container = document.createElement("div");
    arrayContainer.appendChild(container);
    return container;
};

var fillArrContainer = function(container, arr) {
    container.innerHTML = "";
    arr.forEach(function(num) {
        var span = document.createElement("span");
        span.innerText = num;
        container.appendChild(span);
    });
};

var isOrdered = function(el1, el2) {
    return el1 <= el2;
};

var swapElements = function(arr, index) {
    if (index < arr.length - 1 && !isOrdered(arr[index], arr[index + 1])) {
        var temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
    }
};

var highlightCurrentEls = function(container, index) {
    if (index === undefined) index = 0;
    var children = container.children;
    if (children[index]) {
        children[index].style.border = "2px dashed red";
    }
    if (children[index + 1]) {
        children[index + 1].style.border = "2px dashed red";
    }
};

var getArrayFromContainer = function(container) {
    return Array.from(container.children).map(function(span) {
        return parseInt(span.innerText);
    });
};

var clearArrayContainer = function() {
    arrayContainer.innerHTML = '<div id="starting-array"></div>';
};

var showSortBtn = function() {
    sortArrayBtn.style.display = "inline-block";
};

var hideSortBtn = function() {
    sortArrayBtn.style.display = "none";
};

var bubbleSort = function() {
    var startingArray = document.getElementById("starting-array");
    var currentArray = getArrayFromContainer(startingArray);
    
    highlightCurrentEls(startingArray, 0);
    
    var n = currentArray.length;
    var swapped;
    
    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            var newContainer = generateContainer();
            var arrayToProcess = [...currentArray];
            
            swapElements(arrayToProcess, i);
            
            if (arrayToProcess[i] !== currentArray[i]) {
                swapped = true;
            }
            
            fillArrContainer(newContainer, arrayToProcess);
            
            highlightCurrentEls(newContainer, i);
            
            currentArray = arrayToProcess;
        }
        n--;
    } while (swapped);
};

generateArrayBtn.addEventListener("click", function() {
    if (arrayContainer.children.length > 1 || 
        (arrayContainer.children.length === 1 && arrayContainer.children[0].children.length > 0)) {
        clearArrayContainer();
    }
    
    var startingArray = document.getElementById("starting-array");
    var newArray = generateArray();
    fillArrContainer(startingArray, newArray);
    showSortBtn();
});

sortArrayBtn.addEventListener("click", function() {
    bubbleSort();
    hideSortBtn();
});