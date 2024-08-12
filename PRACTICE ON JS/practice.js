//using Compiler
const fruits = ["Banana", "Orange", "Apple"];
const cars = "Volvo";
const statement = "We are very happy when traveling";

//JS String Methods
console.log(cars.toUpperCase()); //to uppercase the text same as:
console.log(cars.toLowerCase()); //to lowercase the text

console.log(statement.slice(12, 17)); //output: happy , selects from a given start, up to a (not inclusive) given end.
console.log(statement.replace("happy", "sad")); //output: We are very sad when traveling, it returns a new string with the value(s) replaced.

//JS Arrays
console.log(fruits.length); //returns the length of a string if " Banana", if in array it returns the number of items in an array

fruits.pop(); //true that fruits.pop removes last item on the arrays
console.log(fruits); //output: [ 'Banana', 'Orange' ]

fruits.push("Lemon"); //true that this method will add string to an array using compiler
console.log(fruits); //output:  [ 'Banana', 'Orange', 'Apple', 'Lemon' ]

fruits.splice(1, 2); //true that this splice method remove specific arrays you want [0, 1, 2, 3...]
console.log(fruits); //output: [ 'Banana' ]

//JS Sorts
fruits.sort(); //true that using .sort method it sort the array alphabetically
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

//JS Dates
const d = new Date(); // Create a Date object and alert the current date and time.
let year = d.getFullYear(); //declare variables to get/ to extract the year (four digits) out of a date object.
month = d.getMonth(); //getting the current month from (0-11) out of a date object.
d.setFullYear(2020); //to set the year of a date object to 2020.
console.log(d); //output: 2024-08-11T13:05:49.103Z
console.log(year); //output: 2024
console.log(month); //output: 7 (this is august since it is from 0-12 months)
console.log(d); //output: 2020-08-11T13:18:05.316Z

//JS MATH
let r = Math.random(); //to create a random number
console.log(r); //output: 0.9791778922294363 , literally random numbers

let x = Math.max(10, 20); //to return the largest number of 10 and 20.
console.log(x); //output: 20

let y = Math.min(10, 20); //to return the smallest number of 10 and 20.
console.log(y); //output: 10

let z = Math.round(5.3); //to round a number to the nearest integer.
console.log(z); // output: 5

let s = Math.sqrt(9); //method to get the square root of a number
console.log(s); //output: 3

// JS Comparison
//TRUE:
x = 10;
y = 5;
alert(x > y); //when x is GREATER than y
alert(x != y); //when x is NOT EQUAL than y

x = 10;
y = 10;
alert(x == y); //when x is EQUAL than y

//conditional (ternary) operator

var age = 15;
var voteable = age < 18 ? "Too young" : "Old enough"; //Syntax: condition ? <expression if true> : <expression if false>
//"Too young" if (?) age is less than 18, otherwise(:) alert "Old enough".

alert(voteable);

//JS Condition

let a = 19;
let b = 15;
if (a > b) {
  console.log("Hello World"); //if statement
} else {
  console.log("Error"); //else statement
}

//JS Switch

switch (
  "Ampalaya" //select one of many code blocks to be executed.
) {
  case "Ampalaya":
    alert("Hello"); //returns when switch is "Ampalaya"
    break;

  case "Squash":
    alert("Welcome"); //returns when switch is "Squash"
    break;

  default:
    alert("Neither"); // returns when switch is "default" If no matching cases are found, the program continues to the default label.
    break;
}

//JS Loops
//Create a loop that runs from 0 to 9.
let i;
for (i = 0; i <= 10; i++) {
  console.log(i); //from 0 to 10
}

//reverse count from 1-10

let p;
for (p = 10; p > 0; p--) {
  // for (initialization, condition, inc/decr)
  console.log(p); // starts to 10 ends 1
}

//of object
//Create a loop that runs through each item in the fruits array.
//const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x); //Apple
  // Banana
  // Orange
}

//JS while loop
//counts 1-10 using while loop

let k = 0; //initialization
while (k <= 10) {
  //condition
  console.log(k); //code of block
  k++; //incr
}

//Create a loop that runs as long as i is less than 10, but increase i with 2 each time.

let v = 0;
while (v <= 10) {
  console.log(v);
  v = v + 2; //you can also write like this v +=2
}

// JS Break Loop
//Break
for (f = 0; f < 10; f++) {
  console.log(f);
  if (f == 5) {
    break; // Make the loop stop when f is 5.
  }
}

//continue
for (f = 0; f < 10; f++) {
  if (f == 5) {
    continue; // jump to the next iteration
  }
  console.log(f);
}

// JS HTML DOM
document.getElementById("demo9").innerHTML = "I'am happy to see you ";
