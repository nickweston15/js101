function shortLongShort(str1, str2){
  let str1Len = str1.length;
  let str2Len = str2.length;

  let output = "";

  if (str1Len < str2Len) {
    output = str1 + str2 + str1;
    console.log(output);
  } else {
    output = str2 + str1 + str2;
    console.log(output);
  }  
}

shortLongShort("abc", "defgh");
shortLongShort("abcde", "fgh");
shortLongShort("", "xyz");