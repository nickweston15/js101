function isLeapYear (int) {
  if (int % 400 == 0) {
    console.log("true");
  } else if (int % 100 === 0) {
    console.log("false");
  } else if (int % 4 == 0) {
    console.log("true");
  }
}

isLeapYear(2016);
isLeapYear(2015);
isLeapYear(2100);
isLeapYear(2400);
isLeapYear(240000);
isLeapYear(240001);
isLeapYear(2000);
isLeapYear(1900);
isLeapYear(1752);
isLeapYear(1700);
isLeapYear(1);
isLeapYear(100);
isLeapYear(400);
isLeapYear(2024);