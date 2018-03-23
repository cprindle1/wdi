// console.log('linked my app.js');
//
// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


/////////////////////////////////////////////////////////
// YEAR 1
/////////////////////////////////////////////////////////

$(function() {


  var $container = $('#container');
  // console.log($container);

  var $h1 = $('<h1>');
  $h1.text('Hogwarts');
  // console.log($h1);

  $container.append($h1);


  /////////////////////////////////////////////////////////
  // YEAR 2
  /////////////////////////////////////////////////////////

  var $h2 = $('<h2>');
  $h2.text('Karolin');
  $container.append($h2);

  var $h3 = $('<h3>');
  $h3.text('Hufflepuff');
  $container.append($h3);

  var $h4 =  $('<h4>');
  $h4.text('Merlin');
  //$h4.clone();//has to be above `addClass` or else class will be added to element
  //can solve this without .clone() - see below
  $h4.addClass('cat');
  $container.append($h4);

  $anotherH4 = $('<h4>');
  $anotherH4.text('Hornbeam Wand with Dragon Heartstring Core');
  $container.append($anotherH4);

  /////////////////////////////////////////////////////////
  // YEAR 3
  /////////////////////////////////////////////////////////

  var trunkItems = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', 'Bertie Bott\'s Every Flavor [Jelly] Beans' ];

  var $ul = $('<ul>')
  $ul.attr('storage','trunk');

  for (var i = 0; i < trunkItems.length; i++){
    if (i > 0 && i < 4){
      var $li = $('<li>');
      $li.text(trunkItems[i]);
      //add class secret
      $li.addClass('secret');
      $ul.append($li);
    } else {
        var $li = $('<li>');
        $li.text(trunkItems[i]);
        if(trunkItems[i] === 'leash'){
          $li.addClass('cat');
        }
        $ul.append($li);
    }
  }

  $container.append($ul);
  /////////////////////////////////////////////////////////
  // YEAR 4
  /////////////////////////////////////////////////////////
  var $h5 = $('<h5>');
  $h5.text('Spring 2017');
  $h5.appendTo($container);

  var $table = $('<table>');
  var $thead = $('<thead>');
  var $tr = $('<tr>');
  var $th =$('<th>');
  $th.text('Day');
  $th.appendTo($tr);
  var $th2 = $th.clone();
  $th2.text('Classes');
  $th2.appendTo($tr);
  $tr.appendTo($table);

  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var classes = [' Herbology ', ' Divination ', ' History of Magic ', ' Charms ', ' Potions ', ' Transfiguration ', ' Defense Against the Dark Arts ', ' Quidditch practice ' ];

  var scheduleData = function (day, classes){
    this.day = day;
    this.classes = classes;
  }
  var week = [];

  var chooseClasses = function (){
    //any three classes a day

    // reset the classes array every day
    var dayClasses = [];
    for (var q = 0; q < 3; q ++){
    var pick = Math.ceil(Math.random() * classes.length -1)
    var choose = classes.splice(pick, 1).join('');
    dayClasses.push(choose);
  }
    // reset the classes array every day
  classes = [' Herbology ', ' Divination ', ' History of Magic ', ' Charms ', ' Potions ', ' Transfiguration ', ' Defense Against the Dark Arts ', ' Quidditch practice ' ];
    return dayClasses;
  }

  //fill up the schedule
  for (var k = 0; k < days.length; k++ ){
    var threeClassesADay = chooseClasses();
    var dayScheudle = new scheduleData (days[k], threeClassesADay)
    week.push(dayScheudle);
  }

  //add the schedule data to the table
  //
  for (var x = 0; x < week.length; x++){
    var $tr = $('<tr>');
    var $td1  = $('<td>');
    $td1.text(week[x].day);
    var $td2 = $('<td>');
    $td2.text(week[x].classes);
    $tr.append($td1);
    $tr.append($td2);
    $tr.appendTo($table);
  }
    $container.append($table);

    /////////////////////////////////////////////////////////
    // YEAR 5
    /////////////////////////////////////////////////////////
    // var $wand = $('h4').eq(1);
    // $wand.remove();
    // var $butterBeer = $('li').first();
    // $butterBeer.remove();
    // $newWand = $('<h4>').delay(120000);
    // $newWand.text('Acacia  Wand with Jackalope Antler Core').css("color","indigo");
    // $newWand.insertAfter($h4);
    // $petMission = $('.cat').first().delay(1000);
    // $petMission.hide('slow', 'swing', function(){
    //   $petMission.remove();
    //   $petMission.insertAfter($container).show('slow', function (){
    //     $petMission.hide(3000, 'swing', function(){
    //         $petMission.insertAfter($h3).hide(0,'swing', function(){
    //           $petMission.show('slow');
    //       });
    //     });
    //   });
    // });

    /////////////////////////////////////////////////////////
    // YEAR 6
    /////////////////////////////////////////////////////////

    var $secret = $('.secret').delay(6000);
    $secret.hide('slow').delay(4000);
    $secret.show('slow');

    $petleash = $('.cat').eq(1).addClass('cabbage');
    $petleash.removeClass('cabbage');

    /////////////////////////////////////////////////////////
    // YEAR 7
    /////////////////////////////////////////////////////////

    $h5.text('Fall 2017');
    var $li = $('<li>');
    $li.text('Butter beer');
    $ul.prepend($li);


}); // closes window onload function
