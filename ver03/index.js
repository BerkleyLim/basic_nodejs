// express 선언
const express = require("express");

// express에 app 넣고, 포트 지정
const app = express();
const PORT = 300;

// -------------------------------------------------------------------
// 이 함수가 get보다 더 위에 올라와져있어야 한다.
// 서버 실행시 화면 표시
const consoleListening = () => {
  console.log(`server start : http://localhost:${PORT}`);
}

// 인덱스에서 연결하는 함수
const mainView = (request, response) => {
  response.send('main 화면입니다.');
}
// -------------------------------------------------------------------

// 경로 설정
// 경로가 / 일때 main 화면입니다. 실행
app.get('/', mainView)

// 서버 실행
// main 화면입니다. 결과 뜨고,
// console에 server start : http://localhost:300 올리기
app.listen(PORT, consoleListening);

