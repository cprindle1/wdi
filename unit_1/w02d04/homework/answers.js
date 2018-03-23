//Constructor Function
//1. Create a constructor function for a Pet

var Pet = function(petName){
  this.owner;
  this.name=petName;
}

var dog = new Pet("Fido");
console.log(dog.name);

//2. Create a constructor function for a Dog
var Dog = function(petName){
  Pet.call(this, petName);
  var price = 20;
  this.bark = function(){
    console.log("bark")
  }
  this.chaseTail = function(){
    console.log("oh boy oh boy oh boy");
  }
  this.getPrice = function(){
    return price;
  }
}

var pug=new Dog("Spot");
console.log(pug.getPrice());
pug.bark();
pug.chaseTail();
console.log(pug.name);

//3. Create a constructor function for a Create
var Cat = function(petName){
  Pet.call(this, petName);
  var price = 10;
  this.purr = function(){
    console.log("purrrr")
  }
  this.clean = function(){
    console.log("cleaning");
  }
  this.getPrice = function(){
    return price;
  }
}
var siamese=new Cat("grumpy");
console.log(siamese.getPrice());
siamese.purr();
siamese.clean();
console.log(siamese.name);

//4. Creat a constructor function for a person

var Person = function(initName){
  var name = initName;
  var age = 0;
  var weight = 0;
  var mood = 0;
  var pets = [];
  var bankAccount = 0;
  this.getName = function(){
    return name;
  }
  this.getAge = function(){
    return age;
  }
  this.getWeight = function(){
    return weight;
  }
  this.greet = function(){
    console.log("Hello, "+name+" nice to meet you");
  }
  this.eat = function(){
    weight++;
    mood++;
  }
  this.exercise = function(){
    weight--;
  }
  this.age = function(){
    age++;
    weight++;
    mood--;
    bankAccount+=10;
  }
  this.buyPet = function(pet){
    pets.push(pet);
    mood+=10;
    bankAccount-=pet.getPrice();
    console.log("Congrats!, You bought "+pet.name+" for "+pet.getPrice()+".  You now have "+bankAccount+" money left.");
  }
  this.repeater = function(iterations, func){
    for(var i=0; i<iterations; i++){
      func();
    }
  }
}

var me = new Person("Charlie");
console.log(me.getName());
console.log(me.getAge());
console.log(me.getWeight());
me.greet();
me.eat();
me.exercise();
me.age();
me.buyPet(pug);
console.log(me.getName());
console.log(me.getAge());
console.log(me.getWeight());

//Creating a story
var guy = new Person("Timmy");
guy.repeater(5,guy.age);//to run class functions several times
console.log(guy.getAge());
guy.repeater(5,guy.eat);
console.log(guy.getWeight());
guy.repeater(5,guy.exercise);
console.log(guy.getWeight());
guy.repeater(9,guy.age);
var collie = new Dog("Lassie");
collie.owner=guy.getName();
console.log(collie.owner);
guy.buyPet(collie);
guy.repeater(9,guy.age);
var feline=new Cat("Scratchy");
feline.owner=guy.getName();
console.log(feline.owner);
guy.buyPet(feline);
guy.repeater(4,guy.age);
guy.repeater(2,guy.eat);
guy.repeater(2,guy.exercise);

//Factories
var Shoe = function(serial){
  this.serial = serial;
}

var Factory = {
  shoes:[],
  makeShoe: function(){
    var newShoe = new Shoe(this.shoes.length);
    this.shoes.push(newShoe);
    return newShoe;
  }
}
Factory.makeShoe();
Factory.makeShoe();
console.log(Factory);
console.log(Factory.shoes[0]);

var Coat = function(maker, serial){
  this.maker=maker;
  this.serial=serial;
}
var CoatFactory = function(maker){
  this.name=maker;
  this.coats = [];
  this.makeCoats = function(){
    var newCoat = new Coat(maker, this.coats.length);
    this.coats.push(newCoat);
    return newCoat;
  }
  this.getCoats=function(){
    return this.coats;
  }
}

var UA= new CoatFactory("Under Armor");
var N= new CoatFactory("Nike");
UA.makeCoats();
N.makeCoats();

console.log(UA.coats);
console.log(N.coats);
