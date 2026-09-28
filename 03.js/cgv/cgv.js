/* 
좌석 선택: 일반(15000), 라이트(13000), 프리미엄(18000)
팝콘 선택: 일반(8000), 캬라멜(9000), 치즈(9000)
음료 선택: 콜라(3000), 아이스티(2000), 커피(4500)
멤버쉽 선택: 브(100%), 실(90%), 골(80%)
 */

const seats = [
  { class: "일반", price: 15000 },
  { class: "라이트", price: 13000 },
  { class: "프리미엄", price: 18000 },
];
const popcorn = [
  { menu: "일반", price: 8000 },
  { menu: "캬라멜", price: 9000 },
  { menu: "치즈", price: 9000 },
];
const drinks = [
  { menu: "콜라", price: 3000 },
  { menu: "아이스티", price: 2000 },
  { menu: "커피", price: 4500 },
];
const membership = [
  { class: "브론즈", discountRate: 1 },
  { class: "실버", discountRate: 0.9 },
  { class: "골드", discountRate: 0.8 },
];

const selectSeat = +window.prompt(
  "좌석 선택 (1: 일반, 2: 라이트, 3: 프리미엄)",
);
const selectPopcorn = +window.prompt("팝콘 선택 (1: 일반, 2: 캬라멜, 3: 치즈)");
const selectDrink = +window.prompt("음료 선택 (1: 콜라, 2: 아이스티, 3: 커피)");
const selectMember = +window.prompt(
  "멤버쉽 회원이신가요? (1: 브론즈, 2: 실버, 3: 골드)",
);

const totalPrice =
  (seats[selectSeat - 1].price || seats[0].price) +
  (popcorn[selectPopcorn - 1].price || 0) +
  (drinks[selectDrink - 1].price || 0) *
    (membership[selectMember - 1].discountRate || 1);

console.log(
  `고르신 좌석: ${seats[selectSeat - 1].class || seats[0].class}, 팝콘: ${popcorn[selectPopcorn - 1].menu || "구매 안 함"}, 음료: ${drinks[selectDrink - 1].menu || "구매 안 함"}\n멤버쉽 등급: ${membership[selectMember - 1].class || "브론즈"}\n총 금액은 ${totalPrice.toFixed(0)}원입니다.`,
);
