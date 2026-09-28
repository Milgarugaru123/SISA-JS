const mcdonald = [
  {
    name: "빅맥",
    price: 5500,
    kcal: 600,
    ingredients: ["bread", "lettuce", "tomato", "meat"],
  },
  { name: "콜라", price: 2000, kcal: 100, ingredients: ["soda"] },
  {
    name: "프랜치프라이",
    price: 3000,
    kcal: 300,
    ingredients: ["patato", "oil"],
  },
  {
    name: "상하이버거",
    price: 4500,
    kcal: 400,
    ingredients: ["bread", "lettuce", "chicken"],
  },
];

// 맥도날드 전체 총 칼로리 구하기
// 칼로리 500 이하 제품중에서 가격 총 합 구하기

const mckcal = mcdonald.map((x) => x.kcal).reduce((x, y) => x + y);
const priceUnder500kcal = mcdonald
  .filter((x) => x.kcal <= 500)
  .map((x) => x.price)
  .reduce((x, y) => x + y);

console.log("총 " + mckcal + "kcal 입니다.");
console.log(
  "500kcal 이하 제품의 총 가격은 " + priceUnder500kcal + "원 입니다.",
);
