function utf16Value(str) {
  counter = 0;

  for (let i = 0; i < str.length; i += 1) {
    counter += str.charCodeAt(i);
  }

  console.log(counter);
}

utf16Value("Four score");
utf16Value("Launch School");
utf16Value("a");
utf16Value("");

const OMEGA = "\u03A9";
utf16Value(OMEGA);
utf16Value(OMEGA + OMEGA + OMEGA);