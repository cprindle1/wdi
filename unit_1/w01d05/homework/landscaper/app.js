var money=0;
var fee=1;
var equipment= ["teeth"];

var start = function(){
  alert('Welcome! You are starting a landscaping buiness, but all you have are your teeth. You can cut lawns for $1 a day');
  fee=1;
  equipment=["teeth"];
  money=0;
  askForAction();
}

var askForAction = function(){
  var action = "";
  while(action.toLowerCase()!="quit" && money<1000){
    action = prompt("What would you like to do? Cut grass, upgrade equipment, sell equipment, view bank account, quit, or restart","");
    if (action.toLowerCase()=="cut grass"){
      cutGrass();
    }else if(action.toLowerCase()=="upgrade equipment"){
      alert("Rusty Scisors - $5, Old-timey push lawnmower - $25, Fancy battery-powered lawnmower - $250, team of starving students - $500");
      upgrade();
    }else if(action.toLowerCase()=="view bank account"){
      alert("You have $"+money+" available");
    }else if(action.toLowerCase()=="quit"){
      alert("goodbye!");
      return;
    }else if(action.toLowerCase()=="restart"){
      alert("Restarting!");
      start();
    }else if(action.toLowerCase()=="sell equipment"){
      if(equipment.length>1){
        alert("You have "+(equipment.length-1)+" pieces of equipment you can sell for half price");
        sellEquipment();
      }else{
        alert("You don't have any equipment to sell.  You can't sell your teeth!");
      }
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
var sellEquipment = function(){
  var canSell=false;
  var sellIndex=null;
  var responses = ["rusty scisors", "old-timey push lawnmower", "fancy battery-powered lawnmower", "team of starving students"];
  var input = prompt("What would you like to sell? Rusty Scisors - $2.50, Old-timey push lawnmower - $12.50, Fancy battery-powered lawnmower - $125, team of starving students - $250. Type 'nevermind' to return without selling.","");
  if(input.toLowerCase()=="nevermind"){
    return;
  }
    for(var i=0; i<equipment.length; i++){
      if(input==equipment[i]){
        canSell=true;
        sellIndex=i;
      }
    }
    if(canSell){
      if(input.toLowerCase()=='rusty scisors'){
        equipment.splice(sellIndex,1);
        money=money+2.5;
        fee=fee-5;
        alert("You can now earn $"+fee+" per day after selling your "+input);
      }else if(input.toLowerCase()=='old-timey push lawnmower'){
        equipment.splice(sellIndex,1);
        money=money+12.5;
        fee=fee-50;
        alert("You can now earn $"+fee+" per day after selling your "+input);
        }else if(input.toLowerCase()=='fancy battery-powered lawnmower'){
          equipment.splice(sellIndex,1);
          money=money+125;
          fee=fee-100;
          alert("You can now earn $"+fee+" per day after selling your "+input);
      }else if(input.toLowerCase()=="team of starving students"){
        equipment.splice(sellIndex,1);
        money=money+250;
        fee=fee-250;
        alert("You can now earn $"+fee+" per day after selling your "+input);
      }
    }else if(responses.indexOf(input)>-1){
      alert("You don't own any "+input+". Please select a valid item to sell.")
      sellEquipment();
    }else{
      alert("We don't buy that here.  Please select a valid item to sell.")
      sellEquipment();
    }

  }

var upgrade = function(){
  var canBuy=false;
  var responses = ["rusty scisors", "old-timey push lawnmower", "fancy battery-powered lawnmower", "team of starving students"];
  var input = prompt("What would you like to buy? Rusty Scisors - $5, Old-timey push lawnmower - $25, Fancy battery-powered lawnmower - $250, team of starving students - $500","");
    // for(var i=0; i<equipment.length; i++){
    //   if(equipment[i]==input.toLowerCase()){
    //     alert("You already own that!");
    //     return;
    //   }
    // }
    for(var i=0; i<responses.length; i++){
      if(input==responses[i]){
        canBuy=true;
      }
    }
    if(canBuy){
      if(input.toLowerCase()=='rusty scisors' && money>=5){
        equipment.push("rusty scisors");
        money=money-5;
        fee=fee+5;
        alert("You can now earn $"+fee+" per day with your purchase of "+input);
      }else if(input.toLowerCase()=='old-timey push lawnmower' &&  money>=25){
        equipment.push("old-timey push lawnmower");
        money=money-25;
        fee=fee+50;
        alert("You can now earn $"+fee+" per day with your purchase of "+input);
      }else if(input.toLowerCase()=='fancy battery-powered lawnmower' && money>=250){
        equipment.push("fancy battery-powered lawnmower");
        money=money-250;
        fee=fee+100;
        alert("You can now earn $"+fee+" per day with your purchase of "+input);
      }else if(input.toLowerCase()=="team of starving students" && money>=500){
        equipment.push("team of starving students");
        money=money-500;
        fee=fee+250;
        alert("You can now earn $"+fee+" per day with your purchase "+input);
      }else{
        alert("You don't have enough money for that! Keep cutting grass!");
      }
    }else{
      alert("Please select a valid upgrade.")
      upgrade();
    }
  }

start();
