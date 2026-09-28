const a = new Date();

console.log(a.getDate());
console.log(a.getDay());
console.log(a.getMonth() + 1);
console.log(a.getFullYear());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());

// 타임스탬프 (밀리초 단위) -> 날짜 차이 계산용
// 1970년도에서부터 몇 초 흘렀는가
console.log(a.getTime());
