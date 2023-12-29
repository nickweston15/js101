function centerOf(str) {
  if (str.length % 2 === 1) {
    let center = (str.length - 1) / 2;
    console.log(str[center]);
  } else {
    let left = str.length / 2 - 1;
    console.log(str.substring(left, left + 2));
  }
};

centerOf("I Love JavaScript");
centerOf("Launch School");
centerOf("Launch");
centerOf("Launchschool");
centerOf("x"); 