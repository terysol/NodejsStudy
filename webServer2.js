const http = require('http');   

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');  // 응답 결과
});

server.listen(port, hostname, () => {  // 비동기 함수
    // listen 함수가 다 실행되면 실행되게 한다.
  console.log(`Server running at http://${hostname}:${port}/`);
});

