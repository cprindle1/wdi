var app = angular.module('ToDoList', []);

app.controller('ToDoController', [function(){
  this.toDoList=['cut grass', 'wash car', 'paint fence'];
  this.listItem = "";
  this.itemHide= true;
  this.editHide = false;
  this.handleSubmit = function(item){
    this.toDoList.push(item);
    this.listItem="";
};
  this.deleteItem = function(index){
    this.toDoList.splice(index,1);
  };
  this.edit = function(index){
    this.itemHide=false;
    this.editHide=true;
  };
  this.handleUpdate = function(index){
    console.log(index);
    // console.log(item);
    // this.toDolist[index]=item;
  };

}]);
