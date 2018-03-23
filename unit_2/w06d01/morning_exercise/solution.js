var ROT = {
  alphabet: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  },
  rotate: function(string, rot){
    // Split the inputted string into an array
    arrayOfLetters = string.toLowerCase().split("");
    // console.log(arrayOfLetters);

    // Getting the value of the letter from the alphabet key value pairs
    var arrayOfNumbers = arrayOfLetters.map(function(letter){
      return ROT.alphabet[letter];
    });
    // console.log("Array of Numbers: " + arrayOfNumbers);

    // Adjusting the number to add 13 to the value
    var encodedNumberArray = arrayOfNumbers.map(function(number){
      if (typeof number !== "number"){
        newNumber = " ";
      } else {
        var newNumber =  number + rot;
        if (newNumber >= 27) {
          newNumber = newNumber - 26;
        };
        if (newNumber <= 0){
          newNumber = 26 + newNumber;
        };
      }

      return newNumber;
    });

    // Getting the key, but have to subtract by 1 to get the matching key and value
    var encodedLetterArray = encodedNumberArray.map(function(number){
      return Object.keys(ROT.alphabet)[number - 1] || " ";
    });
    // console.log(encodedLetterArray);

    // Combining the array to form a string
    var encodedString = encodedLetterArray.join("");
    return encodedString;
    // console.log("Encoded string: " + encodedString);
  },
  encode: function (string, rot){
    return(this.rotate(string, rot));
  },
  decode: function(string, rot){
    return(this.rotate(string, (-rot)));
  }
}

/////////////////////////////////////////
// Running and testing
/////////////////////////////////////////
var string = "Hello World";
var rot = 16;

console.log("==========================")
console.log("Original word: " + string);
console.log("==========================")

console.log("Encoded: " + ROT.encode(string, rot));

var reverse_string = ROT.encode(string, rot);
console.log("+++++++++++++++")
console.log("Decoded: " + ROT.decode(reverse_string, rot));
