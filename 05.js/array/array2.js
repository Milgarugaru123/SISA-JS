const fruits = ["strawberry", "mandarin", "apple", "kiwi", "banana"];

// 각 과일의 글자 갯수로 바꾸기
// 글자수가 6개 이상이면 오이시!, 아니면 스미마셍
// i가 포함되면 "😊", 없으면 "😭"

const newFriuts1 = fruits.map((x) => x.length);
const newFriuts2 = fruits.map((x) =>
  x.length >= 6 ? "오이시!" : "스미마셍...",
);
const newFriuts3 = fruits.map((x) => (x.includes("i") ? "😊" : "😭"));

console.log(newFriuts1, newFriuts2, newFriuts3);

const cafe = ["americano", "latte", "jasmine tea", "frappuccino", "ade"];

// i or o를 포함하면 글자수로 바꿈, 아니면 대문자화
// 글자수가 6글자 이상이면 5글자로 나타내고, 아니면 그대로 두기
// t를 포함하면 true, 아니면 false

const newCafe1 = cafe.map((x) => (/[io]/.test(x) ? x.length : x.toUpperCase()));
const newCafe2 = cafe.map((x) => (x.length >= 6 ? x.slice(0, 5) : x));
const newCafe3 = cafe.map((x) => x.includes("t"));

console.log(newCafe1, newCafe2, newCafe3);
