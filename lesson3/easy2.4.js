// Starting with a string, show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

let correction1 = "Four score and " + famousWords;
console.log(correction1);

let beginning = "Four score and ";
let correction2 = beginning.concat(famousWords);
console.log(correction2);