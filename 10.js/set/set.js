// 타입의 연속
// string, number, boolean, undefined
// obj, arr, func, math, date, window, document, element + set

// 집합
const s = new Set();

s.add(1);
s.add(2);
s.add(3);
s.add(1);

console.log(s);
console.log(s.size);

const s1 = new Set();
s1.add("쿠키");
s1.add("아이스크림");
s1.add("커피");
s1.add("아이스크림");
console.log(s1);
console.log(s1.size);

const s2 = new Set();
s2.add();
s2.add(false);
s2.add(0);
s2.add({});
s2.add([]);
s2.add("");
s2.add(null);
console.log(s2);
console.log(s2.size);

const s3 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
const newList = [...s3];
console.log(s3, newList);
