var express=require('express');   // 모듈은 함수이다.
var app=express(); 
app.get('/',function(req,res){   // 사용자가 home으로 접속하면 함수가 실행되라.
    res.send("Hello World~~");   // 응답
}); 

// 라우터, 라우팅(routing),
app.get('/login',function(req,res){  // login경로 들어왔을 때 실행해라
    res.send("<h1>Login please</h1>");
})
app.listen(3001,function(){
    console.log('Connected 300 port!');
});


