// 일반 함수 (구문법)
function temp1() {}

// 화살표 함수 (신문법)
const add = (x, y) => {
  return x + y;
};

// a, b, c 입력, 배열로 돌려주기
// x, y를 받으면 합, 차, 곱, 나누기, 제곱을 오브젝트로 돌려주기

const makeArray = (a, b, c) => {
  return [a, b, c];
};
const array1 = makeArray(
  +window.prompt("첫 번째 숫자"),
  +window.prompt("두 번째 숫자"),
  +window.prompt("세 번째 숫자"),
);
console.log(array1);

const cal = (x, y) => {
  return { add: x + y, sub: x - y, multi: x * y, divide: x / y, power: x * y };
};
const obj1 = cal(
  +window.prompt("계산할 첫 번째 숫자"),
  +window.prompt("계산할 두 번째 숫자"),
);
console.log(obj1);
