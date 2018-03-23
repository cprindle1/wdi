// 1. Require your node modules
var mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
var Vampire = require('./models/vampires.js');
var vampiresImport = require('./models/populateVampires.js');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/monsters');

// 4. Open your mongoose connection
var db = mongoose.connection;
db.once('open', function(){
  console.log('I have connected to mongod!');
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampiresImport,
//   function(err, data) {
//     console.log("added provided vampire data")
//     // mongoose.connection.close();
//   });

// ### Add some new vampire data
  // Vampire.create({
  //   name: 'Kevin',
  //   hair_color: 'black',
  //   eye_color: 'brown',
  //   dob: 'August 20, 1567',
  //   loves: ['bananas', 'bosses'],
  //   location: 'England',
  //   gender: 'm',
  //   victims: '5'
  // });
  // Vampire.create({
  //   name: 'Bob',
  //   hair_color: 'black',
  //   eye_color: 'brown and green',
  //   dob: 'December 20, 1567',
  //   loves: ['bananas', 'bosses', 'teddy bears'],
  //   location: 'England',
  //   gender: 'm',
  //   victims: '7'
  // });
  // Vampire.create({
  //   name: 'Scarlett',
  //   hair_color: 'black',
  //   eye_color: 'brown',
  //   dob: 'January 30, 1967',
  //   loves: ['rubies', 'missles'],
  //   location: 'England',
  //   gender: 'f',
  //   victims: '9'
  // });
  // Vampire.create({
  //   name: 'Heather',
  //   hair_color: 'blonde',
  //   eye_color: 'brown',
  //   dob: 'September 7, 1984',
  //   loves: ['dessert', 'TV'],
  //   location: 'USA',
  //   gender: 'f',
  //   victims: '3'
  // });


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
  // Vampire.find(
  //   {gender: 'f'}, function(error, vampire){
  //     console.log(vampire);
  //   });
  // Vampire.find(
  //   {victims: {$gt: 500}}, function(error, vampire){
  //     console.log(vampire);
  //   });
  // Vampire.find(
  //   {victims: {$lte: 150}}, function(error, vampire){
  //     console.log(vampire);
  //   });
  // Vampire.find(
  //   {victims: {$ne: 500}}, function(error, vampire){
  //     console.log(vampire);
  //   });
  // Vampire.find(
  //   {victims: {$gt: 150, $lt: 500}}, function(error, vampire){
  //     console.log(vampire);
  //   });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find(
//   {title: {$exists: true}}, function(error, vampire){
//       console.log(vampire);
//   });
  // Vampire.find(
  //   {victims: {$exists: false}}, function(error, vampire){
  //       console.log(vampire);
  //   });
  // Vampire.find(
  //   { victims: {$exists: false}, title: {$exists: true}}, function(error, vampire){
  //       console.log(vampire);
  //   });
  // Vampire.find(
  //   {victims: {$exists: true}, victims: {$gt: 1000}}, function(error, vampire){
  //       console.log(vampire);
  //   });
// /////////////////////////////////////////////////
// ### Select with OR
// Vampire.find(
//   {$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find(
//   {$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find(
//   {$or: [{loves: 'marshmallows'}, {victims: {$gt: 1000}}]}, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find(
//   {$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, function(error, vampire){
//       console.log(vampire);
//   });
/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find(
//   {$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]}, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find({loves: 'brooding'}, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.find(
//   {$or: [{loves: 'appearing innocent'}, {loves: 'trickery'}, {loves: 'lurking in rotting mansions'}, {loves: 'R&B music'}]}, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find({
//   loves: {$in: ['fancy cloaks'], $nin: ['top hats'], $nin: ['virgin blood']}}, function(error, vampire){
//       console.log(vampire);
//   });
/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({
//   loves: {$in: ['ribbons']},
//   eye_color: {$ne: 'brown'}
// }, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find({
//   location: {$ne: 'Rome, Italy'}
// }, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find({
//   loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}
// }, function(error, vampire){
//       console.log(vampire);
//   });
// Vampire.find({
//   victims: {$lt: 200}
// }, function(error, vampire){
//       console.log(vampire);
//   });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// Vampire.replaceOne({name: 'Claudia'}, {name: 'Eve',  portrayed_by: 'Tilda Swinton'}, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.replaceOne({gender: 'm'}, {name: 'Guy Man',  is_actually: 'were-lizard'}, function(error, vampire){
//   console.log(vampire);
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Vampire.update({name: 'Guy Man'}, {$set: {gender: 'm'}}, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.update({name: 'Eve'}, {$set: {gender: 'f'}}, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.update({name: 'Guy Man'}, {$set: {hates: ['clothes', 'jobs']}}, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.update(
//   {name: 'Guy Man'},
//   {$push: {hates: { $each: ['alarm clocks', 'jackelopes']}}},
//   function(error, vampire){
//   console.log(vampire);
// });
// Vampire.update({name: 'Eve'}, {$set: {name: 'moniker'}}, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.updateMany({gender: 'f'}, {$set: {gender: 'fems'}}, function(error, vampire){
//   console.log(vampire);
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// Vampire.findOneAndRemove({hair_color: 'brown'}, true, function(error, vampire){
//   console.log(vampire);
// });
// Vampire.remove({eye_color: 'blue'}, function(error, vampire){
//   console.log(vampire);
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
});
