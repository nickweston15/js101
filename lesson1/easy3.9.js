function cleanUp(str) {
  let output = "";

  for(i = 0; i < str.length-1; i += 1) {
    if (str[i].match(/[a-z]/i)) {
      output += str[i];
    } else if (output[output.length-1] !== " ") {
      output += " ";
    } else {
      continue;
    }
  }
  console.log(output);
};

cleanUp("---what's my +*& line?");
cleanUp("Ma*&*(((y I take y&&&&&&&&our hat, #(@&S(*&^%$#ir?");  