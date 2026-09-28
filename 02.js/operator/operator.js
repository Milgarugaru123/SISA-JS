// 나이 물어보고, 20살 미만이면 미성년자, 아니면 성인
// 정수(숫자) 입력, 양의 정수, 0, 음의 정수 확인
// 정수(숫자) 입력, 홀수, 짝수 확인

const age = Number(window.prompt("당신의 나이는?"));
const num = Number(window.prompt("좋아하는 숫자(정수)는?"));

console.log(`당신은 ${age < 20 ? "미성년자" : "성인"}이군요.`);
console.log(
  `'${num}'는 ${num == 0 ? "0" : num < 0 ? "음의 정수" : "양의 정수"} 입니다.`,
);
const natNum = num < 0 ? num * -1 : num;
console.log(`'${natNum}'는 ${natNum % 2 == 0 ? "짝수" : "홀수"} 입니다.`);
