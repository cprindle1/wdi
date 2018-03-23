$(function() {
  console.log('triangles');
  generatePyramid(16);
});

var generatePyramid = function(num) {
  for (var i=1; i <= num; i++) {
    $row = $('<div>').addClass('row');
    for (var j=1; j <= i; j++) {
      $triangle = $('<div>').addClass('triangle');
      $row.append($triangle);
    }
    $('body').append($row);
  }
}
