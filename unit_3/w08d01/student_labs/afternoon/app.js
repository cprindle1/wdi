var app = angular.module('MarxBrotherApp', []);

app.controller('FamilyController', ['$scope', function($scope){
  this.name = 'Marx';
  this.names=['Chico', 'Harpo', 'Groucho', 'Gummo', 'Zeppo'];
}]);

app.controller('BrotherController', ['$scope', function($scope){
  this.siblings=[];
  this.name=$scope.name;
  this.listSiblings = function(index) {
    this.siblings=[];
      for (var i = 0; i < $scope.$parent.family.names.length; i++) {
        if (i !== index) {
          this.siblings.push(" "+ $scope.$parent.family.names[i]);
        }
      }
      this.siblings[this.siblings.length - 1]=" and" + this.siblings[this.siblings.length-1];
      console.log("Hello my name is " + $scope.$parent.family.names[index] + " My brothers are"+this.siblings);
    };
}]);
