/*
// If Statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

console.log(ourTrueOrFalse(true));

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, That was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

//Equality Operators
function testEqual(val) {
    if (val == 12){
     return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//Strict equal operator
function testStrict (val1) {
    if (val1 ==="10") {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));
*/
/*
//Practice comparing Different values
function compareEquality(a,b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10,"10"));

//Comparing inequality operator
function testNotEqual (val) {
    if (val!=99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

//Strict in equality operator
function testStrictNotEqual (val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));
*/
/*
//Comparisions with the logical And operator
function testGreaterThan(val) {
    if (val > 10){
    return "over 10";}
    return "10 or Under";
}
console.log(testGreaterThan(7));

function testLessThan(val) {
    if (val<25) {
        return "under 25";
    }
    if (val>24 && val<56) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(25));
*/
/*
// Comparisons with the Logical Or Operator
function testLogicalOr(val) {

    if (val < 10 || val > 20)
    {return "outside";
}
return "inside";
}
console.log(testLogicalOr(30));
*/
/*
function testElse(val) {
    var result="";
    if (val < 5){
        result = "Less than 5";
    }else {
        result = "5 or bigger";
    }
    return result;
}
console.log(testElse(56));
*/
/*
//If else statement
function testElseIf(val) {
    if (val>10){
        return "Greater than 10";
    }else if(val < 5) {
        return "Smaller than 5";
    }else {
    return "Between 5 and 10";
    }
}
console.log(testElseIf(5));

function orderMyLogic(val) {
    if (val<10) {
        return "Less than 10";
    }else if (val<5) {
        return "Less than 5";
    }else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3)); //Less than 10
*/

/*
// Chaining If Else Statements
function testSize (num) {
    if (num<5) {
        return "Tiny";
    }else if (num<10) {
        return "Small";
    }else if (num<15) {
        return "Medium";
    }else if (num<20) {
        return "Large";
    }else {
        return "Huge";
    }
}
console.log(testSize(4));
*/
/*
//Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }else if (strokes <= par-2) {
        return names[1];
    }else if (strokes <= par-1) {
        return names[2];
    }else if (strokes <= par) {
        return names[3];
    }else if (strokes <= par+1) {
        return names[4];
    }else if (strokes <= par+2) {
        return names[5];
    }else if (strokes <= par+3) {
        return names[6];
    }
}
console.log(golfScore(5,4));
*/

//Switch Statement
//1:32;26