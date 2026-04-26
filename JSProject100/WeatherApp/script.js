/**
 * Frontend側の設計
 * ローカル側に建てたサーバーからデータを取得する
 */
const getWeatherButton = document.getElementById("getWeatherButton");

getWeatherButton.addEventListener("click", async () => {
  const city = document.getElementById("cityName").value;

  const res = await fetch(`http://localhost:3000/?city=${city}`);
  const data = await res.json();

  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.style.display = "flex";

  const temperature = document.getElementById("temperature");
  temperature.textContent = (Number(data.main.temp) - 273.15).toFixed(2);

  const weather = document.getElementById("weather");
  weather.textContent = data.weather[0].description;

  const feelsLike = document.getElementById("feelsLike");
  feelsLike.textContent = data.main.feels_like;

  const humidity = document.getElementById("humidity");
  humidity.textContent = data.main.humidity;

  const windSpeed = document.getElementById("windSpeed");
  windSpeed.textContent = data.wind.speed;
});
