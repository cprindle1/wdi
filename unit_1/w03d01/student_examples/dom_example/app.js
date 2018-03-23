// var img = $('#first-img');
// console.log(img);
//
// var newDiv=$('<div>');
// $('body').append(newDiv);
//
// var newP=$('<p>');
// newP.addClass('text-class');
//
// newDiv.append(newP);
//
// newDiv.css('color', 'red');
//
// newP.attr('id','test-id');

var $section = $('<section>').addClass('info');
$section.append($('<p>Text!</p>'));
var $thirdImg = $('<img>');
$thirdImg.attr('src', 'http://www.calgary.ca/CSPS/ABS/PublishingImages/2010-1155_00013525_10790.jpg');
$thirdImg.attr('id', 'third-img');
$section.css('background-color', 'firebrick');
$('.info').css('color', 'white');
$section.append($thirdImg);
$('body').append($section);
// var cont = document.querySelector('#container');
// console.log(cont);
//
// var secImg = document.querySelector("#second-img");
// console.log(secImg);
//
// var infoElem = document.querySelectorAll(".info");
// console.log(infoElem);
//
// var firstP = document.querySelector("p");
// console.log(firstP);
//
// firstP.innerText="I have modified this";
//
// var addedDiv = document.createElement('div');
//
// document.body.appendChild(addedDiv);
//
// var firstImg = document.querySelector("#first-img");
// console.log(firstImg);
// var newElem = document.createElement('div');
// firstImg.appendChild(newElem);
//
// var imgElem = document.createElement('img');
// imgElem.src="https://www.what-dog.net/Images/faces2/scroll0015.jpg";
// document.body.appendChild(imgElem);
//
// var newElem2 = document.createElement('div');
// newElem2.id= "newID";
// document.body.appendChild(newElem2);
//
// var sections = document.querySelector('section');
// var sectionClasses = sections.classList;
// console.log(sectionClasses);
//
// var addClass = document.querySelector('section');
// addClass.classList.add('wdi-remote-hopper');
// console.log(addClass.classList);
//
// var firstSec = document.querySelector('section');
// var sectionClasses = firstSec.classList;
// console.log(sectionClasses.contains('wdi-remote-hopper'));
//
// var foundDiv = document.querySelector('section');
// foundDiv.classList.remove('wdi-remote-hopper');
//
// var parent = document.querySelector('section');
// var child = document.querySelector('p');
// parent.removeChild(child);
//
// var allSec = document.querySelectorAll('section');
// for(var i=0; i<allSec.length; i++){
//   allSec[i].innerText="This text has taken over";
// }
