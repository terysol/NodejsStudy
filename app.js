var express=require('express');   // 모듈은 함수이다.
var app=express(); 

app.use(express.static('public'));    // 정적인 파일을 사용자에게 서비스 할 수 있다.

app.get('/',function(req,res){   // 사용자가 home으로 접속하면 함수가 실행되라.
    res.send("Hello World~~");   // 응답
}); 

app.get('/dynamic',function(req,res){   // 변경사항이 있어도 새로고치름을 해도 바뀌지 않음.
    var lis='';
    for(var i=0;i<5;i++){
        lis=lis+'<li>coding</li>';
    }
    var time=Date();

    var output=
    `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>안녕</title>
        </head>
        <body>
            Hello dynamic
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
     </html>`
    res.send(output);
})

// 라우터, 라우팅(routing),
app.get('/login',function(req,res){  // login경로 들어왔을 때 실행해라
    res.send("<h1>Login please</h1>");
})
app.listen(3001,function(){
    console.log('Connected 3001 port!');
});


// 정적인 파일은 새로고침 안 해도 바로 반영된다.
// 동적인 파일은 새로고침을 해도 바로 반영이 되지 않는다. (서버를 껐다가 다시 켜야함.)