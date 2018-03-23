// var solarSystem = [
//     { name: "Mercury", ringSystem: false, moons: [] },
//     { name: "Venus", ringSystem: false, moons: [] },
//     { name: "Earth", ringSystem: false, moons: ["The Moon"] },
//     { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
//     { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
//     { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
//     { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
//     { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
// ];
//
// console.log(solarSystem[4].moons);
// console.log(solarSystem[7].moons[1]);
// solarSystem[1].moons.push("Endor");
// solarSystem.push({name: "Pluto", ringSystem: false, moons:["Charon"]});
// solarSystem[2].diameter="7917.5";
// solarSystem[0].ringSystem=true;
// solarSystem[6].moons[3]="Oberon";
//
// for(var i=0; i<solarSystem.length; i++){
//   if (solarSystem[i].ringSystem){
//     console.log(solarSystem[i]);
//   }
// }
//  console.log("=============================")
// solarSystem.sort(function(a,b){
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   // names must be equal
//   return 0;
// });
//
// console.log(solarSystem);
//
// console.log("++=============================++")
//
// var sortArrayOfObjects=function(arr, key){
//     return(arr.sort(function(a,b){
//     var nameA = a[key]; // ignore upper and lowercase
//     var nameB = b[key]; // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     // names must be equal
//     return 0;
//   }));
// }
//
// var movies = [
//                { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
//                { title: "Eraserhead", director: "David Lynch", year: 1978 },
//                { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
//              ];
// console.log("===========================================");
// console.log(sortArrayOfObjects(movies, "title"));
// console.log("===========================================");
// console.log(sortArrayOfObjects(movies, "year"));
// console.log("===========================================");
// console.log(sortArrayOfObjects(movies, "director"));
// console.log("===========================================");
//
//
// var movie = {title: "Eraserhead", director: "David Lynch", year: "1978"}
//
// for (var keys in movie){
//   console.log(keys);
// }
//
// for (var keys in movie){
//   console.log(movie[keys]);
// }

var movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]
var empty = {};


for (var i=0; i<movies.length; i++){
  empty[movies[i].title]=0;
}

console.log(empty);
