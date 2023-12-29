function triangle(int) {
  let str = "*";
  for (i = int; i > 0; i -= 1) {
    console.log(str.padStart(int," "));
    str += "*";
  }
};

triangle(5);
triangle(9);