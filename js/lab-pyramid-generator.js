function pyramid(str, int, bool) {
  let result = "\n";

  for (let i = 0; i < int; i++) {
    let index;

    if (bool === true) {
      index = int - 1 - i;
    } else {
      index = i;
    }

    let numChars = 2 * index + 1;
    let numSpaces = int - index - 1;

    result += " ".repeat(numSpaces) + str.repeat(numChars) + "\n";
  }

  return result;
}
