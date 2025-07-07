/* Minha tentativa:
function frankenSplice(firstArray, secondArray, index) {
  let firstArr = (String(firstArray)).replaceAll(",","");
  let secondArr = (String(secondArray)).replaceAll(",","");
  
  let mergeArr = (secondArr.slice(0,index) + firstArr + secondArr.slice(index, secondArr.length));

  return mergeArr.split("")
} */

//Solução correta:


function frankenSplice(firstArray, secondArray, index) {
  
  let newArray = secondArray.slice();
  
  newArray.splice(index, 0, ...firstArray);
  
  return newArray;
}
