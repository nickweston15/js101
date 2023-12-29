let rlSync = require("readline-sync");

let name = rlSync.question("What is your name? ");

if (name[name.length-1] === "!") {
  name = name.slice(0,-1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}