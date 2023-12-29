function oddities(arr) {
  let odds = [];

  for (let i = 0; i < arr.length; i += 2) {
    odds.push(arr[i]);
  }
  return odds;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities([1, 2, 3, 4, 5, 6]));
console.log(oddities(["abc", "def"])); 
console.log(oddities([123]));
console.log(oddities([]));

function even(arr) {
  let ev = [];

  for (let i = 1; i < arr.length; i += 2) {
    ev.push(arr[i]);
  }
  return ev;
}

console.log(even([2, 3, 4, 5, 6]));
console.log(even([1, 2, 3, 4, 5, 6]));
console.log(even(["abc", "def"])); 
console.log(even([123]));
console.log(even([]));