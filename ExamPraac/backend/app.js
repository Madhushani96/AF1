const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
var routes=require('./Routes');

var app=express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/',routes);

app.listen(8085,'localhost',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Server Listening to port 8085")
})