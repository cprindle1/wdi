console.log("pokemon");
var deck = [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];
console.log(deck.length);
var carsPlayed = [];
var cardsLeft=deck.length;

var game = {
  giveCards: function(obj){
    console.log("dealing cards");
    var index = 0;
    for(var i=0; i<3; i++){
      index=Math.floor(Math.random()*deck.length);
      obj.cards.push(deck[index]);
      deck.splice(index, 1);
    }
  }
}

var player = {
  points: 0,
  rounds: 0,
  cards: [],
  cardInPlay:{},
  pickCard: function(){
      console.log("Please select a card");
      for(var j=0; j<this.cards.length; j++){
        console.log(j+1+". Name: "+this.cards[j].name+" Damage: "+this.cards[j].damage);
      }
var input=prompt("Which card do you want to play?", "1,2,3");
      if(input==1){
        this.cardInPlay=this.cards[0];
      }else if(input==2){
        this.cardInPlay=this.cards[1];
      }else if(input==3){
        this.cardInPlay=this.cards[2];
      }
      // this.cardInPlay = this.cards[0];
      console.log("You picked - Name: "+this.cards[0].name+" Damage: "+this.cards[0].damage);
      this.cards.splice(input-1,1);
    },
  cardsPlayed: []
};
var computer = {
  points: 0,
  rounds: 0,
  cards: [],
  cardInPlay:{},
  pickCard: function(){
    var randCard=Math.floor(Math.random()*this.cards.length);
    this.cardInPlay = this.cards[randCard];
    console.log("Computer picked - Name: "+this.cards[randCard].name+" Damage: "+this.cards[randCard].damage);
    this.cards.splice(randCard,1);
  },
  cardsPlayed: []
};

var play = function(){

  while(cardsLeft>=6){
    game.giveCards(player);
    game.giveCards(computer);
    for(var i=0; i<3; i++){
      player.pickCard();
      computer.pickCard();
      if(player.cardInPlay.damage>computer.cardInPlay.damage){
        player.points++;
        console.log("You won this hand");
      }else if(player.cardInPlay.damage<computer.cardInPlay.damage){
        computer.points++;
        console.log("Computer won this hand");
      }else{
        console.log("This hand is a tie!");
      }
      cardsLeft=deck.length;
    }
    console.log("Score: You "+ player.points+", Computer: "+computer.points);
  }
  console.log("There are "+ cardsLeft +" in the deck.  Not enough for another round");
  if(player.points>computer.points){
    console.log("You win!");
  }else if(player.points<computer.points){
    console.log("You lose!");
  }else{
    console.log("Tie game!");
  }
}

play();
