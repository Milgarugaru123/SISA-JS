// map => 안에 있는 요소들을 바꿔줌

const arr = [1, 3, 5, 7, 9, 11];

// filter => 안에 있는 요소들읖

const newArr = arr.filter((x) => x > 6);
console.log(newArr);

// 3이상 10 이하만 살리기
// 3의 배수만 살리기
// 0~2 번째 순서만 살리기

const a1 = arr.filter((x) => x >= 3 && x <= 10);
const a2 = arr.filter((x) => x % 3 == 0);
const a3 = arr.filter((x, i) => i <= 2);

console.log(a1, a2, a3);

const a4 = arr
  .map((x, i) => {
    return { no: i + 1, cal: x + 2 * i };
  })
  .filter((x) => x.no >= 3 && x.cal <= 20);

console.log(a4);

/*
이름 길이가 6자 이상만
이름에 e 들어간 과일만 + 모두 대문자화
*/

const fruits = ["apple", "pineapple", "banana", "kiwi", "melon", "mango"];

const f1 = fruits.filter((x) => x.length >= 6);
const f2 = fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase());

console.log(f1, f2);
