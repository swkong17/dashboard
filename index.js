//express 모듈
const express=require('express');
//path
const path= require('path');

//서버생성
const app=express();
//포트
const PORT = Number(process.env.PORT) || 3000;

app.get('/',(req,res)=> {
    res.status(200);
    res.send('mywebboard');
});

//뷰 엔진d
app.set('view engine','ejs');
app.set('views',__dirname);

//정적파일
app.use(express.static(path.join(__dirname,'public')));

//바디파서
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//라우터
app.use('/users',require('./userRoutes'));
//서버실행

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`server is running on ${PORT}`);
});


