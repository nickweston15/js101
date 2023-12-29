function twice(int) {
  if (isDouble(int)) {
    console.log(int);
  } else {
    console.log(int * 2);
  }
};

function isDouble(int) {
  let str = String(int);
  let center = Math.floor(str.length / 2);
  let left = str.substring(0, center);
  let right = str.substring(center);

  return left === right;
};

twice(37);
twice(44);
twice(334433);
twice(444);
twice(107);
twice(103103);
twice(3333);
twice(7676);