const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }
  if (globalFlag.checked) {
    flags += "g";
  }
  return flags;
}

testButton.addEventListener("click", function () {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const regex = new RegExp(pattern, flags);
  const originalText = stringToTest.innerText;

  const matches = originalText.match(regex);

  if (!matches) {
    testResult.innerText = "no match";
    return;
  }

  testResult.innerText = matches.join(", ");

  const highlighted = originalText.replace(regex, function (match) {
    return `<span class="highlight">${match}</span>`;
  });

  stringToTest.innerHTML = highlighted;
});
