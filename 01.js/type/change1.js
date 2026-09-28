/*
프롬프트로 유저에게
첫 번째 숫자 입력
두 번째 숫자 입력
각각 받은 뒤, 두 숫자의 합을 콘솔로 나타내기
*/

// const num1 = Number(window.prompt("더하려는 값을 입력해주세요."));
// const num2 = Number(window.prompt("하나 더."));
// console.log(`두 수(${num1}, ${num2})를 더한 값은 ${num1 + num2} 입니다.`);

/*
나이를 물어보고, 몇년생인지 맞추기!
몇 살인가요?
~~년생이시군요!
*/
// const year = new Date().getFullYear();
// const age = Number(window.prompt("몇 살이신가요?"));
// const birth_year = year - age + 1;
// console.log(`${birth_year}년생 이시군요!`);

// const a = 3 * 10; // 곱하기
// const b = 5 / 2; // 나누기
// const c = 3 ** 2; // 제곱
// console.log(a, b, c);

/*
일본 여행 경비 원화 입력:
엔화로 얼마 나오는지 콘솔로 출력
환율은 오늘 인터넷 확인
*/

const krw = Number(window.prompt("환전할 금액 입력 (##원)"));
const jpy = krw * 0.116;
console.log(`${krw}원은 엔화로 ${jpy.toFixed(2)}엔 입니다.`);
