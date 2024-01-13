// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Create a new array that contains all of the above values, but in an un-nested format:

let flintstones = [];
flintstones.push("Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles");
console.log(flintstones);                         // first

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);
console.log(flintstones);                    // second

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(flintstones);                       // third

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
console.log(newFlintstones);                    // fourth

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newFlintstones2 = flintstones.flat();
console.log(newFlintstones2);                   // fifth