/**
 * API KEYはFrontend側HTML側からは読み込むことができないので
 * Server側でAPIKEYを用いてOpenWeatherにアクセスしてデータを取得する
 * そのデータをFrontend側から取得するという方法をとる必要がある
 */

// 環境変数をよむ
const dotenv = require("dotenv");
dotenv.config();

// JavaScriptでローカルにサーバーを立てる
// express というめちゃ有名な
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // CORS Policy

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static("public"));

// localhost PORT
app.get("/", async (req, res) => {
  const city = req.query.city;

  // ここで環境変数を読み込む
  const apiKey = process.env.OPENWEATHER_APIKEY;

  // OpenWeather MapのAPIにアクセスする
  // この時にAPI KEYが必要になる
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
