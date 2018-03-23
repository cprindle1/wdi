// var Person = function(name){
//   this.name=name;
//   var age=36;
//   this.sayHello=function(){
//     console.log("Hello, I'm "+this.name)
//   }
//   this.getAge = function(){
//     return age;
//   }
//   this.birthday = function(){
//     age++;
//   }
//   this.eyeColor="";
// }
//
// Person.eyeColors=['blue','green','brown'];
// var me = new Person("Matt");
// var bob = new Person("Bob");
// me.eyeColor = Person.eyeColors[1];
// bob.name="Robert";
// console.log(me);
// console.log(bob);
// bob.sayHello();
// console.log(bob.getAge());
// bob.birthday();
// console.log(bob.getAge());


// var Person = function(initialName){
//   var name = initialName;
//   this.sayHello=function(){
//     console.log(name);
//   }
// }
// var SuperHero = function(initialName, power){
//   Person.call(this, initialName);
//   this.power=power;
//   this.sayHello = function(){
//     console.log("Up and Atom!");
//   }
// }
//
// var superMan = new SuperHero("superman", "fly");
//
// superMan.sayHello();
// console.log(superMan);


var Car = function(maker, serialNumber){
  this.maker=maker;
  this.serialNumber=serialNumber;
  this.drive = function(){
    console.log("Vroom");
  }
};
var Factory=function(company){
  this.company=company;
  this.cars=[];
  this.generateCar = function(){
    var newCar= new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
}
var bmw = new Factory('BMW');
bmw.generateCar();

console.log(bmw);
