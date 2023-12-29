// LS Solution

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

/* My attempt:

function logInBox(str) {
  const DASHTOCHAR = 1.05;
  let numOfDashes = str.length * DASHTOCHAR
  
  let dashes = "";
  let topAndBottomBorder = dashes.padEnd(numOfDashes,"-");

  let spaces = "";
  let middleSpaces = spaces.padEnd(numOfDashes," ");

  console.log(
`+${topAndBottomBorder}+
|${middleSpaces}|
| ${str} |
|${middleSpaces}|
+${topAndBottomBorder}+`
  );
}; */

logInBox('To boldly go where no one has gone before.');
logInBox("")