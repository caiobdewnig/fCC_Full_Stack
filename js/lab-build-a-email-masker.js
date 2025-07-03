function maskEmail(email) {
  const cumeco = email.slice(0,email.indexOf("@"));
  const final = email.slice(email.indexOf("@"));

  return cumeco[0] + "*".repeat(email.indexOf("@") - 2) + cumeco[email.indexOf("@") - 1] + final;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "info@test.dev";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));
