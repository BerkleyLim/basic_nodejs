// http 라이브러리 연동
const http = require('http');

// 서버 주소, 포트 지정
const hostname = '127.0.0.1';
const port = 300;

// 서버 설정
const server = http.createServer((request, response) => {
  response.statusCode = 200;  // 상태 코드
  response.setHeader('Content-Type', 'text/plain'); // 헤더 설정
  response.end('Hello Worlds');  // 화면에 띄울 페이지
})

// 서버 실행
server.listen(port, hostname, () => {
  // 콘솔에 창을 띄어줍니다.
  console.log(`Server running at http://${hostname}:${port}`)
})