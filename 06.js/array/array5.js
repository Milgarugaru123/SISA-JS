/* 
map: 바꾸기
filter: 거르기
find: 찾기 (요소 한 개만)
some & every: 존재 유무
reduce: 누적 합
*/
const arr = [10, 20, 30, 40, 50];

const a1 = arr.find((x) => x <= 10);
const a2 = arr.findIndex((x) => x <= 10);

const a3 = arr.some((x) => x > 20); // 요소 중 일부라도 성립?
const a4 = arr.every((x) => x > 20); // 요소 전부 다 성립?

const arr1 = [1, 2, 3, 4, 5];
const a5 = arr1.reduce((a, c) => {
  console.log({ a: a, c: c });
  return a + c;
});

console.log(a1, a2, a3, a4, a5);
