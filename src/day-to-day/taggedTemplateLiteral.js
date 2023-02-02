let greeting = "Hello";
let name = "Ahad";
let age = 40;

let sentence = `${greeting} my name is ${name} and I am ${age}`;

function transform(static, ...tags) {
  console.log(static);
  console.log(tags);
}

transform`${greetings} my name is ${name} and I am ${age}`;
// ["", " my name is ", " and I am ", ""]
//["Hello", "Ahad", 40]

function reconstructString(static, ...tags) {
  let index = tags.findIndex((el) => el === "Ahad");
  tags[index] = "Bokhari";

  let str = static[0];

  for (i = 0; i < tags.length; i++) {
    str += tags[i] + static[i + 1];
  }

  return str;
}

let reconstructedSentence = reconstructString`${greeting} my name is ${name} and I am ${age}`;
