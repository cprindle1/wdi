var adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "tums"],
  companion: {
    name: "charlie"
  },
  companion2: {
    name: "charlie",
    type: "insect"
  }
  }


console.log(adventurer.companion.name);
console.log(adventurer.companion2.type);


console.log(adventurer.belongings[adventurer.belongings.length-1]);

adventurer.belongings.push("Vogue magazine");

for (var i=0; i<adventurer.belongings.length; i++){
  console.log(adventurer.belongings[i]);
}
