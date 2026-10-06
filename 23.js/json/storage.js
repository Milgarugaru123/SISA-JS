localStorage.setItem(`lunch`, `돈치킨`);
const c = localStorage.getItem(`lunch`);
console.log(c);

/* bread 마들렌, 3000 원, 250 kcal */
const bread = { name: `마들렌`, price: 3000, kcal: 250 };
localStorage.setItem(`bread`, JSON.stringify(bread));

const temp1 = localStorage.getItem(`bread`);
console.log(temp1);
console.log(typeof temp1);
const temp2 = JSON.parse(temp1);
console.log(temp2);

/* 연산자 typeof */

console.log(typeof 1);
console.log(typeof false);
console.log(typeof `빵`);
