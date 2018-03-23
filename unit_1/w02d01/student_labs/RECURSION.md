# RECURSION



## What's recursion?

- A function that calls **itself** is a recursive function. It will keep calling itself in a loop.

- A recursive function needs a **condition** by which it will
**exit**. Otherwise it will run indefinitely and destroy your computer from the inside out, forever.

- A recursive function needs to pass its parameters to the next invocation without those parameters being reset, unless you want them to be. 

### NOTES
Here's an example of a recursive function that prints numbers from an arbitrary input down to 1:

``` 
var countdown = function(num) {
	
	// 1. exit condition
	if (num === 1) { return }

	// 2. some kinda process
	console.log(num);
	num -= 1;

	// 3. call the function from within itself
	return countdown(num);
		
}; // end of function


countdown(10);
```

In the above example, the operation on `num` could also be passed in the call argument:

```

var countdown = function(num) {
	
	// 1. exit condition
	if (num === 1) { return }

	// 2. some kinda process
	console.log(num);
	
	// 3. call the function from within itself
	return countdown(num - 1);
		
}; // end of function


countdown(10);
```



1. Copy, paste, and run the `countdown` function. 

<br>
<hr>

## RECURSIVE FACTORIAL FUNCTION

> In mathematics, the factorial of a non-negative integer n is the product of all positive integers less than or equal to n.


The factorial of 5 is 120:

5 x 4 x 3 x 2 x 1 = **120**


The factorial of 4 is 24:

4 x 3 x 2 x 1 = **24**

- You are going to write a recusive function that returns the factorial of a given number.

2. Using `countdown` as a template, write a **recursive function** `getFactorial` that **returns** the factorial of a given number. Refrain from using **for loops** for this exercise.

### Note:
In the `getFactorial` function, you will want the product to be increased each time the function runs, not reset. So, you might not want to define `product = 1` within your function. You might want to set the product as an initial condition for when you call the function:

```
var getFactorial = function(num, product) {
	
	// 1. exit condition
	
	// 2. stuff
	
	// 3. call fac

}

fac(5, 1);
```

Finding the factorial of 5, invoking the function with an initial product of 1:
`fac(5, 1);`  

There is also a way to solve this **with a single argument** (just the number, not the intial product). See if you can find it.

<br>
<hr>


## RECURSIVE FIBONACCI SEQUENCE
  

The Fibonacci Sequence is the series of numbers:
  
> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  
The next number is found by adding up the two numbers before it. So, the
next number is 21 + 34 = 55.
  
> The 2 is found by adding the two numbers before it (1+1)
> Similarly, the 3 is found by adding the two numbers before it (1+2),
> And the 5 is (2+3),
> and so on . . .


Some people think that it's too difficult to introduce recursion with the Fibonnaci sequence, and I agree, so let's do it!

Recursion is just a loop, you can even think of it as a while loop for now. A recursive method has an **exit condition** first and foremost, and then a **call to itself** that makes it loop.

*First*, write a function that is _not recursive_ that prints out the Fibonacci sequence up to the number given as the argument.

```
getFibonacci(100)
```

Prints all the Fibonacci numbers up to 100.

Pseudo-code how you would go about printing Fibonnaci numbers up to 100 to the console using a **recursive** method.

Write a recursive function that prints the Fibonacci sequence up to an arbitary input limit.

Also, refer to Project Euler problem 2 for some extra twists:

`https://projecteuler.net/problem=2`

<br>
<hr>
<hr>
















