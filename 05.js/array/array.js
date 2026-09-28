const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addTen = (x) => {
  return x + 10;
};
// 화살표 함수는 한 줄인 경우 return, {} 생략 가능

const newArr = arr.map(addTen);
console.log(newArr);

const oddsAndEnds = (x) => {
  return x % 2 === 1 ? "🐤" : "🐘";
};

const newArr2 = arr.map(oddsAndEnds);
console.log(newArr2);
