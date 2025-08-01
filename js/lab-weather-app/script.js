/* MINHA TENTATIVA:
async function getWeather(city) { 
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/` + city.toLowerCase());
    return response.json();
  } catch (err) {
    console.log(err);
    alert("Something went wrong, please try again later")
  }
}

async function showWeather(city) {
  const weatherObj = {
    "new york": document.getElementById("new york").textContent,
    "los angeles": document.getElementById("los angeles").textContent,
    "chicago": document.getElementById("chicago").textContent,
    "paris": document.getElementById("paris").textContent,
    "tokyo": document.getElementById("tokyo").textContent,
    "london": document.getElementById("london").textContent,
  }
  return getWeather(weatherObj[city])
}

const weatherBtn = document.getElementById("get-weather-btn");

weatherBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector("select").value;
  document.getElementById("main-temperature").innerText = showWeather(selectedOption).main.temp + " ºC";
  document.getElementById("feels-like").innerText = showWeather(selectedOption).main["feels_like"] + " ºC";
  document.getElementById("humidity").innerText = showWeather(selectedOption).main.humidity + " ºC"
  document.getElementById("wind").innerText = `${Number(showWeather(selectedOption).wind.speed) * 3.6} km/h`;
  document.getElementById("wind-gust").innerText = `${Number(showWeather(selectedOption).wind.gust) * 3.6} km/h`;
  document.getElementById("weather-main").innerText = showWeather(selectedOption).weather[0].main;
  document.getElementById("location").innerText = showWeather(selectedOption).name
})
*/

//MINHA TENTATIVA COM CORREÇÕES:

async function getWeather(city) { 
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city.toLowerCase()}`);
    return await response.json();
  } catch (err) {
    console.log(err);
    alert("Something went wrong, please try again later");
  }
}

const weatherBtn = document.getElementById("get-weather-btn");

weatherBtn.addEventListener("click", async () => {
  const selectedOption = document.querySelector("select").value;

  if (!selectedOption) {
    alert("Please select a city first.");
    return;
  } else if (selectedOption === "paris") {
    alert("Paris is currently unavailable. Please select another city.");
    return;
  }

  const data = await getWeather(selectedOption);

  if (!data) return;

  // Mostrando dados na tela:
  document.querySelector("div").classList.remove("hide");

  document.getElementById("main-temperature").innerText = `Temperature: ${data.main.temp ? data.main.temp : "N/A"} ºC`;
  document.getElementById("feels-like").innerText = `Feels like: ${data.main.feels_like ? data.main.feels_like : "N/A"} ºC`;
  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity ? data.main.humidity: "N/A"}%`;
  document.getElementById("wind").innerText = `Wind: ${data.wind.speed ? (data.wind.speed * 3.6).toFixed(1) : "N/A"} km/h`;
  document.getElementById("wind-gust").innerText = `Gust: ${data.wind.gust ? (data.wind.gust * 3.6).toFixed(1): "N/A"} km/h`;
  document.getElementById("weather-main").innerText = `Weather: ${data.weather[0].main ? data.weather[0].main : "N/A"}`;
  document.getElementById("location").innerText = `Location: ${data.name ? data.name : "N/A"}`;
  document.querySelector("img").src = data.weather[0].icon;
});
