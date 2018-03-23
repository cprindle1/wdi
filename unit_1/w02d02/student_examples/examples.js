// var foo = {
//   someArray: [1,2,3]
// };
//
// console.log(foo.someArray[0]);

// var person = {
//   age: 36,
//   greet: function(){
//     console.log('hello');
//   }
// }
//
// person.greet();

// var groceryList=[{name:'pear', color:'green'}, {name:'banana', color:'yellow'},{name:'apple', color:'red'}];
//
// console.log(groceryList[1].color);

// var someArray=[1, true, "my string", ["bar", "apple", 3.5]];
//
// console.log(someArray);

// var foo = [
//   1,
//   'hi',
//   function(){
//     console.log('fun');
//     return "yay";
//   }
// ]
//
// console.log(foo[2]());
// var groceryList = {
//   assignee: 'kids',
//   date: 'now',
//   items: ['apples', 'pears', 'bananas']
// };
//
// console.log(groceryList.assignee);
//
// for(var i=0; i<groceryList.items.length; i++){
//   console.log(groceryList.items[i]);
// }
//
// for(var key in groceryList.items){
//   console.log(groceryList.items[key]);
// }

// var matrix=[
//   ['0,0', '0,1', '0,2'],
//   ['1,0', '1,1', '1,2'],
//   ['2,0', '2,1', '2,2']
// ];
//
// for(var i=0; i<matrix.length; i++){
//   for(var j=0; j<matrix[i].length; j++){
//     console.log(matrix[i][j]);
//   }
// }
//
// var foo = function(){
//   return{someproperty: 'hi'}
// }
// console.log(foo.someproperty);

// var generateList = function(){
//   return{
//     assignee: 'kids',
//     when: 'now',
//     items: ['apple', 'pear', 'banana']
//   };
// };
// console.log(generateList().items[1]);

// var foo = function(){
//   return{
//     someObject:{
//       someProperty: 'some value'
//     }
//   }
// }
// console.log(foo());
// var generateHuman = function(){
//   return{
//       greet: function(){
//         console.log('hi');
//       }
//     }
//   }
// generateHuman().greet();

// var generateFunction = function(){
//   return function(){
//         console.log('hi');
//       };
//     }
//
// generateFunction()();

// var human = {
//   generateHuman: function(){
//     return{
//       eyecolor: 'blue'
//     }
//   }
// }
// console.log(human.generateHuman().eyecolor);


// var human = {
//   generateHuman: function(){
//     return{
//       kids: ['kid1', 'kid2', 'kid3']
//     }
//   }
// }
//
// console.log(human.generateHuman().kids[1]);

// var cousinVinny = function(){
//   console.log("Youts");
// }
// var monaLisa = function(){
//   console.log("That's a trick question");
// }
// var billGambini = function(param1){
//     console.log("Help! I'm in jail!");
//     param1();
//     console.log("Thanks, Vinny!");
// }
// billGambini(monaLisa);
var a = 2+2;
debugger;
a*=3;
a--;
console.log('hi');
console.log(a);
