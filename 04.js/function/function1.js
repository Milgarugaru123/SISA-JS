// function add(a, b, c) {
//   return a + b + c;
// }

// const a = add(1, 2, 3);
// console.log(a);

// x, y를 받고 x의 y 제곱 구하는 함수
// 메뉴 이름과 가격을 받고 오브젝트로 돌려주는 함수
// x, y를 받고 더 큰 수를 돌려주는 함수

function square(x, y) {
  return x ** y;
}
function makeMenu(menuName, price) {
  return { name: menuName, price: price };
}
function biggerNum(x, y) {
  return x > y ? x : y;
}

const x1 = +window.prompt("제곱의 밑");
const y1 = +window.prompt("제곱의 지수");
const squareXY = square(x1, y1);
console.log(squareXY);

const menuName = window.prompt("메뉴 이름");
const price = +window.prompt("가격");
const menu = makeMenu(menuName, price);
console.log(menu);

const x2 = +window.prompt("대소를 비교할 첫 번째 숫자");
const y2 = +window.prompt("두 번째 숫자");
const result2 = biggerNum(x2, y2);
console.log(result2);

// 반지름 받고 원의 넓이와 둘레를 오브젝트로 돌려주는 함수

function cirCal(r) {
  return {
    volume: (r ** 2 * 3.14).toFixed(2),
    radius: (2 * r * 3.14).toFixed(2),
  };
}
const circle = cirCal(+window.prompt("원의 반지름 입력"));
console.log(circle);
