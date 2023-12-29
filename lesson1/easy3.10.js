function century(year) {
  let num = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    num -= 1;
  }

  console.log(String(num) + suffix(num));
}

function suffix(num) {
  if (catchTh(num % 100)) {
    return "th";
  }

  let lastDigit = num % 10;
  switch (lastDigit) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function catchTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}


/* I got close here, but no cigar.
function century (year) {
  if (year % 100 === 0) {
    console.log(`${Math.floor(year / 100)}th`);
    
  } else {
    let beg = Math.floor(year / 100) + 1;

    if (beg / 10 === 1) {
      console.log(`${beg}st`);
    } else if (beg / 10 === 2) {
      console.log(`${beg}nd`);
    } else if (beg / 10 === 3) {
      console.log(`${beg}rd`);
    } else {
      console.log(`${beg}th`);
    }
  }
}; */

century(2000);
century(2001);
century(1965);
century(256);
century(5);
century(10103);
century(1052);
century(1127);
century(11201);