// Write the answers to your lab in this file.

// Remember to run each one in the terminal to check that they are correct `node morning_lab_solutions.js`.

// Comment out the code once it is correct!
//1. var variable = "value";
//2. variable = "new value";
//3. var newVariable = variable;
var firstVariable = "Hello World";
firstVariable = 5;
var secondVariable = firstVariable;
secondVariable = "String Value";
console.log(firstVariable);

var yourName = "Charlie";
var newString = "Hello, my name is "+yourName;
console.log(newString);

var a = 4;
var b = 53;
var c = 57;
var d = 16;
var e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name'=='Name');
console.log(a+b==c);
console.log(a*a==d);
console.log(e=='Kevin');
console.log(48=='48');

var animal = "cow";
animal = "pig";
if (animal == "cow"){
  console.log("mooooo");
}else {
  console.log("Hey! You're not a cow.")
}

var age =36;
if (age >= 16){
  console.log("Here are the keys");
}else {
  console.log("Sorry, you're too young.")
}

for(var i =0; i<=100; i++){
  console.log(i);
}
for(var i =10; i<=4000; i++){
  console.log(i);
}
for(var i =10; i<=4000; i+=2){
  console.log(i);
}
for(var i =1; i<=100; i++){
  if(i%2==0){
    console.log(i+" is an even number");
  }
}
for(var i =0; i<=100; i++){
  if(i%5==0){
    console.log("I found a "+i+". High five!");
  }else if(i%3==0){
    console.log("I found a "+i+". Three is a crowd");
  }
}
var bank_account=0;
for(var i=1; i<=10; i++){
  bank_account+=i;
}
console.log(bank_account);

var bank_account2=0;
for(var i=1; i<=100; i++){
  bank_account2+=(i*2);
}
console.log(bank_account2);

var sum=0;
for(var i=0; i<1000; i++){
  if(i%3==0 || i%5==0){
    sum+=i;
  }
}
console.log(sum);
