const { app } = require('express');
var router = express.Router();


router.get('/' ,function(req,res){
    res.send("response from student")
})

router.get('/:id',function(req,res){
    res.send|("from inside student file"+req.params.id);
})
router.put(':/id',function(req,res){
    res.send|("from inside student file put data"+req.params.id);
})

router.delete(':/id',function(req,res){
    res.send|("student successfully deleted"+req.params.id);
})