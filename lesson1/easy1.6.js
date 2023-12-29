let rlSync = require("readline-sync");

let num = parseInt(rlSync.question("Please enter an integer greater than 0: "));
let operation = rlSync.question("Enter 's' to compute the sum, or 'p' to compute the product. ");

let sCount = 0;
let pCount = 1;

if (operation === "s") {
  for (i = 1; i <= num; i += 1) {
    sCount = sCount + i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sCount}.`);
} else if (operation === "p") {
  for (i = 1; i <= num; i += 1) {
    pCount = pCount * i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${pCount}.`);
} else {
  console.log("Oops. Unknown operation.");
}