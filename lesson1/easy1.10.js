function multisum(num) {
  let counter = 0;
  
  for (i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i;
    }
  }

  console.log(counter);
}

multisum(3);
multisum(5);
multisum(10);
multisum(1000);