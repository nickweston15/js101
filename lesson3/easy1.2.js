// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// return (string) => string[string.length] === "!"; ?

function lastCharacter(string) {
  if (string[string.length - 1] === "!") {
    console.log(true);
  } else {
    console.log(false);
  }
}

lastCharacter(str1);
lastCharacter(str2);

// too complicated, just use .endsWith();