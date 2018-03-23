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

var populateData = function() {
  for (var i=0; i < data.length; i++) {
    console.log(data[i]);
    $infoContainer = $('<div>').addClass('info-container');
    $nameDiv = $('<div>').addClass('name').text(data[i].name);
    $addressDiv = $('<div>').addClass('address').text(data[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);
  }
}

var addData = function(name, address) {
  data.push({ name: name, address: address });
  $('body').empty();
  populateData();
}

$(function() {
  console.log('rolodex.js');
  populateData();
  addData("Lumpy Space Princess", "Lumpy Space");
});
