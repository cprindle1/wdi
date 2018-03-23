// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};
$(function(){

var $container = $('#container');
console.log($container);
var $h1 = $('<h1>');
console.log($h1);
$h1.html("Hogwarts");
$container.append($h1);

var $name = $("<h2>Charlie Prindle</h2>");
var $house = $("<h3>Ravenclaw</h3>");
var $pet = $("<h4>dunno</h4>");
$pet.attr("class", "owl");
var $wand = $("<h4>Holly Wand with Unicorn Hair Core</h4>");

$container.append($name);
$container.append($house);
$container.append($pet);
$container.append($wand);

var $ul = $('<ul storage = "trunk">');
$ul.append("<li>butter beer</li>");
$ul.append('<li class="secret">invisibility cloak</li>');
$ul.append('<li class="secret">magic map</li>');
$ul.append('<li class="secret">time turner</li>');
$ul.append('<li class="owl">leash</li>');
$ul.append("<li>Bertie Bott's Flavor [Jelly] Beans</li>");

$container.append($ul);

var $table = $("<table>");
var $h5 = $("<h5>Spring 2017</h5>");
$container.append($h5);
$table.append("<th>Day</th>");
$table.append("<th>Classes</th>");
var $tr = $("<tr>");
$tr.append("<td>Monday</td>");
$tr.append("<td>Herbology, Transfiguration</td>");
var $tr2 = $("<tr>");
$tr2.append("<td>Tuesday</td>");
$tr2.append("<td>Divination Quidditch practice</td>");
var $tr3 = $("<tr>");
$tr3.append("<td>Wednesday</td>");
$tr3.append("<td>History of Magic</td>");
var $tr4 = $("<tr>");
$tr4.append("<td>Thursday</td>");
$tr4.append("<td>Charms, Defense Against the Dark Arts</td>");
var $tr5 = $("<tr>");
$tr5.append("<td>Friday</td>");
$tr5.append("<td>Potions</td>");
$table.append($tr);
$table.append($tr2);
$table.append($tr3);
$table.append($tr4);
$table.append($tr5);

$container.append($table);


$wand.remove();
$('li').eq(0).remove();
// $ul.before('<h3 id="wand">Some new wand of some kind</h3>');
$wand.html("Some New Wand That Does Better Stuff");
$ul.before($wand);
$wand.attr('id', 'wand');
$('#wand').css("color", "indigo");

$pet.remove();
// $pet.delay(5000).hide('slow');
$container.before($pet);
$pet.remove();
// $pet.delay(5000).hide('slow');
// $pet.delay(5000).show('slow');
$wand.before($pet);


$(".secret").delay(5000).hide('slow');
$(".secret").delay(5000).show('slow');

$('li').eq(3).addClass("cabbage");
$('li').eq(3).removeClass("cabbage");

$h5.html("Fall 2017");
$ul.prepend('<li>Butter Beer</li>');
$ul.attr("storage", "chest");

});
