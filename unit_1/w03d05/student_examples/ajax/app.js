$(function() {

  // code

var getMovie = function(){
  $inp = $('#input-box').val();
  console.log($inp);
  $.ajax('http://www.omdbapi.com/?t='+$inp).done(function(data){
    console.log(data);
    $img = $('<img>').attr('src', data.Poster);
    $director = $('<h1>').text(data.Director);
    $('#movie').append($director);
    $('#movie').append($img);
  });
}

  $('#input-submit').on('click', getMovie)



}); // end window onload
