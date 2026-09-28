const a = Array.from(`abcdefg`); // 구문법
const b = [...`abcdefg`]; // 신문법

console.log(a, b);

const listNode = document.querySelectorAll(`li`);
const list = Array.from(document.querySelectorAll(`li`));
const newList = [...document.querySelectorAll(`li`)];

console.log(listNode, list, newList);

const num = 1004;
Number.isInteger(num);
const numEx = num.toExponential();

console.log(num, numEx);
