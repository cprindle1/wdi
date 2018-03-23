var app = angular.module('MyApp', []);

app.controller('ParentController', ['$scope', function($scope){
    this.prop1 = 'foo'
}]);

app.controller('ChildController', ['$scope', function($scope){
    this.getProps = function(){
        // console.log($scope.$parent);
        // console.log($scope.$parent.parentAlias.prop1);
        // console.log($scope.$parent.$$childHead);
        // console.log($scope.$parent.$$childHead.$$nextSibling);
        console.log($scope.$parent.$$childTail.$$prevSibling);
    }
}]);
