const a1 = /a[bd]c/; // abc 또는 adc 찾기
const a2 = /a[a-z]c/; // a?c 찾기

console.log(a1.test(`abc`));
console.log(a1.test(`acc`));
console.log(a2.test(`ahc`));
console.log(a2.test(`aAc`));

const a3 = /a[^b]c/; // b를 제외한 a?c 찾기

console.log(a3.test(`aAc`));
console.log(a3.test(`a8c`));
console.log(a3.test(`abc`));

const a4 = /a.c/;

console.log(a4.test(`a찬c`));
console.log(a4.test(`aつc`));
console.log(a4.test(`a c`));
console.log(a4.test(`ac`));
