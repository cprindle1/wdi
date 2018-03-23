$(function(){

// checkerBoard();
triangles(5);

});

var triangles = function(numTriRows){
  for(var i=1; i<=numTriRows; i++){
    var line = $('<div>');
    for(var j=1; j<=i; j++){
      var triangle = $('<div>').addClass('triangle');
      line.append(triangle);
      line.css("text-align", "center");
    }
    $('body').append(line);
  }
}

var checkerBoard = function(){
  for(var i=0; i<8; i++){
    var line = $('<div>');
    for(var j=0; j<8; j++){
      var space = $('<div>').addClass('space');
        if(i%2==0){
          if(j%2==0){
            space.css("background-color", "red");
          }else{
            space.css("background-color", "black");
          }
        }else{
          if(j%2==0){
            space.css("background-color", "black");
          }else{
            space.css("background-color", "red");
          }
        }
        $(line).append(space);
    }
    $('body').append(line);
  }
}
