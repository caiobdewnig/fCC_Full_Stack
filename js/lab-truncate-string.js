function truncateString(str, num) {
  if (str.length > num) {
    let novaStr = str.slice(0,num);
    return novaStr + "..."
  } else {
    return str
  }
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))