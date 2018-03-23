![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIr-HOPPER

---
Title: More JS <br>
Type: Optional topic<br>
Creator: Thom Page <br>
Competencies: Basic JS<br>
Topics: IIFE, Immutability, Closures, context, prototypes, benchmarking

---

<br>

# IIFE

One problem when dealing with huge tracts of code is namespacing and polluting the global scope.

```javascript
var App = function() {
  console.log('some cool library of code');
}

App();
```

Here the variable App has been namespaced in the global scope, which could lead to potential conflicts down the road.

Another issue is that we had to call App explicitly to get it to run.

You can effectively box off a piece of code into an **Immediately Invoked Function Expression** that protects the global scope, _and_ just runs automatically.

```javascript
(function() {

  var App = 'some cool library of code';
  console.log(App);

})();
```

You can pass the **IIFE** arguments like a regular function:


```javascript
(function( incomingMessage ) {

  var App = 'some cool library of code';
  console.log(App);
  console.log(incomingMessage);

})("This is a message");
```

```javascript
(function( callback ) {

  var App = 'some cool library of code';
  console.log(App);
  callback();

})( function() { console.log('no-name function here') } );
```


**Practical application** separate Angular namespacing from other parts of the app:

```javascript
(function() {

	const app = angular.module('MyApp', []);
	
	app.controller('MainController', ['$http', function($http) {
	
	  this.APIResult = null;
	
	  $http.get('http://www.omdbapi.com/?t=rogue+one')
	   .then(result => this.APIResult = result.data);
	
	}]);
	
})();

const app = "Something other than Angular: no conflicts"

```

<br>

# Closures

**Concept**

JavaScript's scoping works by inner functions having **closure** over outer functions.

You can think of the inner function **closing over** the outer function and thereby having access to variables declared in that outer function.

```javascript
const outerFunction = () => {

  const value = 1;

  const innerFunction = () => {
    console.log(value);
  }

}
```

The inner function has access to `value` because it **encloses** `outerFunction`

The inner function will permanently hold on to the values in the outer function **even after the outer function has been executed.**

We can see closure at work like so. Make the outer function return a _reference_ to the inner function:

```javascript
const outerFunction = () => {

  const value = 1;

  const innerFunction = () => {
    console.log(value);
  }

  return innerFunction;

}
```

Save an **invoked version** of the outer function to a variable, and then invoke the referenced inner function:

```javascript
const myProcess = outerFunction(); // save an invoked outer function

myProcess(); // run it (invoking the referenced inner function)
```

> 1

Here, we are running the inner function, and instead of getting back nothing (expected because the outer function has already done its business), we are getting back a value from the outer function.

Provide a value to the closure. The function will 'hold on' to the value.

```javascript
const DoMath = (originalNum) => {

  const num1 = originalNum;

  const multiplyNum = (num2) => {
    console.log(num1 * num2);
  }

  return multiplyNum;

}

const MathBox1 = DoMath(99);
MathBox1(2); // always operates on 99
MathBox1(834); // always operates on 99

// Make a new module
const MathBox2 = DoMath(Infinity);
MathBox2(2); // always operates on Infinity
MathBox2(834); // always operates on Infinity
```


Use a closure to provide 'default values' say, to a new user.

```javascript
const UserDefault = () => {

  const defaultName = "Inigo Montoya";
  const defaultMovie = "The Princess Bride";
  const defaultAge = 30;

  const printUserInfo = (name, movie, age) => {
    console.log(name || defaultName);
    console.log(movie || defaultMovie);
    console.log(age || defaultAge);
  }

  return printUserInfo;

}

const newUser1 = UserDefault();
const newUser2 = UserDefault();

newUser1("Dan Rather", "Real life", 85);     // Dan Rather, Real life, 85 
newUser2();                                  // Inigo Montoya, The Princess Bride, 30
```

It's a little bit like making an object constructor function, but we can return other functions.


#  Module pattern

A module uses the same closure pattern, but returns an object with references to the enclosing functions. This object is called a 'revealing object' -- you could also call it a public API - with publicly exposed methods as opposed to the private methods not available to the user of the API.

The object we return does not have references to our inner data variables.







#  Making a library


# .call, .bind, and arrow functions

function scope depends on how it is called
ES6 arrow functions

# Prototypes

constructors

has_own_property


# Immutability



reference

Arrays

* .concat
* .slice
* .map
* .filter
* .reduce

Objects

* .assign (ES6)

`const` mutability



# Benchmarking

`benchmark.js`