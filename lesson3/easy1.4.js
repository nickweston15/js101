/* Using the following string, create a new string that contains all lowercase
letters except for the first character, which should be capitalized.
(See the example output.) */

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.


// LS used .charAt(0) and .substring(1).toLowerCase(), could be more descriptive
function toProperSyntax(str) {
  str = str[0].toUpperCase() + str.slice(1).toLowerCase();
  console.log(str);
}

toProperSyntax(munstersDescription);

// Just showing PBR that it doens't alter original
console.log(munstersDescription);