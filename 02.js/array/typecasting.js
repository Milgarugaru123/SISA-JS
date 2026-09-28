// 명시적 타입캐스팅: Boolean(), Number(), String()
// 암묵적 타입캐스팅:
//      Boolean: ! -> !!를 Boolean() 대신 사용하기도 함 / 비교연산자
//      Number: string 데이터 앞에 '+' 붙임
//      String: "" + ~~

const a = "" + 1 + 2 + 3 + +"4";
console.log(a);

const b1 = true && true && "test1";
const b2 = false && "test2";
const b3 = window.prompt("이름");
const b4 = b3 || "test3";
const b5 = window.prompt("비밀번호");
const b6 = b5 == 1234 && "로그인 성공!";
console.log(`${b1} ${b2} ${b4} ${b6}`);
