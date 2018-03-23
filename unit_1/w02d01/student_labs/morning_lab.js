var me={};

me.name="Charlie";
me.age=36;
me.email="prindle_charles@bah.com";

console.log(me.name);
me.age=1000;
console.log(me.age);
me['place of residence']="Chantilly";
console.log(me['place of residence']);


var obj = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(obj.name);
obj.type="creature";
console.log(obj.type);
obj.age=6;
console.log(obj.age);
console.log(obj);

var adventurer = {}
adventurer.name="charlie";
adventurer.hitpoints=1000;
adventurer.damage=20;

var ogre={};
ogre.name="ugly";
ogre.hitpoints=200;
ogre.damage=10;

while(ogre.hitpoints>0 && adventurer.hitpoints>0){
  adventurer.hitpoints-=ogre.damage;
  ogre.hitpoints-=adventurer.damage;
}

console.log(adventurer);
console.log(ogre);

var cat1={name:"heather", age:32, breed:"girl"};

console.log(cat1.age);
console.log(cat1.breed);

var cat2={name:"charlie", age:36, breed:"boy"};

var combineCats = function(cat1, cat2){
  var newcat={}
  newcat.name=cat1.name+cat2.name;
  newcat.age=1;
  newcat.breed=cat1.breed+"-"+cat2.breed;
  return newcat;
}

console.log(combineCats(combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2)),combineCats(cat1, cat2)));

console.log(combineCats(combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2)),combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2))));

var user={};
user.name="Charlie Prindle";
user.age=36;
user.email="prindle_charles@bah.com";
user.purchased=["Speakers", "TV", "phone case"];

user.email="charlie.prindle@gmail.com";
user.age++;
user.location="Chantilly, VA";
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[user.purchased.length-1]);

user.friend = {name: "Grace Hopper", age: 85, location: "Burke, VA", purchased: []};

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age=55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

for(var i=0; i<user.purchased.length; i++){
  console.log(user.purchased[i]);
}
for(var i=0; i<user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i]);
}

var updateUser = function(){
  user.age++;
  user.name=user.name.toUpperCase();
}

updateUser();
console.log(user);

var getFactorial = function(num, product){
  if(num==1){
    return(product);
  }else{
    product*=num;
  }
  return(getFactorial((num-1), product));
}

console.log(getFactorial(5,1));

//loop to find fibonacci sequence
var printFib = function(max){
  var fib1=0, fib2=1, fib3;

  while(fib1<max){
    fib3=fib1
    console.log(fib1);
    fib1=fib1+fib2;
    fib2=fib3;
  }

}
printFib(100);

//recursive fibonacci solution
var recFib = function(max, fib1, fib2){
  if(fib1<max){
    console.log(fib1);
    recFib(max, fib2, fib1+fib2);
  }
}

recFib(100,0,1);
