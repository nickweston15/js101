let rlSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

let units = rlSync.question("Will you be entering your units in feet or meters?");

let length = rlSync.question(`Enter the width of the room, as an integer, in ${units}: \n`);
length = parseInt(length, 10);

let width = rlSync.question(`Enter the width of the room, as an integer, in ${units}: \n`);
width = parseInt(width, 10);

if (units == "meters") {
  let sqm = (length * width);
  let sqft = (sqm * SQMETERS_TO_SQFEET);
  
  console.log(`The area of the room is ${sqm.toFixed(2)} square meters (${sqft.toFixed(2)} square feet).`);
} else if (units == "feet") {
  let sqft = (length * width);
  let sqm = (sqft / SQMETERS_TO_SQFEET);
  
  console.log(`The area of the room is ${sqft.toFixed(2)} square feet (${sqm.toFixed(2)} square meters).`);
} else {
  console.log("You did not enter a valid unit. Please either enter 'meters' or 'feet'.");
}