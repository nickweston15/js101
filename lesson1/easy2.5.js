let rlSync = require("readline-sync");

let num1 = parseFloat(rlSync.question("Enter the first number: "));
let num2 = parseFloat(rlSync.question("Enter the second number: "));

let add = num1 + num2;
let sub = num1 - num2;
let prod = num1 * num2;
let quo = num1 / num2;
let rem = num1 % num2;
let pow = num1 ** num2;

console.log(
  `\n${num1} + ${num2} = ${add}\n
  ${num1} - ${num2} = ${sub}\n
  ${num1} * ${num2} = ${prod}\n
  ${num1} / ${num2} = ${Math.floor(quo)}\n
  ${num1} % ${num2} = ${rem}\n
  ${num1} ** ${num2} = ${pow}\n`
);