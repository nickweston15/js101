/* The following function unnecessarily uses two return statements to
return boolean values. Can you rewrite this function so it only has one
return statement and does not explicitly use either true or false? */

// Original
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// first
function isColorValid1(color) {
  return color === "blue" || color === "green";
}

console.log(isColorValid1("blue"));
console.log(isColorValid1("pink"));

// second
const isColorValid2 = color => color === "blue" || color === "green";
console.log(isColorValid2("blue"));
console.log(isColorValid2("pink"));

// third
const isColorValid3 = color => ["blue", "green"].includes(color);
console.log(isColorValid3("blue"));
console.log(isColorValid3("pink"));