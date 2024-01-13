// How can we add multiple items to our array? ('Dino' and 'Hoppy')

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

let additionalFam = ["Dino", "Hoppy"];

let fullFam = flintstones.concat(additionalFam);
console.log(fullFam);

// Wanted to do it a different way, but could have pushed multiple arguments