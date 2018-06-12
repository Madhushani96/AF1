var mongoose=require('mongoose');
var schema=mongoose.Schema;

var BookScehema=new schema({

    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }

})

mongoose.model('Book',BookScehema);

mongoose.connect('mongodb://127.0.0.1:27017/BookShop',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

module.exports=mongoose;