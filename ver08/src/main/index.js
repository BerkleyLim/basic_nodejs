// express 선언
const express = require("express");

// POST에 request body 넣기 위해 실행
const bodyParser = require('body-parser')

// express에 app 넣고, 포트 지정
const app = express();
const PORT = 300;
const http = require('http').createServer(app);

// api 지정 (router)
const routes = require('./controller')

// body - parser
app.use(bodyParser.json())

app.use(routes)
// 서버 실행시 화면 표시
const consoleListening = () => {
  console.log(`server start : http://localhost:${PORT}`);
}

// 서버 실행
// main 화면입니다. 결과 뜨고,
// console에 server start : http://localhost:300 올리기
http.listen(PORT, consoleListening);

