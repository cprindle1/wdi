var Pet = function(name){
    this.name = name;
    this.owner = "";
}

var Dog = function(name){
    Pet.call(this, name);
    var price = 20;
    this.bark = function(){
        console.log("bark");
    }
    this.chaseTail = function(){
        console.log('oh boy oh boy oh boy');
    }
    this.getPrice = function(){
        return price;
    }
}

var Cat = function(name){
    Pet.call(this, name);
    var price = 10;
    this.purr = function(){
        console.log('purrrrr');
    }
    this.clean = function(){
        console.log('cleaning');
    }
    this.getPrice = function(){
        return price;
    }
}

var Person = function(initialName){
    var name = initialName;
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
        console.log('My name is ' + name);
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
        height++;
        weight++;
        mood--;
        bankAccount+=10;
    }
    this.buyPet = function(pet){
        pets.push(pet);
        bankAccount -= pet.getPrice();
    }
}

var timmy = new Person('Timmy');
for (var i = 0; i < 5; i++) {
    timmy.age();
}
for (var i = 0; i < 5; i++) {
    timmy.eat();
}
for (var i = 0; i < 5; i++) {
    timmy.exercise();
}
for (var i = 0; i < 9; i++) {
    timmy.age();
}
var lassie = new Dog('Lassie');
lassie.owner = timmy.getName();
timmy.buyPet(lassie);
for (var i = 0; i < 9; i++) {
    timmy.age();
}
var scratchy = new Cat('Scratchy');
scratchy.owner = timmy.getName();
timmy.buyPet(scratchy);
for (var i = 0; i < 4; i++) {
    timmy.age();
}
for (var i = 0; i < 2; i++) {
    timmy.eat();
}
for (var i = 0; i < 2; i++) {
    timmy.exercise();
}

// Factories section

var Shoe = function(serialNumber){
	this.serialNumber = serialNumber;
}
var factory = {
	shoes: [],
	generateShoe: function(){
		var newShoe = new Shoe(this.shoes.length);
		this.shoes.push(newShoe);
		return newShoe;
	}
}

var Coat = function(maker, serialNumber){
	this.maker = maker
	this.serialNumber = serialNumber;
}
var CoatFactory = function(company){
	this.coats = [];
	this.generateCoat = function(){
		var newCoat = new Coat(company, this.coats.length);
		this.coats.push(newCoat);
		return newCoat;
	};
}
