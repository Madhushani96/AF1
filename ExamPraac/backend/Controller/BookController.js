var monogoose=require('../DBSchema/Schema');
var schema=monogoose.model('Book');

var BookController=function(){
    this.insert = (data) => {
        return new Promise(function (resolve, reject) {
            var book=schema({
                name:data.name,
                author:data.author,
                price:data.price
            })

            book.save().then(function(){
                resolve({status:200,message:"Book added"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.getOne = (name) => {
        return new Promise(function (resolve, reject) {

            var Name=new RegExp(["^",name,"$"].join(""),"i");

            schema.find({name:Name}).then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }
    this.update = (name, data) => {
        return new Promise(function (resolve, reject) {
            schema.update({name:name},data).then(function(){
                resolve({status:200,message:"Updated Book"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }
}

module.exports=new BookController();