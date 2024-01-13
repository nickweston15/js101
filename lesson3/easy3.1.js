// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// basic
numbers.length = 0;
console.log(numbers);           // first

// .splice()
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);      // second

// .pop() all of them
numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);                 // third

// Another one that I did, .filter() to nothing
numbers = [1, 2, 3, 4];
console.log(numbers.filter((value) => value === ""));       // fourth