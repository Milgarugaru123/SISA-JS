const movie = { name: "오디세이", director: "놀란", runningtime: 180 };
const snack = { popcorn: "고소 팝콘", drink: "제로 콜라", side: "나초" };

// 겹치는 key값이 있으면, 나중에 들어온 게 저장됨
const a = { ...movie, ...snack };
console.log(a);

const coffee = [
  { name: "아메리카노", price: 3000, shots: 2 },
  { name: "라떼", price: 3500, shots: 2 },
  { name: "연유라떼", price: 4000, shots: 2 },
];

const coffeeChange = coffee.map((x) => ({
  ...x,
  price: x.price + 1000,
  shots: x.shots * 2,
}));

console.log(coffeeChange);
