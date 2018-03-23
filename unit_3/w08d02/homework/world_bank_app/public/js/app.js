var app = angular.module('WorldBank', []);

app.controller('mainController', ['$http', function($http){
  var controller = this;
  this.region = "";
  this.projectabstract = "";
  this.projectname = "";
  this.year = "";
  this.loanamnt = "";

  this.getRegion = function(region){
    console.log("REGION");
    $http({
      method:'GET',
      url:'http://localhost:3000/wbinfo/byName/'+region,
      data : {
        selectedRegion : this
      }
    }).then(
      function(response){//success
        console.log('Successful response:', response);
        controller.selectedRegion = response.data;
      },
      function(response){//fail
              console.log('Failed response:', response);

      }
    );
  };

  this.remove = function(id, region){
    var controller=this;
    console.log(region);
   $http({
     method: 'DELETE',
     url: 'http://localhost:3000/wbinfo/'+id
   }).then(function(response){//success
           console.log('Successful delete:', response);

         },
         function(response){//fail
                 console.log('Failed delete:', response);
         }
       );
       controller.getUniqueRegions();
       controller.getCount();
       controller.getRegion(region);
 };

  this.processForm = function(){
    var controller = this;
    this.formdata = {
      region: this.region,
      projectabstract: this.projectabstract,
      projectname: this.projectname,
      year: this.year,
      loanamnt: this.loanamnt
    };
    $http({
      method:'POST',
      url:'/wbinfo',
      data : this.formdata
    }).then(
      function(data){//success
        controller.region="";
        controller.projectabstract="";
        controller.projectname="";
        controller.year="";
        controller.loanamnt="";
        console.log(data);
        controller.getCount();
        controller.getUniqueRegions();
      },
      function(response){//fail
              console.log('Failed response:', response);
      }
    );
  };
this.getCount=function(){
  $http({
    method:'GET',
    url:'http://localhost:3000/wbinfo/count',
    data : {
      count : this
    }
  }).then(
    function(response){//success
      console.log('Successful response:', response);
      controller.count = response.data;
    },
    function(response){//fail
            console.log('Failed response:', response);
    }
  );
};
this.getUniqueRegions = function(){
  $http({
    method:'GET',
    url:'http://localhost:3000/wbinfo/uniqueRegions',
    data : {
      regions : this
    }
  }).then(
    function(response){//success
      console.log('Successful response:', response);
      controller.regions = response.data;
    },
    function(response){//fail
            console.log('Failed response:', response);
    }
  );
};
this.getUniqueRegions();
this.getCount();
}]);

app.controller('wbinfoController', ['$http', function($http){
  this.banks = [];
  var controller = this;
  $http({
    method:'GET',
    url:'http://localhost:3003/wbinfo/count',
    data : {
      count : this
    }
  }).then(
    function(response){//success
      console.log('Successful response:', response);
      controller.count = response.data;
    },
    function(response){//fail
            console.log('Failed response:', response);
    }
  );
}
]);
