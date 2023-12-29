// My Solution
function stringy(int) {
  let evenMessage = "10";
  let oddMessage = "01";

  if (int === 0) {
    console.log("");
  } else if (int === 1) {
    console.log("1");
  } else if (int >= 2 && int % 2 === 0) {
    console.log(evenMessage.repeat(int/2));
  } else {
    console.log(`1${oddMessage.repeat(Math.floor(int/2))}`);
  }
};

/* LS Solution
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
} */

stringy(6);
stringy(9);
stringy(4);
stringy(7);
stringy(0);
stringy(1);
stringy(2);
stringy(3);