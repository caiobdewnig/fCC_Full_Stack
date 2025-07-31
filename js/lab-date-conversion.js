const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate.toString()}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString("pt-BR")}`;
}

function formatDateLong(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));