/* undefined, null, boolean, string, symbol, number and object */



/*
var myName="Guru"
myName=8     // Can be accessed throghout the program


let ourName="FreeCodeCamp" // Limited to declared scope

const pi=3.14   // Variable constants cant be changed
*/


/*
var a;
var b=2;
console.log(a);

a=7;

b=a;

console.log(a);

op:
undefined
7
*/

var a= 5;
var b=10;
var c="I am a";

a=a+1;
b=b+5;
c=c+" String";
console.log(a); //6
console.log(b); //15
console.log(c); // I am a String


// string declaration

var firstName="Guru";
var lastName="Raj";
console.log(firstName);

//Escaping quote characters
var myStr="I am learning \"Java Script\" from the begining";

//Quoting Strings with single quotes
var s1='I am learning "Java Script" from the begining';

console.log("***********************");
var s2="FirstLine\n\t\\SecondLine\nThirdLine"
console.log(s2);


// string concatination + operator
var str1="Java" + "Script";

// string concatination + = operator
var ourStr="I come first. ";
ourStr += "I come second. ";
console.log(ourStr);

// string with variables
var myName="Guru"
var myStr= "My name is " +myName+ " and I am well!";
console.log(myStr);

//Appending variables to string
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is "
ourStr += anAdjective;
console.log(ourStr);

//String length
var firstNameLength=0;
var firstName="Guru";

firstNameLength=firstName.length;
console.log(firstNameLength);
console.log(firstName[firstName.length-1]);

//Bracket notation to find first character in string
var firstLetterOfFirstName=firstName[0];
console.log(firstLetterOfFirstName);

//String Immutability
var s3="Jello World";

s3[0] = "H"; //Wont works (Strings can not be altered once its created)
console.log(s3);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
var result = "";
result += "The "+myAdjective+ " "+ myNoun + " "+ myVerb + " to the store " + myAdverb;

return result;
}

console.log(wordBlanks("dog","big", "ran", "quickly"));
console.log(wordBlanks("bike","slow", "flew", "slowly"));