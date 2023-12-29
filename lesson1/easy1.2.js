/*

Ahhh, making this harder than it needs to be, think Nick, think.

for (num = 1; num <= 99; num += 1) {
  if (num % 2 === 1) {
    console.log(`${num}\n`);
  } else {
    continue;
  }
}

*/

// LS Solution

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}