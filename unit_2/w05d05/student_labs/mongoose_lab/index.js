var mongoose = require('mongoose');
var Company = require('./company.js');

mongoose.connect('mongodb://localhost:27017/company');

var db = mongoose.connection;
db.once('open', function(){
  console.log('I have connected to mongod!');

//   Company.create({
//     name: 'Apple',
//     founded: 'April 1, 1976',
//     employees: 2,
//     active: false,
//     products:['computers'],
//     CEO:{name: 'Steve Jobs', age: 21}
//   }, function(error, company){
//       console.log(error);
//       console.log(company);
//   }
// );
//   Company.create({
//     name: 'Google',
//     founded: 'September 4, 1998',
//     employees: 57100,
//     active: true,
//     products:['search', 'maps', 'email'],
//     CEO:{name: 'Larry Page', age: 43}
//   }, function(error, company){
//       console.log(error);
//       console.log(company);
//   });
  // Company.update(
  //   {name: 'Apple'},
  //   {
  //     $set: {
  //       name: 'Apple Inc',
  //       employees: 66000,
  //       active: true,
  //       products: ['computers', 'phones', 'tablets'],
  //       CEO:{name: 'Tim Cook', age: 56}
  //     }
  //   },
  //   {multi: true},
  //   function(err, response){
  //     console.log("updated");
  //     console.log(response);
  //   });
    // Company.find(
    //   {name: 'Apple Inc'}, function(error, company){
    //     console.log('Apple');
    //     console.log(company[0].employees);
    //   });
    //   Company.find(
    //     {name: 'Google'}, function(error, company){
    //       console.log('Google');
    //       console.log(company[0].employees);
    //     });
    Company.remove(
      {name: 'Apple Inc'},
      function(err, response){
        console.log(response);
      }
    );
    Company.remove(
      {name: 'Google'},
      function(err, response){
        console.log(response);
      }
    );
});
