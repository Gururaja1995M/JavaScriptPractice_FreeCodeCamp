
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.name = "Happy Camper";
console.log(ourDog.name);
/*
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

// Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
console.log(hatValue);
var shirtValue = testObj.shirt;
console.log(shirtValue);

// Accesing Object Properties with Bracket Notation
var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj2["an entree"];
var drinkValue = testObj2["the drink"];
console.log(entreeValue + drinkValue);

// Accessing Object Properties with Variables
var testObj3 = {
   12: "Namath",
   16: "Montana",
   19: "Unitas"
};
var playerNumber =16;
var player = testObj3[playerNumber];
console.log(player);
*/

// Updating Object Properties
// follow 1 st example
//ourDog.name = ""Happy Camper";

/*
//Add new properties to an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-bow";
console.log(ourDog.bark);
ourDog["bark2"] = "woof";
console.log(ourDog.bark2);

//Delete Properties From an Object
delete ourDog.legs;
console.log(ourDog.legs); //Undefined
*/
/*
// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    switch(val){
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
    }
    return result;
}
console.log(phoneticLookup("delta"));

function phoneticLookup2(val) {
    var result = "";
    
    var lookup = {
   "alpha": "Adams",
   "bravo": "Boston",
   "charlie": "Chicago",
   "delta": "Denver",
   "echo": "Easy",
   "foxrot": "frank" 
}
result = lookup[val];
return result;
}
console.log(phoneticLookup2("echo"));
*/

// Testing Objects for properties
var myObj = {
    "gift": "pony",
    "pet": "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }else{
        return "Not Found";
    }

}
console.log(checkObj("bed"));