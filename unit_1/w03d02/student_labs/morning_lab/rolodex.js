$(function(){
  rolodex();

});

var data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "I simply do not know" },
  { name: "Jem", address: "Starlight Music" }
];

var rolodex=function(){
  for(var i=0; i<data.length; i++){
    console.log("rolodex");
    var $person = $("<div>").addClass("rolodex");
    var $name = $("<div>").addClass("listing");
    var $address = $("<div>").addClass("listing");
    $name.text(data[i].name);
    $address.text(data[i].address);
    $person.append($name);
    $person.append($address);
    $('body').append($person);
  }
}
