//Determine whether the name Dino appears in the strings below -- check each string separately:

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkWord(check, string) {
  console.log(string.includes(check));
}

checkWord("Dino", str1);
checkWord("Dino", str2);