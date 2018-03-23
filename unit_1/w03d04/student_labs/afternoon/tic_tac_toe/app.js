$(function(){
console.log("TIC TAC TOE");

var turn="X";
var x=true;
var win=false;
var xWins=0;
var oWins=0;
var turns=0;

$reset = $('#reset');
$clearBoard = $('#clearBoard');
$board = $('#board');

var reset = function(){
  turns=0;
  xWins = 0;
  oWins = 0;
  turn="X";
  x=true;
  win=false;
  clearBoard();
  $('#score').html("X: "+xWins+"<br>O: "+oWins);
}

var clearBoard = function(){
  $('.square').remove();
  if(x){
    turn='X';
    $('#turn').text("It's "+turn+"'s turn");
  }else{
    turn='O';
    $('#turn').text("It's "+turn+"'s turn");
  }
  win=false;
  turns=0;
  generateBoard();
}
var checkWin = function(){
  var winner = "";
//check rows
  for(var i = 0; i<=6; i+=3){
    for(var j = 0; j<3; j++){
      if($('#'+(i+j)).text()==""){
        break;
      }else if(($('#'+(i+j)).text()!=$('#'+i).text())){
        break;
      }else if(j==2){
        $('#turn').text($('#'+i).text()+" WINS!");
        winner=$('#'+i).text();
      }
    }
  }
//check columns
  for(var i = 0; i<3; i++){
    for(var j = 0; j<=6; j+=3){
      if($('#'+(i+j)).text()==""){
        break;
      }else if(($('#'+(i+j)).text()!=$('#'+i).text())){
        break;
      }else if(j==6){
        $('#turn').text($('#'+i).text()+" WINS!");
        winner = $('#'+i).text();
      }
    }
  }
//check diagonals
  if($('#4').text()!=""){
    if($('#0').text() == $('#4').text() && $('#4').text() == $('#8').text()){
      $('#turn').text($('#0').text()+" WINS!");
      winner = $('#0').text();
    }else if($('#2').text() == $('#4').text() && $('#4').text() == $('#6').text()){
      $('#turn').text($('#2').text()+" WINS!");
      winner = $('#0').text();
    }
  }
  if(winner!=""){
    win=true;
    if(winner=='X'){
      xWins++;
      $('#score').html("X: "+xWins+"<br>O: "+oWins);
    }else{
      oWins++;
      $('#score').html("X: "+xWins+"<br>O: "+oWins);
    }
  }


}


var mark = function(){
  if($(this).text()=='X' || $(this).text()=='O' || win==true){
    console.log("not doing that");
  }else{
    if(x){
      $(this).text('X');
      x=false;
      turn='O';
      $('#turn').text("It's "+turn+"'s turn");
      turns++;
    }else{
      $(this).text('O');
      x=true;
      turn='X';
      $('#turn').text("It's "+turn+"'s turn");
      turns++
    }
  }
  if(!win){
    checkWin();
  }
  if(turns==9){
    $('#turn').text("DRAW - please clear the board");
  }
}

var generateBoard = function(){
  $('#turn').text("It's "+turn+"'s turn");
  for(var i=0; i<9; i++){
    var $square = $("<div id="+i+" >").addClass('square');
    $square.on('click', mark);
    $board.append($square);
  }
  $('#score').html("X: "+xWins+"<br>O: "+oWins);
}
$clearBoard.on('click', clearBoard);
$reset.on('click', reset);

generateBoard();
});
