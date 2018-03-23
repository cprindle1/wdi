$(function() {
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);
}); // end window onload


//===================
// EVENT HANDLERS
// ==================
var stop;

var startTimer = function() {
	clearInterval(stop);
	var num=$('#stopwatch').text();
	console.log('start timer clicked');
	var start = function(){
  $('#stopwatch').text(num);
	num++;
	}
	var interval = setInterval(function(){start()}, 1000);
	stop=interval;
};

var stopTimer = function() {
	clearInterval(stop);
};

var resetTimer = function() {
	clearInterval(stop);
	$('#stopwatch').text(0);
};

var countdownTimer = function () {
	clearInterval(stop);
	var num=$('#stopwatch').text();
	console.log('start timer clicked');
	var start = function(){
  $('#stopwatch').text(num);
	num--;
	}
	var interval = setInterval(function(){start()}, 1000);
	stop=interval;
};
