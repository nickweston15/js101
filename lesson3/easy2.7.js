/* Create an array from this object that contains only two elements:
Barney's name and Barney's number: ["Barney", 2] */

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5 };

// My original idea, but I think the other notation is better per ESLint
// let arr = Array(Object.keys(flintstones)[2], Object.values(flintstones)[2]);

let arr = [Object.keys(flintstones)[2], Object.values(flintstones)[2]];

console.log(arr);

// JS Solution
console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());