/* Starting with a string below, return a new string
that swaps the case of all letters */

let munstersDescription = "The Munsters are creepy and spooky.";

// My solution
function switchCase(str) {
  let newString = "";
  for (let index = 0; index < str.length; index += 1) {
    if (str[index].toLowerCase() === str[index]) {
      newString += str[index].toUpperCase();
    } else {
      newString += str[index].toLowerCase();
    }
  }
  console.log(newString);
}

switchCase(munstersDescription);

// LS Solution

console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);