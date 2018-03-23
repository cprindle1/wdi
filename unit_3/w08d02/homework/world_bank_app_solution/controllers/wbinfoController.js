var express = require('express'),
    router  = express.Router();

var Wbinfo = require('../models/wbinfo.js');

// get count of all documents in collection
router.get('/count', function(req, res) {
	Wbinfo.count(function(err, count) {
		res.send(count.toString());
	});
});

// get all region names excluding duplicates
router.get('/uniqueRegions', function(req, res) {
	Wbinfo.distinct('region', function(err, info) {
		res.send(info);
	});
});

// only get regions that match the region name sent through in the uri
router.get('/byName/:name', function(req, res) {
	Wbinfo.find({ region: req.params.name }, function(err, info) {
		res.send(info);
	});
});

// index of all records for testing after seeding (redirected from seed route)
// or to get ids for cURL operations
router.get('/', function(req, res) {
	Wbinfo.find(function(err, data) {
		res.send(data);
	});
});

// create record
router.post('/', function(req, res) {
	Wbinfo.create(req.body, function(err, info) {
    if ( err ) { console.log (err , 'ther is an error'); }
    console.log( info , req.body)
		res.send(info);
	});
});

//extra: update route

router.put ( '/:id' , function ( req , res ){

  Wbinfo.findByIdAndUpdate (req.params.id, req.body , { new: true } , function ( err , info ){
    if ( err ) { console.log ( 'this is the error', err ); } else {
      res.json( info );
    }
  });
});

//extra: delete route

router.delete ( '/:id' , function ( req , res ){
  Wbinfo.findByIdAndRemove (req.params.id , function ( err , info ){
    if ( err ) {  res.send(err); } else {
      res.json( info );}

  });
});

module.exports = router;
