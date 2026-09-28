// const name = window.prompt("너의 이름은?");
// console.log(name);

/*
유저에게 이름과 커피 메뉴를 물어보고, 잔의 개수도 물어보고, 쿠폰이 있는지 물어보기

~~님,
주문하신 커피는 ~~ 이고,
잔의 개수는 ~~이고,
쿠폰은 ~~입니다.
*/

const name = window.prompt("고객님의 성함은?");
const coffee = window.prompt("주문하실 커피는?");
const num = window.prompt("몇 잔 주문하십니까?");
const coupon = window.prompt("쿠폰은 있으신가요?");

console.log(`
${name} 님,
주문하신 커피는 ${coffee}이고,
잔의 개수는 ${num} 잔이고,
`);

console.log(`쿠폰은 ~~입니다.`);
