// console.log ('linked app.js')

//global variables that I can change the values within the jQuery .on functions
var digits  = '';
var digits2 = '';
var action  = '';


//window on load
$( function(){
  //jQuery elements to get click events
  var $digits = $( '.num' );
  var $output = $( '#output' );
  var $action = $( '.action' );
  var $equals = $( '#equals' );
  var $clear  = $( '#clear' );

// get input from number buttons
  $digits.on( 'click', function(){
    if ( digits === '' ){
      digits += $( this ).text();
      $output.text( digits );
    } else {
      digits2 += $( this ).text();
      $output.text( digits2 );
    }
  });

// get input from operator buttons
  $action.on( 'click', function(){
    action = $( this ).text();
    $output.text( action );
  });

// do math - have access to
//global digit
//global digit2
//global action
$equals.on( 'click', function(){
  var value = 0;
  switch( action ){
    case '+':
     value = add( digits, digits2 );
     break;
    case '-':
     value = subtract( digits, digits2 );
     break;
    case 'x':
     value = multiply( digits, digits2 );
     break;
    case '/':
     value = divide( digits, digits2 );
     break;
    default:
     value = 'sorry, I can\'t!';
  } //end switch

 //change output text
  $output.text( value );
  //reset values so new calculation can be made
  //this strategy only allows two numbers to be operated on at a time
  digits = '';
  digits2 ='';
  action = '';

});

//make clear button 'work'
$clear.on( 'click', function(){
    digits = '';
    digits2 = '';
    action = '';
    $output.text( '0' );
});


});//closes on load

//Math operations
//Note: did you try to set variables to + - / or *
// JavaScript doesn't let you! These symbols must be stored as strings
var add = function ( num1, num2 ){
  return parseInt( num1 ) + parseInt( num2 );
}

var subtract = function ( num1, num2 ){
  return parseInt( num1 )- parseInt ( num2 );
}

var multiply = function ( num1, num2 ){
  return parseInt( num1 ) * parseInt( num2 );
}

var divide = function ( num1, num2 ){
  return parseInt( num1 ) / parseInt( num2 );
}
