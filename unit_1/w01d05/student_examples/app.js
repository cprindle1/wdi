var money=0;
var fee=1;
var equipment= ["teeth"];

var start = function(){
  alert('Welcome! You are starting a landscaping buiness, but all you have are your teeth. You can cut lawns for $1 a day');
  askForAction();
}

var askForAction = function(){
  var action = "";
  while(action.toLowerCase()!="quit" && money<1000){
    action = prompt("What would you like to do?", "Cut grass, upgrade equipment, view bank account, quit");
    if (action.toLowerCase()=="cut grass"){
      cutGrass();
    }else if(action.toLowerCase()=="upgrade equipment"){
      alert("Rusty Scisors - $5, Old-timey push lawnmower - $25, Fancy battery-powered lawnmower - $250, team of starving students - $500");
      upgrade();
    }else if(action.toLowerCase()=="view bank account"){
      alert("You have $"+money+" available");
    }else if(action.toLowerCase()=="quit"){
      alert("goodbye!");
    }else if(action.toLowerCase()=="restart"){
      alert("Restarting!");
      start();
    }
    else{
      alert("please enter a valid option");
    }
  }
  if(money>=1000){
    alert("You win!");
  }
}

var cutGrass = function(){
  alert("You mowed lawns and earned $"+fee);
  money+=fee;
}

var upgrade = function(){
  var canBuy=true;
  var input = prompt("What would you like to buy?","Rusty Scisors - $5, Old-timey push lawnmower - $25, Fancy battery-powered lawnmower - $250, team of starving students - $500");
    for(var i=0; i<equipment.length; i++){
      if(equipment[i]==input.toLowerCase()){
        alert("You already own that!");
        return;
      }
    }
    if(input.toLowerCase()=='rusty scisors' && money>=5){
      equipment.push("rusty scisors");
      money=money-5;
      fee=5;
      alert("You can now earn $"+fee+" per day with your "+input);
    }else if(input.toLowerCase()=='old-timey push lawnmower' &&  money>=25){
      equipment.push("old-timey push lawnmower");
      money=money-25;
      fee=50;
      alert("You can now earn $"+fee+" per day with your "+input);
    }else if(input.toLowerCase()=='fancy battery-powered lawnmower' && money>=250){
      equipment.push("fancy battery-powered lawnmower");
      money=money-250;
      fee=100;
      alert("You can now earn $"+fee+" per day with your "+input);
    }else if(input.toLowerCase()=="team of starving students" && money>=500){
      equipment.push("team of starving students");
      money=money-500;
      fee=250;
      alert("You can now earn $"+fee+" per day with your "+input);
    }else{
      alert("You don't have enough money for that! Keep cutting grass.");
    }
  }

start();
