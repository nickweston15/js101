/* LS Solution

function negative(num) {
  console.log(Math.abs(num) * -1);
}; */

// Trying ternary operator

function negative(num) {
  console.log(num >= 0 ? num * -1 : num);
}

/* My long way of doing this

function negative(num) {
  if (num >= 0) {
    console.log(num * -1);
  } else {
    console.log(num);
  }
}; */

negative(5);
negative(-3);
negative(0);