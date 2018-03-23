![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Capturing Input from the Browser<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan<br>
Topics: Capturing input from the browser with jQuery<br>
<hr>

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

- capture input from the browser with click events
- display capture input to the browser

### SETUP (10 mins)

In the `student_examples` directory for today, `unit_1/w03d03/student_examples` :

* Make a _directory_ called `capturing_input`
* Inside the `capturing_input` directory, make three files: `index.html`, `app.js`, and `style.css`
* Link them together with a script tag in your HTML file`
* Add a jQuery script tag
* Write a console.log into `app.js`
* Load the `index.html` into your browser
* Check in the developer console that the console.log appears and that the files are linked together
* Confirm that your style sheet is attached by changing the background of the body.

<br>
<hr>

## CAPTURING INPUT

&#x1F535; **Walkthrough / Code Along (10 min)**

Let's set up a click event that captures some input from our user. When the user clicks (and only after they have clicked), we can get the contents of the input box with `.val`.

index.html
Make an input field and a button

```
<form>
    <input type="text" placeholder="enter your name" id="input-box"/>
</form>
    <button type="submit">SUBMIT</button>
```

app.js

```
$(function() {
  var $inputBox = $('#input-box');
  console.log($inputBox);

  var $inputButton = $('#input-button');
  console.log($inputButton);

  $inputButton.on('click', function() {
  	  console.log('Hi! Your name is: ' + $inputBox.val());
  });

})
```

&#x1F535; **Activity (10 min)**

* Make an input box and a button. The input should ask for the user's favorite TV show
* When you click the button, make it so that a message appears on the page: "Hi! Your favorite show is: _show name from input_"

&#x1F535; **Extra Activity**

* Instead of a TV show name, ask the user to input the url for an image that they like
* When the user clicks the submit button, add an `img` to the page and set the `src` attribute to the input value. Get the image to show on the page.

<br>
<hr>



**How can we display the input into our browser?**

index.html
Make an element that will **display** the input.

```
<p id="output"></p>

```

app.js

```
$(function() {
  var $inputBox = $('#input-box');

  var $outputBox = $('#output');

  var $inputButton = $('#input-button');

  $inputButton.on('click', function() {
  	  $outputBox.html($inputBox.val());
  });

})
```

### Create the element that will display the text dynamically

If you don't want the element to be hiding in your DOM before it's needed, create it dynamically through JS once the input has been submitted.

app.js

```
$(function() {
  var $inputBox = $('#input-box');

  var $inputButton = $('#input-button');

  $inputButton.on('click', function() {
    var $outputBox = $("<p id='output'></p>);
    $outputBox.html($inputBox.val());
    $('body').append('$outputBox');
  });

})
```

&#x1F535; **Ask**

* When can you see wanting to dynamically create elements as input is added versus hardcoding the HTML elements?

<br>
<hr>

### Reset your input field

jQuery has a built-in method called 'reset' that we can run to clear out the input field and reset the placeholder. To use it, capture the form element and use the following syntax:

```
$('form').trigger('reset');
```

## Let's Build a Static Trello Board!

![trello](https://i.imgur.com/iNhPGLY.png)

This is an example of a Trello board that I've used to track my health & fitness. Let's create one of our own! The only difference being, we won't put in the drag and drop functionality - ours will stay static.

### SETUP (10 mins)

In the `student_examples` directory for today, `unit_1/w03d03/student_examples` :

* Make a _directory_ called `static_trello`
* Inside the `static_trello` directory, make three files: `index.html`, `app.js`, and `style.css`
* Link them together with a script tag in your HTML file`
* Add a jQuery script tag
* Write a console.log into `app.js`
* Load the `index.html` into your browser
* Check in the developer console that the console.log appears and that the files are linked together
* Confirm that your style sheet is attached by changing the background of the body.

## Lists

Let's focus on making a list (the grey portion of the board) in the HTML. This  list will eventually hold our cards.

## Title

We'll hard-code a title onto each of our lists, but could think about dynamically adding these later.

## Set your card to take input & add a card

Let's create an input box where we can write the text for our card. When we click "Add", it should create a card in our list. If there's time, we can think about how we can adjust this to look more trello-like.


## A little bit of style

Let's add a little bit of CSS to make our board look more professional.

<br>
<hr>
License
<hr>
