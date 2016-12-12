var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

var lotteryNumber = 6666;
app.use("/choujiang",function(req,res){
    var arr= [180,315,135,270,360,90,225,45];
    var arr1= [10,100,120,200,300,500,1200,1500];
    var randomNum = parseInt(Math.random()*1000);
    var obj = {};
    lotteryNumber--;
    if(lotteryNumber < 0){
        obj.randomNum = -1;
        res.send(JSON.stringify(obj));
        return;
    }
    var index = 0;
    if(randomNum < 600){
        index = 0;

    }else if(randomNum < 750){
        index = 1;

    }else if(randomNum < 850){
        index =2;
      
    }else if(randomNum < 930){
        index =3;
       
    }else if(randomNum<980){
        index = 4;
       
    }else if(randomNum<995){
        index =5;
        
    }else if(randomNum<998){
        index = 6
       
    }else{
        index = 7;
    }

    obj.rotate = arr[index];
    obj.level = arr1[index];
    obj.lotteryNumber = lotteryNumber;
    console.log(obj);
    res.send(JSON.stringify(obj));
});


app.use('/login',function(req,res){
    res.send("12222222222222222222222222");
})
app.listen(3000);