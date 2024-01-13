/* Back in the stone age (before CSS), we used spaces
to align things on the screen. If we have a 40-character
wide table of Flintstone family members, how can we center
the following title above the table with spaces? */

let title = "Flintstones Family Members";

// My solution
let bufferLength = (40 - title.length) / 2;
let buffer = " ".repeat(bufferLength);

console.log(buffer + title + buffer);

// JS Solution
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + title.length));