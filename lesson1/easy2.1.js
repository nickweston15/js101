/* My solution, which has an extra space after the name and is more complicated than it needs to be. 

function greetings (arr, obj) {
  let name = "";
  let job = "";

  for (let i = 0; i < arr.length; i += 1) {
    name = name + arr[i] + " ";
  }

  job = obj.title + " " + obj["occupation"];

  return `Hello, ${name}! Nice to have a ${job} around.`;
}

*/

function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status.title} ${status["occupation"]} around.`;
}

console.log(greetings(["John", "Q", "Doe"], {title: "Master", occupation: "Plumber"})); 