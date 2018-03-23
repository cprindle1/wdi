// var Person = function(initialName){
//     //private methods/variables
//     // var age = 36;
//
//     //public methods/variables
//     var name = initialName;
//     this.sayHello = function(){
//         console.log("Hello, I'm " + name);
//     }
//     // this.name = initialName;
//     // this.eyes = "";
//     // this.sayHello = function(){
//     //     console.log("Hello, I'm " + this.name);
//     // };
//     // this.getAge = function(){
//     //     return age;
//     // };
//     // this.age = function(){
//     //     age++;
//     // };
// };
// Person.eyeColors = ['Blue','Green', 'Brown'];

// var me = new Person("matt");
// var bob = new Person("robert");
//
// me.eyes = Person.eyeColors[1];
//
// console.log(me);
// console.log(bob);
// me.sayHello();
// bob.sayHello();


// bob.sayHello();
// console.log(bob.getAge());
// bob.age();
// console.log(bob.getAge());


// var Person = function(initialName){
// 	var name = initialName;
// 	this.sayHello = function(){
// 		console.log(name);
// 	}
// };
//
// var SuperHero = function(initialName, power){
//     Person.call(this, initialName);
//     this.sayHello = function(){
//         console.log("Up and Atom!");
//     };
//     this.power = power;
// };
//
// var superman = new SuperHero("Superman", "fly");
//
// superman.sayHello();
// console.log(superman);

// var Car = function(serialNumber){
//     this.serialNumber = serialNumber;
//     this.drive = function(){
//         console.log("Vroom");
//     }
// };
//
// var factory = {
//     cars:[],
//     generateCar: function(){
//         var newCar = new Car(this.cars.length);
//         this.cars.push(newCar);
//     }
// }
//
// factory.generateCar();
// factory.generateCar();
//
// console.log(factory);


var Car = function(maker, serialNumber){
    this.maker = maker;
    this.serialNumber = serialNumber;
    this.drive = function(){
        console.log("Vroom");
    }
};

var Factory = function(company){
    this.company = company;
    this.cars = [];
    this.generateCar = function(){
        var newCar = new Car(this.company, this.cars.length);
        this.cars.push(newCar);
    }
}

var bmw = new Factory('BMW');
bmw.generateCar();

console.log(bmw);
