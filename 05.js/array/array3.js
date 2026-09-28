const banapresso = [
  { name: "아메리카노", price: 2000, shots: 2, kcal: 1 },
  { name: "크리미라떼", price: 2350, shots: 2, kcal: 200 },
  { name: "소금빵", price: 2000, kcal: 250 },
  { name: "피스타치오라떼", price: 2000, kcal: 300 },
];

/*
가을 이벤트 -> 각 가격 10% 인하
우유 이슈로, 라떼 품목들은 각 20% 인상
빵 이슈로, 빵 품목들은 가격 절반, 칼로리 100 추가
신메뉴 "쩡으니라떼" 가격 5000원, 샷 2, 칼로리 200 추가됨
*/

const newBana1 = structuredClone(banapresso);
const newBana2 = structuredClone(banapresso);
const newBana3 = structuredClone(banapresso);
const newBana4 = structuredClone(banapresso);
newBana1.map((x) => {
  x.price *= 0.9;
  return x;
});
newBana2.map((x) => {
  x.name.includes("라떼") ? (x.price *= 1.2) : 0;
  return x;
});
newBana3.map((x) => {
  if (x.name.includes("빵")) {
    x.price *= 0.5;
    x.kcal += 100;
  }
  return x;
});
newBana4.push({
  name: "쩡으니라떼",
  price: 5000,
  shots: 2,
  kcal: 200,
});

console.log(newBana1);
console.log(newBana2);
console.log(newBana3);
console.log(newBana4);
