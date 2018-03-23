console.log('#');

var img = $('#first-img');
// var img = document.querySelector('#first-img');

// console.log(img);

var sections = $('.info');

console.log(sections);

// var sections = document.querySelectorAll('.info');

var newElem = $('<div>');
console.log(newElem);

newElem.text('the square of the hypotenuse is equal to the sum of the squares of the other two sides');

$('body').append(newElem);

newElem.css('color','red');
