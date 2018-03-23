$(function(){
  var $openButton = $('#openModal');
  var $closeButton = $('#closeModal');

  var $modal = $('#modal');

  var openModal = function(){
    $modal.css('display', 'block');
  };

  var closeModal = function(){
    $modal.css('display', 'none');
  }

  $openButton.on('click', openModal);
  $closeButton.on('click', closeModal);

  setTimeout(openModal, 5000);



});
