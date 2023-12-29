function crunch(str) {
  let output = str[0];

  for(let i = 1; i < str.length; i += 1) {
    if (str[i] !== output[output.length-1]) {
      output += str[i];
    } else {
      continue;
    }
  }
  console.log(output);
};

crunch('ddaaiillyy ddoouubbllee');    
crunch('4444abcabccba');              
crunch('ggggg');            
crunch('a');                          
crunch('');                           