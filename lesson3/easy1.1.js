let numbers = [1, 2, 3];
numbers[6] = 5;  // I think this will raise a Reference Error because the array isn't 6 index long
numbers[4]; // Same here

// I was wrong, JS just creates empty slots if you reference something outside scope;