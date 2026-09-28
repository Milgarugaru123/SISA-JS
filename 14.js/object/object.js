const menu = {
  name: "americano",
  price: 3000,
  kcal: 5,
  shots: 2,
};

const a = Object(); // 오브젝트 만드는 거
const b1 = Object.keys(menu); // 키 배열 생성
const b2 = Object.values(menu); // 값 배열 생성
const b3 = Object.entries(menu); // 키-값 쌍으로 된 배열들 생성

console.log(a, b1, b2, b3);
