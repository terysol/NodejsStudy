// fs.readFile(file[,option]);
const fs=require('fs');

// 동기적인 방법
const data=fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(data);


// 비동기적인 방법 -> 2,4,3, data값 순으로
console.log(2);
fs.readFile('data.txt',{encoding:'utf-8'},function(err,data){ // 백그라운드에서 실행
    console.log(3);
    console.log(data);  // 콜백전달한 익명함수를 readFile를 실행한다.
});   
console.log(4);