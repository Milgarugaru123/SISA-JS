/* function */
// 함수: 마술상자
// (입력 -> 출력)

// function makeCoffee(beans) {
//   return beans + "산 아메리카노";
// }

// function addTen(x) {
//   return x + 10;
// }

// const a = makeCoffee(window.prompt("어디 원두임?"));
// console.log(a);

// const b = addTen(100);
// console.log(b);

// 정수 받아서 제곱으로 돌려주는 함수
// 과일 이름 받아서 ~~과일 주문 출력 함수
// 학생 이름 받으면 오브젝트로 name:이름 돌려주는 함수

function square(x) {
  return x ** 2;
}

function fruits(fruitname) {
  return fruitname + " 과일 주문";
}

function nameObj(inputName) {
  const students = { name: inputName };
  return students;
}

const squareInt = square(+window.prompt("정수 입력"));
console.log(squareInt);

const inputFruit = fruits(window.prompt("과일 이름 입력"));
console.log(inputFruit);

const students = nameObj(window.prompt("학생 이름 입력"));
console.log(students);
