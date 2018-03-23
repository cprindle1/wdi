console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");

// ==============================
//       Dramatis Personae
// ==============================

var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

var baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

var lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
var makeMiddleEarth = function() {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  var $sec = $('<section>').attr('id','middle-earth');
  console.log($sec);
  // 2. append the section to the body of the DOM.
  $('body').append($sec);
  // 3. use a for loop to iterate over the lands array that does the following:
  for(var i = 0; i < lands.length; i++){
    var $art = $('<article>').attr('id', lands[i]);
    $art.html('<h1>'+lands[i]+'</h1>');
    $sec.append($art);
  }
  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
var makeHobbits = function() {

  console.log('Make hobbits');
  $ul=$('<ul>')
  for(var i=0; i<hobbits.length; i++){
    $li=$('<li>').addClass('hobbit').text(hobbits[i]);
    $ul.append($li);
  }
  $('#The-Shire').append($ul);
  // 1. display an unordered list of the hobbits in the shire.

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
var keepItSecretKeepItSafe = function() {

  // 1. create an empty div with an id of 'the-ring'
  var $emptDiv = $('<div>').attr('id', 'the-ring');
  // 2. add the ring as a child of Frodo
  var hobbitClass=$('.hobbit');
  hobbitClass.eq(0).append($emptDiv);

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
var makeBaddies = function() {

  console.log('Make baddies');
  $ul=$('<ul>')
  for(var i=0; i<baddies.length; i++){
    $li=$('<li>').addClass('baddy').text(baddies[i]);
    $ul.append($li);
  }
  $('#Mordor').append($ul);
  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
var makeBuddies = function() {
  // 1. create an aside tag and append it to middle-earth below mordor

  // 2. display an unordered list of buddies in the aside
  $aside = $('<aside>');
  $ul=$('<ul>')
  for(var i=0; i<buddies.length; i++){
    $li=$('<li>').addClass('buddy').text(buddies[i]);
    $ul.append($li);
  }
  $aside.append($ul);
  $('#middle-earth').append($aside);
  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
var leaveTheShire = function() {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  var $leavingHobbits=$('#The-Shire').children();
  console.log($leavingHobbits[1]);
  $leavingHobbits.eq(1).remove();
  $('#Rivendell').append($leavingHobbits.eq(1));
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
var beautifulStranger = function() {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
    var $findBuddy = $('.buddy');
    console.log($findBuddy);
    $findBuddy.eq(3).text("Aragorn");
    // $buddy.text('Aragorn');
  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
var forgeTheFellowShip = function() {

  // 1. create a new div with an id 'the-fellowship'
  var $newDiv = $('<div>').attr("id", "the-fellowship");
  // 2. add an h1 with the text 'The Fellowship' to this new div
  $newDiv.append("<h1>The Fellowship</h1>");
  // 3. append the fellowship to middle-earth
  $('#middle-earth').append($newDiv);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  var $findBuddies = $('.buddy');
  var $findHobbits = $('.hobbit');
  $newDiv.append($findHobbits);
  $newDiv.append($findBuddies);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
var theBalrog = function() {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  var $findBuddies = $('.buddy');
  $findBuddies.eq(0).text('Gandalf the White');
  console.log($findBuddies[0]);
  $findBuddies.eq(0).addClass('the-white');
  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
var hornOfGondor = function() {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  var $findBuddies = $('.buddy');
  $findBuddies.eq(4).css("text-decoration", "line-through");
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  var $findBaddies = $('.baddy');
  $findBaddies.eq(2).remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
var itsDangerousToGoAlone = function(){

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  var $getHobbits = $('.hobbit');
  var $moveHobbits = [$getHobbits.eq(0),$getHobbits.eq(1)];
  $getHobbits.eq(1).remove();
  $getHobbits.eq(0).remove();
  $('#Mordor').append($moveHobbits[0]);
  $('#Mordor').append($moveHobbits[1]);


  // 2. add a div with an id of 'mount-doom' to Mordor
  var $mdDiv=$('<div>').attr('id', 'mount-doom');
  $('#Mordor').append($mdDiv);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
var weWantsIt = function() {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  $gollum=$('<div>').attr('id','gollum');
  $gollum.text('gollum');
  $('#Mordor').append($gollum);
  // 2. Move the ring from Frodo and give it to Gollum
  $('#gollum').append($('#the-ring'));
  // 3. Move Gollum into Mount Doom
  $('#mount-doom').append($('#gollum'));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
var thereAndBackAgain = function() {

  // 1. remove Gollum and the Ring from the DOM
  $('#gollum').remove();
  // 2. remove all the baddies from the DOM
  $('.baddy').remove();
  // 3. Move all the hobbits back to the shire
  $('#The-Shire').append($('.hobbit'));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(function() {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
