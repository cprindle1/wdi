![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Hopper

<hr>
Title: w1d4 morning lab<br>
Creator: Thom Page<br>
Topics: Functions<br>
<hr>

## Morning Lab

### printGreeting

Write a function called `printGreeting` that has a string as an argument and returns a greeting with the argument **interpolated** into the greeting.

```
console.log(printGreeting("Slimer"));
```

> => Hello there, Slimer!


<br>
<hr>

### reverseWord

Write a function `reverseWord` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

```
console.log(reverseWord("Ishmael me Call"));
```

> => "Call me Ishmael"


```
console.log(reverseWord("I use Lâncome on my comb"));
```

> => "comb my on Lâncome use I"


<br>
<hr>

### calculate

Write a function called `calculate`.

This function should take three arguments, two numbers and a string.

Name the parameters `num1`, `num2`, and `operation`. 

If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

```
console.log(calculate(4, 3, "sub"));

=> 1
```

```
console.log(calculate(4, 3, "exp"));

=> 64
```

<br>
<hr>

### pandigital numbers

A number of length n is _1-to-n pandigital_ if it makes use of all the digits 1 to n exactly once.

- The number `15234` is _1-to-n pandigital_.

- The number `333` is **not** _1-to-n pandigital_.

- The number `0` is **not** _1-to-n pandigital_.

- The number `987654321` is _1-to-n pandigital_. 


Write a function that checks if a number is _1-to-n pandigital_.