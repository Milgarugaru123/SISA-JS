const a1 = /ab+c/; // + 앞의 문자가 1개 이상

console.log(a1.test(`abc`));
console.log(a1.test(`abbbbbbbbbbbbc`));
console.log(a1.test(`ac`));

const a2 = /ab?c/; // ? 앞의 문자가 있거나 없거나

console.log(a2.test(`abc`));
console.log(a2.test(`ac`));
console.log(a2.test(`a.c`));

const a3 = /ab{2}c/; // 해당 개수만큼 존재
const a4 = /ab{2,4}c/; // 해당 개수 범위내만큼 존재

const a5 = /[0-9]/;
const a6 = /\d/; // digit (숫자)

// 전화 번호 검증
const phone = /^01[01679]-?\d{4}-?\d{4}$/;
