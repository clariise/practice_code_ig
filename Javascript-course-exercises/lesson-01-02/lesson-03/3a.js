console.log("My name is:");
console.log("My name is:" + " Clarisse");

console.log("Total cost: $" + (5 + 3)); //concatenation
console.log(`Total cost: $${5 + 3}`); //template literals and interpolation

console.log(`Total cost: $ ` + (599 + 295) / 100); //concatenation + using math (if may decimal calculate in cents /100)
console.log(`Total cost: $ ${(599 + 295) / 100}`); //template literals and interpolation + using math

console.log(`Total cost: $ ${(599 + 295) / 100}`);
console.log("Keep Learning!!");

console.log(`Item (${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}
Shipping & Handling: $${(499 + 499) / 100}
Total before tax: $${(2 * 2095 + 2 * 799 + 499 + 499) / 100}
Estimated Tax (10%): $${
  Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100
}`);
