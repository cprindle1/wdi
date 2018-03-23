![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Color palette picker with jQuery<br>
Type: Build<br>
Duration: 1 hr<br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan<br>
Topics: jQuery, loops, event listeners<br>
<hr>

# COLOR PALETTE PICKER

We are going to start building a color palette picker.

* In the left column, we will generate 150 divs (squares) each with their own random color.

* When we click one of the squares, we will add a square with the same color to the left column.

<br>
<hr>


&#x1F535; **Directions**

`git pull upstream master` to get the starter code

Open up `palette_picker_starter` within `unit_1/w03d04/student_examples`


- Add jQuery library

- Add window onload and console.log

```
$(function() {
	console.log('hi - jQuery is working for palette picker');
})
```

Grab DOM elements:

![](https://i.imgur.com/1tqORco.png)

![](https://i.imgur.com/MVLxx0R.png)

- Write a function `makePalette` that will generate 150 squares with the class 'square' and append them to the `color-palette` div


- Make it so each square will have a random color

![](https://i.imgur.com/K6nAxW0.png)

![](https://i.imgur.com/PBscMxl.png)


- Remove red div outlines

![](https://i.imgur.com/AX50GkX.png)

- Add an event listener to the `generate` button that will run the `makePalette` function

- Make it so the `makePalette` function will empty the previous palette of squares

![](https://i.imgur.com/wKGie9t.png)


- Give each square an event listener whose `addColor` handler will (eventually) add the chosen square to the right column:

![](https://i.imgur.com/NwpLSC3.png)

- Make the `addColor` handler.
- First, it should console.log the background color of the square that was clicked:

![](https://i.imgur.com/JyK3g5g.png)

- The `addColor` function should:

	* Make a new square
	* Give it a class of 'square'
	* Give it the clicked square's background color
	* Append to the 'my palette' right div

![](https://i.imgur.com/OpBUMSo.png)
