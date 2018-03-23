var express = require('express');
var router = express.Router();
var Products = require('../models/products.js');


router.get('/new', function(req, res){
  res.render('new.ejs');
});

router.get('/', function(req, res){
  Products.find({}, function(error, allProducts){
    res.render('index.ejs', {products: allProducts
    });
  });
});

router.put('/buy/:id/', function(req, res){
  Products.findById(req.params.id, function(error, product){
    console.log(product.qty-1);
    product.qty=product.qty-1;
    Products.findByIdAndUpdate(req.params.id, product, {new: true}, function(err, updatedModel){
        res.redirect('/products');
    });
    });
});

router.post('/', function(req, res){
  Products.create(req.body, function(){
    res.redirect('/products');
  });
});

router.post('/', function(req, res){
    Products.create(req.body, function(){
        res.redirect('/products');
    });
});

router.get('/:id/edit', function(req, res){
    Products.findById(req.params.id, function(err, product){ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			products: product //pass in found fruit
    		}
    	);
    });
});

router.put('/:id', function(req, res){
    console.log(req.body);
    req.body.qty=parseInt(req.body.qty);
    req.body.price=parseInt(req.body.price);
    Products.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedModel){
        res.redirect('/products');
    });
  });

router.delete('/:id', function(req, res){
    Products.findByIdAndRemove(req.params.id, function(err, data){
        res.redirect('/products');
    });
  });

router.get('/:id', function(req, res){
  Products.findById(req.params.id, function(error, product){
    console.log(req.params.id);
    res.render('show.ejs', {products: product});
  });
});

router.get('/seed/newproducts', function(req, res) {

	var newProducts = [
		{
			name: "Beans",
			description: "A small pile of beans. Buy more beans for a big pile of beans.",
	        img: "https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2",
			price: 5,
			qty: 99
		}, {
			name: "Bones",
			description: "It's just a bag of bones.",
    	    img: "http://bluelips.com/prod_images_large/bones1.jpg",
			price: 25,
			qty: 0
	  }, {
			name: "Bins",
			description: "A stack of colorful bins for your beans and bones.",
    	    img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
			price: 7000,
			qty: 1
	  }
	];

	Products.create(newProducts, function(err) {
    console.log(newProducts);
		  console.log("SEED: NEW PRODUCTS CREATED!");
		  res.redirect('/products');
	});

});

module.exports = router;
