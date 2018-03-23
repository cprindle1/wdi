var app = angular.module('MyApp', []);
// console.log("app.js is connected for Angular homework");

app.controller('CarsController', [function(){
  this.types= ["Honda", "Ford", "Chevy", "Tesla"];
  this.colors=["gold", "blue", "silver", "white", "black", "grey"];
}]);

app.controller('DriversController', [function(){
  this.name='Charlie';
  this.driverImg="https://i.kinja-img.com/gawker-media/image/upload/s--BbgPZaXD--/c_scale,f_auto,fl_progressive,q_80,w_800/187bwx3pws5y8jpg.jpg";
  this.isShy = false;
}]);
