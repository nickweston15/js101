let rlSync = require("readline-sync");

let bill = parseFloat(rlSync.question("What is the bill? "));

let tipPercent = parseFloat(rlSync.question("What is the tip percentage? "));

let tipAmount = (tipPercent / 100) * bill;

let total = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);