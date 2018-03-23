![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-HOPPER

---
Title: To-Do List <br>
Type: Lab<br>
Duration: "3:00 - 4:00"<br>
Creator: Thom Page for WDI-Meeseeks<br>
    Modified by: Kristyn Bryan<br>
    Course: WDIR-Hopper<br>
Competencies: jQuery, Javascript, DOM <br>

---

# WHAT TO DO ?

![todo](https://i.imgur.com/usMkA4g.png)


## To-Do List
Build a To-Do list app with two columns: one for things to do, and another for things that have been done. Use jQuery to give your app functionality.

### User Stories
Your user should be able to:

* Enter a 'todo' item in the input box, and click the 'add' button to have the todo item render in the to-do-list column.

* Click on a button within the to-do-item to move that item over to a 'completed' column.

* Click that same button to remove the todo item from the page.

## Commits

- Make sure to commit after each block of code that you create. Give an appropriate comment.

## Starter code
To get straight to jQuery, use the starter code and fill in the javascript.

We've provided you with some simple styling to make it easier for you to get started.

##### In the starter code:
1. the user should see two columns and an input field.
2. the user should be able to type a to-do item into an input box.
3. the user should be able to click an `add` button next to this input.

NOTE: if you want a challenge, feel free to start from scratch!

## Stuff for you to do:


## PART ONE

Setup your project. You will be provided starter code, and apart from adding jQuery to your index.html, you will be writing only in the javascript file. Again, if you're up for a challenge, feel free to start from scratch.

1. Open the starter code in your text editor in `student_labs/to_do_starter`

2. Complete this assignment using jQuery.

Add the jQuery library to your project. Go to `https://code.jquery.com/` and copy the url of a minified jQuery. Use this url in a script tag _before_ your application script in your `index.html`. Alternatively, go to `https://cdnjs.com/` and search for jQuery.

3. Include any code that affects the DOM inside a **window onload**. jQuery has a shorthand for window onload:

```
$(function() {

	// DOM stuff

})
```

Try it out.

Remember the general flow of what is happening. The user makes an action, you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

## PART TWO
When the user clicks the `add` button, the input box value should be added to his/her to-do list.

Strategies:

* grab the input box from the DOM with jQuery and save it to a variable
* grab the submit button from the DOM with jquery and save it to a variable
* add an event listener to the button, and include an event handler that sends a console.log when the user clicks the button (to make sure the click is working)
* grab the input value within the event handler and console.log it when the user clicks the button
* grab the to-do-list column from the DOM with jQuery
* append the value of the input to the to-do-list column


## PART THREE
When the user clicks the `add` button, the input should display nicely rather than just text that keeps joining on the same line.

**Change the code in your event handler to:**

* consider adding the new information into an array of to-dos an display all of the items in that array.
* create a `div` (this will be a container for the specific to-do item) and save it to a variable
* give the div a class `to-do-item`
* create a `p` (this will go inside the div and will contain the text) and save it to a variable
* append the `p` to the new `div`
* append the `div` to the todo item container

**The user should be able to see all of the todos that they have created.**

## PART FOUR

The user should be able to click 'done' on a todo and have it move to the completed column.

* When you create the todo item, add a button that says 'COMPLETED' to it that has an event listener and handler. Yes! You can include an event listener inside another event handler . . .

_Hint:_ When you are creating the button you can include the text `var btn = $('<button>COMPLETED</button>');`

* The handler on this new button should append the todo item to the completed column:

* To isolate the particular to-do-list item on which the user clicked the 'COMPLETED' button, use the keyword `$(this)`, and the jQuery method `.parent()`. _HINT:_ the to-do-list item is the parent of the 'COMPLETED' button.

* When the button 'COMPLETED' is clicked, set the background color of the target to-do-item to `#ED6495`



# Hungry for More

## Delete

**You'll have to research this!**

The user should be able to delete a to-do item from the completed list.

* The text of the 'COMPLETED' button should change to 'REMOVE'
* When `$(this)` button is clicked, it should be removed from the DOM  


## Local Storage - Super Super Bonus
The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

## Lab
Finish your calculator's from this morning's lab.

<hr>


# JQUERY COMMANDS

- window.onload

```
$(function() {
	// code inside jQuery window onload
})
```

- this: `$(this)`

- create element: `$('<div>')`, `$('<p>')`, etc.

- select all elements of type: `$('div')`, `$('p')`, etc.

- ^^ The two commands above are very similar but they do completely different things!

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element: `jQueryElement.addClass('className')`

- get the parent of an element: `jQueryElement.parent()`

- get child elements: `jQueryElement.children()`

- set an event listener: `jQueryElement.on('click', function() {} )`

- click listener: `jQueryElement.click( function() {} )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( jQueryElement )`

- prepend elements: `jQueryElement.prepend( jQueryElement )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hasClass('someClass')`

- remove a class from an element: `jQueryElement.removeClass('someClass');`

- set a css property on an element: `jQueryElement.css('property', 'value')`

- clone an element: `jQueryElement.clone()`

- append an element with the order reversed: `jQueryElement.appendTo( jQueryElement )`

- get a specific jQuery element from a list: `jQueryCollection.eq( indexNum )`
