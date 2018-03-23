![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Hopper

<hr>
Title: w01d04 homework<br>
Type: Homework<br>
Creator: Thom Page<br>
Topics: Control Flow<br>
<hr>

# Setup

in the `w01d04/homework` folder, create file `solutions.js`. Write your answers in this file.

<br>

# Control Flow

Answer the following questions as comments in your js file:

1. What are the three forms of **control flow** that we use to control the flow of our programs? What does each form of control flow do to the code inside the **block**? Give an example of each.

2. What is the difference between a **parameter** and an **argument**?

3. Within a function, what is the difference between **return** and **console.log**?

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 1 - Answered the verbal questions".
<hr>

<br>
<hr>

# Palindrome

Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

```
console.log(checkPalindrome("Radar"));
 
 => true
```

```
console.log(checkPalindrome("Borscht"));

=> false
```
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 2 - Palindrome".
<hr>
<br>
<hr>

# Digit Sum

Write a function `sumDigits` that accepts a number and returns the sum of its digits.


```
console.log(sumDigits(42));
```

> => 6;

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 3 - Digit Sum".
<hr>
<br>
<hr>

# Prime Numbers

A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).

To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

### Step One

Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

_Hint:_ Check every number up to the square root. To do this, try a _for loop_.


### Step Two

Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.

This function can **call on** the previous `checkPrime` function.
</details>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 4 - Prime Numbers".
<hr>

<br>
<hr>


# Insert Dash

Write a function `insertDash` that accepts a number as a parameter and returns the parameter with a dash inserted between any consecutive **odd numbers**.

```
console.log(insertDash(454793));
```

> => 4547-9-3

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 5 - Insert Dash".
<hr>
<br>
<hr>


# Pythagoras

Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.
  
_hint:_ discover the Pythagorean Theorem on a website called google.com  

_hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript


```
console.log(calculateSide(8, 6));

=> 10
```
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 6 - Pythagoras".
<hr>
<br>
<hr>

# Sum Array

Write a function `sumArray` that takes an **array** as an argument.

The array should contain numbers. The function should return the sum of the numbers in the array.

Use a _for loop_ within the function to iterate over the array and sum the contents.

Use a variable such as 

```
var sum = 0;
```

that will **accumulate** value within the loop.

<br>

Expected result:

```
console.log(sumArray([1, 2, 3, 4, 5, 6]);
```

> => 21

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 7 - Sum Array".
<hr>
<br>
<hr>

# CSS

Watch the following three videos on CSS:

[First CSS video - 5 minutes](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[Second CSS video - 11 minutes](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[Third CSS video - 17 minutes](https://www.youtube.com/watch?v=g0Aq2kP5-CY&index=5&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

You will need to have watched these videos for tomorrow's lab.

<br>
<hr>

# Hungry For More

* Finish the [morning lab](https://github.com/ga-students/wdi-remote-hopper/blob/master/unit_1/w01d04/student_labs/w1d4_morning_lab.md) 
* Finish the [afternoon lab](https://github.com/ga-students/wdi-remote-hopper/blob/master/unit_1/w01d04/student_labs/w1d4_afternoon_lab.md)
* Read through the later sections of the [afternoon lesson markdown](https://github.com/ga-students/wdi-remote-hopper/blob/master/unit_1/w01d04/instructor_notes/w1d4_afternoon_lesson.md), starting with **EXTRA STUFF** (you do not have to submit answers to the exercises)

<br>
<hr>
