console.log('uh');

// event listeners -- within window onload
$(function() {
  $('.row div').on('click', EventHandlers.onClickChangeShape);
  $('.row div').on('mouseenter', EventHandlers.rotateShape);

}); // end window onload


// data and app logic
var App = {
  classNames: ['triangle', 'circle', 'square',
               'triangle-down', 'octagon', 'heart'],
  clicks: 1,
  incrementClicks: function() {
    this.clicks++;
  }
}

// functions that affect the DOM
var UI = {
  changeShape: function($elem) {
    $elem.attr('class', App.classNames[App.clicks]);
  },
  rotate: function($elem){
    $elem.css("transform", "rotate("+Math.floor(Math.random()*360)+"deg)");
  }
}

// event handlers
var EventHandlers = {
  onClickChangeShape: function() {
    UI.changeShape($(this));
    App.incrementClicks();
    if (App.clicks == App.classNames.length) {
      App.clicks = 0;
    }
  },
  rotateShape: function(){
    UI.rotate($(this));
  }
}
