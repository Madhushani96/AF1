const express=require('express');
var routes=express.Router();
var Bookrouter=require('./Controller/BookRouter');

routes.use('/book',Bookrouter);

module.exports=routes;