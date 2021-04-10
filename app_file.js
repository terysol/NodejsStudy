// data -> 사용자가 등록한 정보 
// views_file -> 템플릿 엔진
// public_file -> static한 파일 보관

// 웹 어플리케이션
let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let fs=require('fs');
app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty=true;
app.set('views','./views_file');
app.set('view engine','pug');

app.get('/topic/new',function(req,res){
    res.render('new');
})

app.post('/topic',function(req,res){
    var title=req.body.title;
    var description=req.body.description;
    fs.writeFile('data/' + title,description,(err)=>{
        if(err){
            res.status(500).send('Internal Server Error');
        }
        res.send('Success !!');
    });
})

app.get('/topic',(req,res)=>{
    fs.readdir('data',(err,files)=>{
        if(err){
            res.status(500).send('Internal Server Error');
        }
        res.render('view',{topics:files});   // view파일에 files를 객체로 만들어서 전달한다.
    })
});

app.listen(3002, function(){
    console.log('Connected, 3002 port');
})   // --> 특정포트를 리스닝 하게 만듦.

