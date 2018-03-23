console.log('app.js is connected');

//psuedo code

//Actors
//USS Schwarz
  //object
  //might have an object method that can attack something. This object does something- it attacks.
    //firepower 5 - alien hull = uss win

//Alien
  //one alien is an object
  //might have an object method that does some attacking.
    //

  //loop- continue until either the USS Schawrz hull is at 0, or alien ship's hull is at 0. (else if)? Test this out with just one alien.


  //Later.....
  //Aliens - an array of objects for multiple aliens?
    //all different.. ? constructor


//=============================================================

// USS Schwarz object
// var ussSchawrz = {
//   hull: 20,
//   firepower: 5,
//   accuracy: 0.7,
//   damage: function(){
//     this.hull=-4;
//     console.log('%c You have been hit!', 'color:red; font-size: 20px' + this.hull);
//   },
//   attack: function(){
//     alien1.hull=-5;
//     console.log('%c You have hit the alien ship!', 'color:green; font-size: 20px' + alien1.hull);
//   }
// };

// Human ship Constructor function (blueprint)
var Humanship = function(hull, firepower, accuracy){
  this.hull = hull;
  this.firepower = firepower;
  this.accuracy = accuracy;
};
var currentHull = 20;
var currentFirepower = 5;
var currentAccuracy = 0.7;
var ussSchawrz = new Humanship(currentHull, currentFirepower, currentAccuracy); //new USS ship

console.log(ussSchawrz);
// console.log(ussSchawrz.hull);
// console.log(ussSchawrz.firepower);



//Alien Constructor function
var Alien = function(hull, firepower, accuracy){
  this.hull = hull;
  this.firepower = firepower;
  this.accuracy = accuracy;

};
var currentHull = 6; //63-65 can change these values using math random.
var currentFirepower = 4;
var currentAccuracy = 0.6;
var alien2 = new Alien(currentHull, currentFirepower, currentAccuracy);// new alien ship

// console.log(alien2);
// console.log(alien2.hull);
// console.log(alien2.firepower);

//Battling
var battle = alien2.hull - ussSchawrz.firepower ;
alien2.hull = battle;
// console.log(battle);
// console.log(alien2.hull);
// ussSchawrz.damage();
