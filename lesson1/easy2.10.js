let rlSync = require("readline-sync");

let age = rlSync.question("What is your age? ");
let retireAge = rlSync.question("At what age would you like to retire? ");

let yearHolder = new Date();
let year = yearHolder.getFullYear();

let yearsLeft = retireAge - age;
let retireYear = year + yearsLeft;

console.log(
  `It's ${year}. You will retire in ${retireYear}.\n
  You have only ${yearsLeft} years of work to go!
  `)