function penultimate(str) {
  let arr = str.split(" ");
  return arr[arr.length-2];
};

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");


// Messing around with some stuff down here
function middle(str) {
  let arr = str.split(" ");
  return arr[Math.floor((arr.length-1)/2)];
};

console.log(middle("last word") === "last");
console.log(middle("Launch School is great!") === "School");
console.log(middle("Yay, Launch School is great!") === "School");