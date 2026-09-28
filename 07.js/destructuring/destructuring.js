// destructuring

const fruits = ["apple", "banana", "kiwi", "melon"];

const [f1, f2] = fruits;

console.log(f1, f2);

const students = [
  "오태식",
  29,
  (x) => {
    console.log(`${x}이 돌아왔구나`);
  },
  true,
  "JLPT 없음 ㅅㄱ",
];
const [one, two, three] = students;

console.log(one, two);
three(one);
