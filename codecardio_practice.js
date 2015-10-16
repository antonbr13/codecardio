// Create a variable called "myNumber" and set it equal to any number.
var myNumber = 6;
console.log('myNumber should return the numeral 6 -->', myNumber === 6);


// Declare a variable called 'negNum' and assign its value to be -20.
var negNum = -20;
console.log('negNum should return the numeral -20 -->', negNum === -20);


// Declare a variable called 'myVar' and set it equal to any string.
var myVar = "hello there";
console.log("myVar should return its length at a value of 11 -->", myVar.length === 11);
console.log("myVar should return the string 'hello there' -->", myVar === 'hello there');


// Declare a variable called "email" and set it equal to a string of your email address.

var email = "antonbredl@comcast.net";
console.log(email.length);
console.log('email: should return the length of my email of 22 characters -->', email.length === 22);
console.log(email);
console.log('email should return via string: "antonbredl@comcast.net" -->', email === 'antonbredl@comcast.net');


// Demonstrate your knowledge of the difference between concatenation and addition.

var sumNums = 3 + 6;
var addTogether = "- the number before is 9";
var string = sumNums + " " + addTogether;
console.log('variable string should return a value of: "9 - the number before is 9" -->', string === "9 - the number before is 9");


//Melt your brain with this Assignment Operators riddle.
// What is the value of the var following?
var crazy = 4;
var changing = crazy*=5;  
var numbers = changing-=10;
var are = numbers+=crazy;  
var you = are %= 16;    
var still = are/=you;    
var following = still * crazy;
// following


//Create a function called 'isTyler' that accepts a name as its only argument. If the argument you pass in is 'tyler', return true. If the argument is anything else, return false.

function isTyler(name) {
	if (name === "tyler") {  
      return true;
    }
  	else {
      return false;
    }
}
console.log(isTyler("tyler"));
console.log(isTyler("tylesr"));

//   function makeCounter() {
//     var counter = 1;
//     return function inner() {
//       return counter++;
//     }
//   }
  
//   var count = makeCounter();
//   count()
//   count() 
//   count() 
//   count() 
  
//   Day 5 #5
// Write a function named truthTester that takes in a parameter and checks if it is truthy or falsy. Return true if the parameter is truthy, and false if the parameter is falsy.
  
  function truthTester(test) {
	  if (test) {
		  return true;

	  }
	  else {
		  return false;
	  }
  }
  
  console.log(truthTester(8));






