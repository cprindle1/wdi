$(function() {

  // Add a section to the container div:
  // the section should have class '.info'
  // the section should have a paragraph with text
  // the section should have an image
  // the image should have an id

  // first, construct my elements
  var $section = $('<section>').addClass('info');
  var $p = $('<p>').text("Here be some drainage");
  var $img = $('<img>').attr('id', 'third-img').attr('src', 'http://www.calgary.ca/CSPS/ABS/PublishingImages/2010-1155_00013525_10790.jpg');
  // $img.;

  // combine the elements inside out
  $section.append($p);
  $section.append($img);

  // append that stuff to the outer element
  $('#container').append($section);

});
