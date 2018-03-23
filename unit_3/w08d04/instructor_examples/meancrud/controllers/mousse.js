var express = require('express');
var router = express.Router();
var Mousse = require('../models/mousse.js');

router.get('/', function(req, res){
    Mousse.find({}, function(err, foundMousses){
        res.json(foundMousses);
    });
});

router.post('/', function(req, res){
    Mousse.create(req.body, function(err, createdMousse){
        res.json(createdMousse);
    });
});

router.put('/:id', function(req, res){
    //                       find this guy
    //                                  update it to this
    //                                         callback gets updated model
    //                                                            callback function
    Mousse.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedMousse){
        res.json(updatedMousse);
    });
});

router.delete('/:id', function(req, res){
    Mousse.findByIdAndRemove(req.params.id, function(err, deletedMousse){
        res.json(deletedMousse);
    });
});

module.exports = router;
