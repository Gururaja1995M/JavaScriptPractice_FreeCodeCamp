/*
function ourReusableFunction(){
    console.log("Guru learning Javascript");
}
ourReusableFunction(); //Guru learning Javascript

// Argument function
function Function1(a,b){
    console.log(a-b);
}
Function1(10,5);

function Function2(a,b){
    console.log(a+b);
}
Function2(10,5);
*/

/*
console.log("***************Example1***************")

//Global Scope functions
var myGlobal = 10;
function fun1(){
    var oopsGlobal = 5;
     console.log(oopsGlobal); //5
}

function fun2(){
    var output="";
    if (typeof myGlobal != "undefined") {
        output += " myGlobal: "+ myGlobal;
    }

    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: "+ oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
*/

/*
//Local Scope functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar); // 5
}
myLocalScope();
// console.log(myVar); //Err: myVar is not defined
*/
/*
//Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit(){
  var outerWear = "Sweater";
return outerWear;
}

console.log(myOutfit()); //Sweater
console.log(outerWear); //T-Shirt
*/

/*
//Return a Value from a Function
function minusSeven (num) {
    return num - 7;
}
console.log(minusSeven(10));
*/
/*
//Undefined Value returned
var sum = 0;
function addThree(){
    sum = sum + 3;
}
*/

//Assignment with a Returned Value
var changed = 0;

function change(num){
    return (num + 5) /3;
}

changed = change(10);
console.log(changed); // 5

var processed = 0;

function processArg(num){
    return (num + 3)/5;
}

processed = processArg(7);
console.log(processed); // 2

//01:05:45