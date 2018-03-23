var app = angular.module("CustomDirectiveApp", []);

app.directive('productTitle', function(){
  return {
    templateUrl: 'partials/product-title.html',
    controller: function(){
      this.name="foo";
    },
    controllerAs: 'title'
  };
});
