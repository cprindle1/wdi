var app = angular.module('MyApp', []);

app.controller('MyController', [function(){
    this.hello = "oh hai!";
    this.isActive = false;
    this.items = ['chubby hubby', 'cherry garcia', 'americone dream'];
    this.divExists = true;
    this.hideDiv = false;
    this.showDiv = false;
    this.imgSrc = "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg";
    this.someProperty = 'foo';
    this.someAction = function(){
        console.log('someAction was called');
    }
    this.handleSubmit = function(){
        console.log('Form was submitted.  The value was: ' + this.someProperty);
    }
}]);
