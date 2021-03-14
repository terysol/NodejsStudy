// NodeJS WebServer 만들기

const http = require('http');   // 'http' 라는 모듈을 http변수에 할당   


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {   // 서버 만들기
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');  // 응답 결과
});

server.listen(port, hostname, () => {   // 컴퓨터에 리스닝하게 시킴.port는 3000
  console.log(`Server running at http://${hostname}:${port}/`);
});

// nodejs에서 WebServer를 만들고 port, 3000를 리스닝 하게 시키고 사용자, 127.0.0.1 로 
// 접속한 사용자에 대해서 응답하라고 함.
// 

// WebServer가 되는 코드
// 우리 컴퓨터에서 요청이 오길 기다린다.
// 웹 브라우저를 통해 응답을 전송함. 

