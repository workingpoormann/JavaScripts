/**
 * OpenWeather から天気のデータを取得するにはOpenWeather APIにアクセスして
 * データを取得する
 * その際にAPI KEYを渡す必要があり、API KEYは秘匿情報
 *
 * 今回の実装だとAPI KEY は .env というローカルのファイルに記述しており
 * 普通のJSだとローカルファイルにアクセスできないため
 *
 * 1. ローカルにサーバーを立てて .env を読み込んで
 *   OpenWeather APIから情報を取得
 *
 * 2. その後Frontend側からこのローカルサーバーにアクセスして
 *   データを表示する
 *
 * という感じになった
 */

// 環境変数を読むnpm package
// やってることは .env ローカルのファイルを読んでるだけ
const dotenv = require("dotenv");
dotenv.config();

//
// JavaScriptでローカルにサーバーを立てる
// express という有名なpackage
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // CORS Policy

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static("public"));

// http://localhost:PORT
app.get("/", async (req, res) => {
  const city = req.query.city;

  // API KEYを読みだす
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
