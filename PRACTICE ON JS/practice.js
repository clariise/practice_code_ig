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
