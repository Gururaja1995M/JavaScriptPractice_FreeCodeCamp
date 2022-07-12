/*
// profile look up
var contacts = [
    {
        "firstName":"Akira",
        "lastName": "Laine",
        "number": "13579",
        "likes":["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "LastName": "Potter",
        "number": "02468",
        "likes": [["Hogwarts", "Magic", "Hagrid"]]
    }
];

function lookUpProfile(name, prop){
    for(var i=0;i<contacts.length;i++){
if(contacts[i].firstName===name){
    return contacts[i][prop] || "No Such Property";
}
}
return "No such contact";
}

console.log(lookUpProfile("Harry", "number"));
*/
/*
// Random Fractions and Whole Numbers
function randomFraction() {
    return Math.random();

}
console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random()*20);

function randomWholeNum(){
    return Math.floor(Math.random()*1000);
} 
console.log(randomWholeNum());

// Random wh0le number within a range
function randomRange(myMin, myMax){
return Math.floor(Math.random()* (myMax - myMin +1)) + myMin;
}
var myRamdom = randomRange(58888 , 15888888);

console.log(myRamdom);
*/

// Use the parseInt Function
function convertToInt(str){
    return parseInt(str);
}
console.log("23abcd");

// Use the parseInt Function with a Radix
function convertToIntger(str){
    return parseInt(str, 2);
}

console.log(convertToIntger("100100111"));