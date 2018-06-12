var express=require('express');
var router=express.Router();
var BookController=require('./BookController');

router.post('/',function(req,res){
    BookController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router.get('/:name',function(req,res){
    BookController.getOne(req.params.name).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router.put('/:name',function(req,res){
    BookController.update(req.params.name,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})


module.exports=router;
 