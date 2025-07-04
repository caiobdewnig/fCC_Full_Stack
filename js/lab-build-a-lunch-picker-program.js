let lunches = [];

function addLunchToEnd(lunchArr, lunchStr) { 
  lunchArr.push(lunchStr);
  console.log(`${lunchStr} added to the end of the lunch menu.`);
  return lunchArr;
}

function addLunchToStart(lunchArr, lunchStr) { 
  lunchArr.unshift(lunchStr);
  console.log(`${lunchStr} added to the start of the lunch menu.`);
  return lunchArr;
}

function removeLastLunch(lunchArr) { 
  const removed = lunchArr.pop();
  if (removed != undefined) {
    console.log(`${removed} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunchArr;
}

function removeFirstLunch(lunchArr) { 
  const removed = lunchArr.shift();
  if (removed != undefined) {
    console.log(`${removed} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunchArr;
}

function getRandomLunch(lunchArr) {
  const randomItem = lunchArr[Math.floor(Math.random()*lunchArr.length)];
  if (randomItem != undefined) {
    console.log(`Randomly selected lunch: ${randomItem}`);
  } else {
    console.log("No lunches available.");
  }
} 

function showLunchMenu(lunchArr) {
  if (lunchArr.length !== 0) {
    console.log(`Menu items: ${lunchArr.join(", ")}`)
  } else {
    console.log("The menu is empty.")
  }
}