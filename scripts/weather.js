// weatherAPI
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");

const displayData = (weather) => {
  cityName.textContent = `${weather.name}`;
  temp.textContent = `${weather.main.temp.toFixed()}°C`;
};

const fetchWeatherData = (city) => {
  const apiKey = "4fc7292a38fb273bfc5f4830c8be99e3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Something went wrong!"));
};

// Fetch weather data for Istanbul on page load
fetchWeatherData("Istanbul");
