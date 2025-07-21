const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate.toString()}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString("en-US")}`;
}

function formatDateLong(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`;
}
