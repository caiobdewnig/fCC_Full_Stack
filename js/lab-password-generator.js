function generatePassword(num) {
  let pass = "";

  for (let i = 1; i <= num; i++) {
    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()`;
    let randomChar = str[Math.floor(Math.random() * str.length)];
    pass += randomChar;
  }
  return pass;
}

let password = generatePassword(29);

console.log(`Generated password: ${password}`)