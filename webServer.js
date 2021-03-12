const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// WebServer가 되는 코드
// 우리 컴퓨터에서 요청이 오길 기다린다.
// 웹 브라우저를 통해 응답을 전송함.