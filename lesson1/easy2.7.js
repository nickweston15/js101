function xor(val1, val2) {
  if (val1 == true && val2 == true) {
    return false;
  } else if (val1 == false && val2 == false) {
    return false;
  } else {
    return true;
  }
};

/* LS Solution

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

*/

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);