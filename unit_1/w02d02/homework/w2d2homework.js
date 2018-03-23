//Combine objects, arrays, and functions
//
//1. Create an object that has a property that is an array. Log one of the elements of that array.
var myObject = {myArray: ['item1', 'item2', 'item3']};
console.log(myObject.myArray[0]);
//2. Create an object that has a property that is an object. Log one of the properties of that inner object.
var myName = {allNames:{firstName: "Charles", middleName: "Brian", lastName: "Prindle"}};
console.log(myName.allNames.lastName);
//3. Create an object that has a property that is a function (method). Call that method.
var saySomething = {greet: function(){return ("hi")}};
console.log(saySomething.greet());
//4.Create an array that has an object in it. Log one of the properties of that object.
var arrayOfNames = [{firstName: "Charles", middleName: "Brian", lastName: "Prindle"}, 0, "Random text"];
console.log(arrayOfNames[0].middleName);
//5. Create an array that has an array as one of its elements. Log one of the elements of the inner array.
var ticTacToe = [["X", "O", "-"], ["X", "O", "-"], ["O", "X", "-"]];
console.log(ticTacToe[2][0]);
//6. Create an array that has a function as one of its elements. Call that function.
var arrayOfFunctions = [function(){return 0}, function(){return 1}, function(){return 2}];
console.log(arrayOfFunctions[2]());
//7. Create an object that has a property that is an array. Loop over the array and log each individual element.
var numbers = {integers: [1,2,3,4,5,6]};
for(var i=0; i<numbers.integers.length; i++){
  console.log(numbers.integers[i]);
}
//8. Create an array that has an array as one of its elements. Loop over the second array and log each individual element.
var ticTacToe = [["X", "O", "-"], ["X", "O", "-"], ["O", "X", "-"]];
for(var i=0; i<ticTacToe[0].length; i++){
  console.log(ticTacToe[0][i]);
}
//8 - Bonus: make each element of the outer array an array as well. Using two for loops, loop over each array in the outer array and log those elements.
var ticTacToe = [["X", "O", "-"], ["X", "O", "-"], ["O", "X", "-"]];
for(var i=0; i<ticTacToe.length; i++){
  for(var j=0; j<ticTacToe[i].length; j++){
    console.log(ticTacToe[i][j]);
  }
}
//Combine objects, arrays, and functions more than one level deep
//
//1. Create a function that returns an object. Log a property of that object (hint: call the function and then call a property on the return value).
var objFunction = function(){
  return numbers = {first: 1, second: 2, third: 3};
}
console.log(objFunction().second);
//2. Create a function that returns an array. Log an element of the array.
var arrFunction = function(){
  return numbers = [1,2,3];
}
console.log(arrFunction()[1]);
//3. Create a function that returns an object that has an array. Log one of the elements of that array.
var objArrFunction = function(){
  return obj={objArray:["one","two","three"]};
}
console.log(objArrFunction().objArray[2]);
//4. Create a function that returns an object that has an object. Log one of the properties of the inner object.
var objObjFunction = function(){
  return obj={inObj:{prop1: "hi", prop2: "hello", prop3: "bonjour"}};
}
console.log(objObjFunction().inObj.prop3);
//5. Create a function that returns an object that has a method. Call that inner function (method).
var methodFunc = function(){
    return methodObj = {objFunc:function(){return "method of an object"}};
}
console.log(methodFunc().objFunc());
//6. Create a function that returns a function. Call that inner function
var funception = function(){
  return function(){return 1+1};
}
console.log(funception()());
//7. Create an object that has a method that returns an object. Log a property of the inner object.
var objMethObj = {objMeth: function(){return inInObject = {in: "property of an object returned by a method of an object"}}};
console.log(objMethObj.objMeth().in);
//8. Create an object that has a method that returns an object that has an array. Log an element of that array.
var objMethObjArr = {objMethArr: function(){return objArr={arr:[7,8,9,10,11]}}};
console.log(objMethObjArr.objMethArr().arr[4]);
//9. Create an object that has a method that returns an object that has an object. Log a property of the inner object.
var objMethObjObj = {methObjObj: function(){return obj={obj:{letters:"ABCDEFG"}}}};
console.log(objMethObjObj.methObjObj().obj.letters);
//10. Create an object that has a method that returns an object that has another method. Call the inner method.
var objMethObjMeth = {methObjMeth: function(){return objMeth={meth: function(){return "You made it!"}}}};
console.log(objMethObjMeth.methObjMeth().meth());
//11. Create an object that has a method that returns a function. Call that function.
var objMethMeth = {methMeth: function(){return function(){return "Object with a method that returns a method"}}};
console.log(objMethMeth.methMeth()());
//12. Create an array that has a function that returns an object. Log a property of the object.
var arrFuncObj = [function(){return obj={number1: 100, number2: 200, number3: 300}}];
console.log(arrFuncObj[0]().number2);
//13. Create an array that has a function that returns an object that has an array. Log an element of the inner array.
var arrFuncObjArr = [function(){return objArr={array: ["a","b","c"]}}];
console.log(arrFuncObjArr[0]().array[2]);
//14. Create an array that has a function that returns an object that has an object. Log a property of the inner object.
var arrFuncObjObj = [function(){return objObj={obj:{innerProp: "Property of inner object"}}}];
console.log(arrFuncObjObj[0]().obj.innerProp);
//15. Create an array that has a function that returns an object that has a method. Call that method.
var arrFuncObjMeth = [function(){return objMeth={meth: function(){return "secret"}}}];
console.log(arrFuncObjMeth[0]().meth());
//16. Create an array that has a function that returns a function. Call the inner function.
var arrFuncFunc = [function(){return function(){return "funception in an array"}}];
console.log(arrFuncFunc[0]()());
//Create a callback
//
//1.Define two functions and set them to variables
var functionOne = function(){

}
var functionTwo = function(){

}
//2. The second function takes a parameter
var functionOne = function(){

}
var functionTwo = function(parameter){

}
//3.Call the second function, passing in the variable that references the first function as the parameter
var functionOne = function(){
  console.log("Function One!");
}
var functionTwo = function(parameter){
  parameter();
}
functionTwo(functionOne);
//Indentation
//
if(true){
  var a = 2 + 2;
  console.log(a);
}

if(true){
  if(false){
    console.log('hi');
  }
}
//Semantic naming of variables
var numStored = ['1', 4, 7, [1,3,4]];
//Function definition placement
var bar = function(){
    console.log('bar here');
}
var foo = function(){
    console.log('foo here');
}
bar();
foo();
//Commenting code
//
//a function to create a sentance string with the name and age of a person
var describePerson = function(name, age){//function definition - name and age are passed as parameters
    var finalString = name + " is " + age + " years old.";//create the sentance
    console.log();//does nothing - might log finalString at some point
}
//Error reading
// foo();
//
// var foo function(){
//     console.log('hi');
// }
//unexpected token error at function() - an = is expected when declaring a variables

//Using the Javascript Debugger
//done in chrome

//Coerce data types
var b = '5'

if(parseInt(b) === 5){ //will be false
    console.log('this line should execute');
}
//adding line so I can commit 16
