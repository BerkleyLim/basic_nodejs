// express 선언
const express = require("express");

// express에 app 넣고, 포트 지정
const app = express();
const PORT = 300;

// 서버 실행
// 결과 값 : Cannot GET /
app.listen(PORT);