var express=require('express');   // 모듈은 함수이다.
const { now } = require('underscore');
var app=express(); 
var bodyParser=require('body-parser');

app.locals.pretty=true;
app.set('views','./views');
app.set('view engine','pug');     // 템플릿 엔진을 사용하기 위해 pug를 사용함
app.use(express.static('public'));    // 정적인 파일을 사용자에게 서비스 할 수 있다.
app.use(bodyParser.urlencoded({extended : false}))  // 먼저 bodyParser post방식으로 전송한 데이터를 우리가 사용할 수 있게 함.

app.get('/form',function(req,res){
    res.render('form');
})

app.post('/form_receiver',function(req,res){
    var title=req.body.title;
    var description=req.body.description;
    res.send(title + "," + description);
})

app.get('/form_receiver',function(req,res){
    var title=req.query.title;
    var description=req.query.description;
    res.send(title+',' + description);
})

app.get('/topic/:id',function(req,res){
    var topics=[
        'Javacript is .....',
        'Nodejs is ...',
        'Express is ...'
    ];
    var output=`
        <a href="/topic/0">Javascript</a><br>
        <a href="/topic/1">Nodejs</a><br>
        <a href="/topic/2">Express</a><br>
        ${topics[req.query.id]}
        `
        res.send(output);             // 쿼리스트링값으로 준 값이 출력
})

app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+',' + req.params.mode);
})

app.get('/param/:module_id/:topic_id',function(req,res){
    res.json(req.params);
})

app.get('/template',function(req,res){    // template라는 경로를 들어온 사용자에게 temp의 템플릿 파일을 보여준다.
    res.render('temp',{time:Date(), title:'Pug'});           // 템플릿 엔진에 값 주입하기
})

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

// express가 사용자가 get를 하게 되면 두번째 인자값 인명함수를 호출한다.
// 쿼리스트링

// 21.04.03 - 시멘틱 URL

// 21.04.04 - Get vs Post - 사용자의 정보를 서버로 전달할 때 :Post -> url를 통해서 데이터를
// 전송하지 않음. body-parser를 사용하여 post방식으로 보낸 데이터를 보여준다.