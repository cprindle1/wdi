// console.log("tamagotchi.js is connected");
// var tamagotchi1 = {
//   name: "Simon",
//   creatureType: "Dragon",
//   foodInTummy: 10,
//   restedness: 10,
//   health: 10,
//   cry: function() {
//     this.foodInTummy--;
//     console.log("WAAAH!!!!!!");
//     console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
//   },
//   puke: function(){
//     this.health--;
//     console.log("Blleeehhhhh!!");
//     console.log(this.name + ' has current health level: ' + this.health);
//   },
//   yawn: function() {
//     this.restedness--;
//     console.log("Yaaawwwwwn!!!!!!");
//     console.log(this.name + ' has current restedness level: ' + this.restedness);
//   },
//   start: function(){
//     var self = this;
//     var hungerTimer = setInterval(function(){
//       if(self.foodInTummy==0){
//         console.log(self.name+" died of starvation");
//         self.stopTime();
//       }else{
//         self.cry();
//       }
//     },6000);
//
//     var yawnTimer = setInterval(function(){
//       if(self.restedness==0){
//         console.log(self.name+" died of lack of sleep");
//         self.stopTime();
//       }else{
//         self.yawn();
//       }
//     },10000);
//
//     var sickTimer = setInterval(function(){
//       if(self.health==0){
//         console.log(self.name+" died of illness");
//         self.stopTime();
//       }else{
//         self.puke()
//       }
//     },25000);
//
//   },
//   stopTime: function(){
//     console.log("stopping time");
//     clearInterval(this.hungerTimer);
//     clearInterval(this.yawnTimer);
//     clearInterval(this.sickTimer);
//   }
// }
// var player={
//   name: "Neo",
//   feedTamagatchi: function(food){
//     tamagotchi1.foodInTummy++;
//     console.log("Yum! " + tamagotchi1.name + " has been fed "+food+" and now has "+ tamagotchi1.foodInTummy);
//   },
//   medicateTamagatchi: function(meds){
//     tamagotchi1.health++;
//     console.log(tamagotchi1.name + " has been medicated with "+meds+" and now has "+ tamagotchi1.foodInTummy+" health");
//   },
//   knockOutTamagatchi: function(){
//     tamagotchi1.restedness++;
//     console.log(tamagotchi1.name + " has been put to sleep and now has "+ tamagotchi1.foodInTummy+" restedness");
//   }
// }
// player.feedTamagatchi("sprigs");
// player.medicateTamagatchi("tylenol");
// player.knockOutTamagatchi();



// tamagotchi1.start();
// var tamagotchi2 = {
// name: "Helga",
//   cry: function() {
//     this.foodInTummy--;
//     console.log("WAAAH!!!!!!");
//     console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
//   }
// }

// tamagotchi1.puke();
// tamagotchi1.yawn();
// tamagotchi1.cry();
// tamagotchi2.cry();

// var number = [1,2,3,4];
// var newNumbers=[];
// for(var i=0; i<number.length; i++){
//   newNumbers[i]=number[i]*2;
// }
// console.log(newNumbers);



// var number=[1,2,3,4];
// var newNumbers=number.map(function(num){return num*2}).map(function(num){return num+1});
// console.log(newNumbers);

var numbers = [1,2,3,4];
// var oddNumbers = numbers.filter(function(num){return num%2!=0}).map(function(num){return num*2});
// console.log(oddNumbers);

// var sum = numbers.reduce(function(a,b){return a+b},10);
// console.log(sum);

numbers.forEach(function(num){console.log(num);});
