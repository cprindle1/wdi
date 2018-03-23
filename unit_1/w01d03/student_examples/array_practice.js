// console.log('My array_practice file is running!');
// var arr=[];
// var favFoods=["pizza", "burgers", "burritos"];
// console.log(favFoods);
 // var ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];
 // console.log(ghostBusters1984[2]);
 // console.log(ghostBusters1984.length);

// var drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
//
// for(var i=0; i<drSeuss.length; i++){
//   console.log(drSeuss[i]);
// }
// for(var i=1; i<drSeuss.length; i+=2){
//     console.log(drSeuss[i]);
// }
// for(var i=1; i<drSeuss.length; i+=2){
//     console.log(drSeuss[i]);
//     console.log(i);
// }
// var looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
// for(var i=0; i<looneyTunesChars.length; i++){
//   if(i%2==0){
//     console.log(looneyTunesChars[i]);
//   }
// }
//
// for(var i=0; i<looneyTunesChars.length; i++){
//   if(i%2==0 || i==3){
//     console.log(looneyTunesChars[i]);
//   }
// }
//
// for(var i=0; i<looneyTunesChars.length; i++){
//   if(i%2!=0){
//     console.log(looneyTunesChars[i]);
//   }
// }
// var numbers = [21, 18, 5, 3, 2, 1, 1];
// numbers[2]=null;
// console.log(numbers);
// numbers[0]*=10;
// console.log(numbers);
// var shows = ["The Simpsons", "Seinfeld"];
// shows.push("The 100");
// var sortedShows=shows;
// sortedShows.sort();
// console.log(sortedShows);
// console.log(shows);
// sortedShows.push("Colony");
// reveresedShows=sortedShows;
// reveresedShows.reverse();
// console.log(reveresedShows);
// reveresedShows.pop();
// console.log(reveresedShows);
// reveresedShows.shift();
// console.log(reveresedShows);
// reveresedShows.unshift("Mr. Robot");
// console.log(reveresedShows);
// var slicedArray=reveresedShows.slice(0,2);
// console.log(slicedArray);
// slicedArray.splice(0,2);
// console.log(slicedArray);
//
// var runDMC = ["Run", "DMC", "Jam Master Jay"];
//
// console.log(runDMC[runDMC.length-1]);
// console.log(runDMC[Math.round(Math.random()*(runDMC.length-1))]);
var whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"],["Petunia", "Baked Goods", "Waldo"]];
console.log(whereIsWaldo[3][2]);
console.log(whereIsWaldo[2][1]);
console.log(whereIsWaldo[3]);
whereIsWaldo[3][1]="No One";
console.log(whereIsWaldo[3]);
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
