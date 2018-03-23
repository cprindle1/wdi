// var foo = {
//     someArray: [1,2,3]
// };
//
// console.log(foo.someArray[0]);

// var person = {
//     age: 36,
//     greet: function(){
//             console.log('hello');
//     }
// }
//
// person.greet();

// var groceryList = [
//     {
//         name:'pear',
//         color:'green'
//     },
//     {
//         name:'banana',
//         color:'yellow'
//     },
//     {
//         name:'apple',
//         color:'red'
//     }
// ];
// groceryList.push({name:'shampoo', color:'green'});
// console.log(groceryList[3].color);

// var someArray = [
//     1,
//     true,
//     "my string",
//     ["bar", "apple", 3.5]
// ];
//
// console.log(someArray[3][1]);

// var foo = [
//     1,
//     'hi',
//     function(){
//         console.log('fun');
//     }
// ];
//
// foo[2]();


// var groceryList = {
//     assignee: 'kids',
//     date: 'now',
//     items: ['apples', 'pears', 'bananas']
// };
//
// for (var i = 0; i < groceryList.items.length; i++) {
//     console.log(groceryList.items[i]);
// }

// var someArray = [
//     1,
//     true,
//     "my string",
//     ["bar", "apple", 3.5]
// ];
//
// for (var i = 0; i < someArray[3].length; i++) {
//     console.log(someArray[3][i]);
// }


// var matrix = [
//     ['0,0', '0,1', '0,2'],
//     ['1,0', '1,1', '1,2'],
//     ['2,0', '2,1', '2,2']
// ]
// //outerArrayIndex = 3
// //innerArrayIndex = 3
//
// for (var outerArrayIndex = 0; outerArrayIndex < matrix.length; outerArrayIndex++) {
//     for (var innerArrayIndex = 0; innerArrayIndex < matrix[outerArrayIndex].length; innerArrayIndex++) {
//         console.log(matrix[outerArrayIndex][innerArrayIndex]);
//     }
// }


// var foo = function(){
//     return {
//         someProperty: 'hi!'
//     }
// };
//
// console.log(foo().someProperty);

// var foo = function(){
//     return ['apple', 'pear', 'banana'];
// }
//
// console.log(foo()[1]);


// var generateList = function(){
//     return {
//         assignee: 'kids',
//         when: 'now',
//         items: ['apple', 'pear', 'banana']
//     };
// };
//
// console.log(generateList().items[1]);

// var generateHuman = function(){
//     return {
//         features: {
//             age: 36
//         }
//     }
// }
//
// console.log(generateHuman().features.age);

// var generateHuman = function(){
//     return {
//         greet: function(){
//             console.log('hi!');
//         }
//     }
// }
//
// generateHuman().greet();

// var generateFunction = function(){
//     return function(){
//         console.log('whaaaa?');
//     };
// }
//
// generateFunction()();

// var human = {
//     generateHuman: function(){
//         return {
//             eyeColor: 'blue'
//         }
//     }
// }
//
// var child = human.generateHuman();
// console.log(child.eyeColor);

// var foo = {
//     someMethod: function(){
//         return {
//             someArray: ['peach', 'apple', 'pear']
//         }
//     }
// }
//
// console.log(foo.someMethod().someArray[1]);

// var foo = {
//     someMethod: function(){
//         return {
//             someObject: {
//                 someProperty: 'some value'
//             }
//         }
//     }
// }
//
// console.log(foo.someMethod().someObject.someProperty);
//
// var foo = {
//     generateObject: function(){
//         return {
//             greet: function(){
//                 console.log('hi');
//             }
//         }
//     }
// }
//
// foo.generateObject().greet();
//
// var foo = {
//     someMethod: function(){
//         return function(){
//             console.log('hi');
//         }
//     }
// };
//
// foo.someMethod()();
// var cousinVinny = function(){
//     console.log("Youts");
// }
// var monaLisa = function(){
//     console.log("That's a trick question!");
// }
// var billGambini = function(callback){
//     console.log("Help!  I'm in jail!");
//     callback("Bill");
//     console.log("Thanks, helper!");
// }
// var stanRothenstein = function(callback){
//     console.log("I'm not the cousin");
//     callback("Stan")
// }
// // stanRothenstein(cousinVinny)
// billGambini(cousinVinny);
//
// billGambini(function(){
//     console.log('Tire tracks');
// });


// setTimeout(function(){
//     var a = 2+2;
//     console.log(a);
// }, 2000);

// //good
// if(true){
//     var a = 2 + 2;
//     console.log(a);
// }
//
// //bad
// if(true){
//     var a = 2 + 2;
//     console.log(a);
// }
//
// //bad
// if(true){
//     if(true){
//         var a = 2 + 2;
//         console.log(a);
//     }
// }

// var a = 1 + 2 + 3;
// var sumOfThreeNumbers = 1 + 3 + 4;
// var foo = function(){
//     console.log("foo");
// }
// var bar = function(){
//     console.log('bar');
// }
//
// foo();
// bar();

// //defining describePerson function
// //params name(string) age(int)
// //returns nothing
// //summary: logs an english string consisting of the person's name and hold old they are
// var describePerson(name, age){
//     var finalString = name + "is " + age + " years old."; //create the string from the parameters
//     console.log(finalString); //log the final string
// }

// bar();
//
// var bar = function(){
//     console.log('fun');
// }

// var a = 2 + 2;
// debugger;
// a *= 3;
// a--;
// debugger;
// console.log('hi');
// console.log(a);

// var a = 1;
//
// if(a === '1'){
//     console.log('should not run');
// }

console.log(5 + parseInt('$5'));
