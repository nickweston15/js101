let rlSync = require("readline-sync");

let noun1 = rlSync.question("Enter a noun: ");
let verb1 = rlSync.question("Enter a verb: ");
let adj1 = rlSync.question("Enter an adjective: ");
let adv1 = rlSync.question("Enter an adverb: ");

console.log(`Do you ${verb1} your ${adj1} ${noun1} ${adv1}? That's hilarious!`);
console.log(`The ${adj1} ${noun1} ${verb1}s ${adv1} over the lazy dog.`);
console.log(`The ${noun1} ${adv1} ${verb1}s up ${adj1} Joe's turtle.`);