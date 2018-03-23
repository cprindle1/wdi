console.log('uh');

// event listeners -- within window onload
$(function() {
  $('.row div').on('click', EventHandlers.onClickChangeShape);
  $('.row div').on('mouseenter', EventHandlers.onEnterRotateShape);
}); // end window onload


// data and app logic
var App = {
  classNames: ['triangle', 'circle', 'square',
               'triangle-down', 'octagon', 'heart'],
  clicks: 1,
  incrementClicks: function() {
    this.clicks++;
  },
  getAngle: function() {
    return Math.floor(Math.random() * 361);
  }
}

// functions that affect the DOM
var UI = {
  changeShape: function($elem) {
    $elem.attr('class', App.classNames[App.clicks]);
  },
  rotateShape: function($elem) {
    $elem.css('transform', 'rotate(' + App.getAngle() + 'deg)');
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
  onEnterRotateShape: function() {
    UI.rotateShape($(this));
  }
}
