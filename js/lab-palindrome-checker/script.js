const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");


checkBtn.addEventListener("click", () => {
  if (textInput.value.trim() === "") {
    return alert("Please input a value")
  } else if (textInput.value.trim().length === 1) {
    result.style.background = "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))";
      result.style.color = "#86efac";
      result.style.borderColor = "rgba(34, 197, 94, 0.4)";
      result.style.animation = "success-pulse 0.6s ease-out"
    return result.innerHTML = `<span class="highlight">${textInput.value}</span>&nbsp;is a palindrome.`;
  } else {
      const cleaned = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
      const reversed = cleaned.split('').reverse().join('');
      const isPalindrome = cleaned === reversed;

      if (isPalindrome) {
      result.style.background = "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.08))";
      result.style.color = "#8be3c3";
      result.style.borderColor = "#4ade80";
      result.style.animation = "success-pulse 0.6s ease-out";
      return result.innerHTML = `<span class="highlight">${textInput.value}</span>&nbsp;is a palindrome`;
    } else {
      result.style.background = "linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.08))";
      result.style.color = "#fda4af";
      result.style.borderColor = "#f87171";
      result.style.animation = "error-shake 0.6s ease-out";
      return result.innerHTML = `<span class="highlightW">${textInput.value}</span>&nbsp;is not a palindrome`;
    }
  }

})