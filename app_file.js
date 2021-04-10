// data -> 사용자가 등록한 정보 
// views_file -> 템플릿 엔진
// public_file -> static한 파일 보관

// 웹 어플리케이션
let express=require('express');
let app=express();
app.locals.pretty=true;
app.set('views','./views_file');
app.set('view engine','pug');



app.get('/topic/new',function(req,res){
    res.render('new');
})

app.post('/topic',function(req,res){
    res.send('HI POST');
})

app.listen(3002, function(){
    console.log('Connected, 3002 port');
})   // --> 특정포트를 리스닝 하게 만됨.

