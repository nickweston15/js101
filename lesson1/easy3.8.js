function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;

  if (avg >= 90 && avg <= 100) {
    console.log("A");
  } else if (avg >= 80 && avg < 90) {
    console.log("B");
  } else if (avg >= 70 && avg < 80) {
    console.log("C");
  } else if (avg >= 60 && avg < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
};

getGrade(95, 90, 93);
getGrade(50, 50, 95);