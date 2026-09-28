// 홀수면 2배, 짝수면 3배
// 각자 자기 수의 제곱
// 5의 배수만 "금요일" 바꾸기

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddEven = (x) => (x % 2 ? x * 2 : x * 3);
const square = (x) => x ** 2;
const mul5 = (x) => (x % 5 ? x : "금요일");

const newArr1 = arr.map(oddEven);
const newArr2 = arr.map(square);
const newArr3 = arr.map(mul5);
console.log(newArr1, newArr2, newArr3);

// test
let i = 0;
let sum = 0;
while (i < arr.length) {
  sum += arr[i++];
}
const avg = sum / arr.length;
console.log(arr.map((x) => (x > Math.floor(sum / arr.length) ? "A" : "B")));
