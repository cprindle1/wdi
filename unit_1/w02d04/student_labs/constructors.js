var Person = function(initialName){
  var name = initialName;
  this.setName = function(initialName){
      name=initialName;
  }
  this.getName = function(){
    return name;
  }
}
var Artist = function(initialName){
  Person.call(this, initialName);
}
var Painter = function(initialName){
  Artist.call(this, initialName);
}

var waterColor = new Painter("Picaso");

console.log(waterColor.getName());


// var Pet = function(initialName){
//   var name=initialName;
//   this.setName = function(initialName){
//     name=initialName;
//   }
//   this.getName = function(){
//     return name;
//   }
// }


// var Dog = function(initialName){
//   Pet.call(this, initialName);
// }

// var pug = new Dog("Spot");

// var me = new Person();
// me.setName("Charlie");
// console.log(me.getName());
//
// console.log(painter.getName());
// console.log(pug.getName());
//
//
// var Robot = function(brand, serialNumber){
//   this.brand=brand;
//   this.serialNumber = serialNumber;
//
// }
//
// var Factory = function(brand){
//   this.robots = [];
//   this.buildRobot = function(){
//     var newRobot = new Robot(brand, this.robots.length);
//     this.robots.push(newRobot);
//     return newRobot;
//   }
// }
//
// var honda = new Factory("Honda");
// honda.buildRobot();
//
// console.log(honda.robots[0].serialNumber);
// console.log(honda.robots[0].brand);
//
