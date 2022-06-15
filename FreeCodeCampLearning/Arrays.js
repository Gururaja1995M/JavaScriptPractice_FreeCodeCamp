// Store multiple values with Arrays
var ourArray = ["John", 23];

// Nested Array/Multidimentional array
var myArray = [["the universe", 42], ["everything", 101010]];

// Access array data with indexces
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData);

// Modification
var ourArray = [18, 64, 99];
ourArray [1]=45;
console.log(ourArray);

// Access multi-dimentional arrays with indexes
var myArray = [[1,2,3], [4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray[3][0];
console.log(myData); // [ 10, 11, 12 ]

// Manipulate Arrays with push()
var ourArray = ["Stimpson", "j", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray); // [ 'Stimpson', 'j', 'cat', [ 'happy', 'joy' ] ]

// Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); //Remove the last element put it to removedFromOurArray variable
console.log(ourArray); // [1,2]
console.log(removedFromOurArray); // 3

//shift()
var ourArray= ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray); // [ 'J', [ 'cat' ] ]
console.log(removedFromOurArray); // Stimpson

//unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
console.log(ourArray); // [ 'J', 'cat' ]
ourArray.unshift("Happy");
console.log(ourArray); // [ 'Happy', 'J', 'cat' ]



