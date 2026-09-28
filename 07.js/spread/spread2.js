const banana = [..."banana"];

console.log(banana);

// aeiou를 😊로 바꾸기

const fruits = [
  "apple",
  "pineapple",
  "banana",
  "peach",
  "kiwi",
  "orange",
  "mango",
  "strawberry",
];

const vowels = "aeiou";

const newFriuts = fruits.map((x) =>
  [...x]
    // .map((y) => (/[aeiou]/.test(y) ? "😊" : y))
    // .toString()
    // .replaceAll(`,`, ``),
    .map((y) => ([...vowels].some((z) => y == z) ? "😊" : y))
    .reduce((x, y) => x + y),
);

console.log(newFriuts);
