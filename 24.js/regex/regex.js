// regex:  정규 표현식
// -> 문자(열) 패턴 찾기
//  -> string 상위 호환

const a = new RegExp();
/* `/패턴/플래그` */
const b = /abc/i;
// 플래그 g : global, 일치하는 것 전부 찾기
// 플래그 i : ignore, 대소문자 무시
// 플래그 m : 여러 줄

console.log(a, b.test(`abcdef`));
console.log(b.test(`qwer`));
console.log(b.test(`qwerabcqwer`));
console.log(b.test(`ABC`));
console.log(b.test(`a b c`));

const c = /^abc/; // 해당 문자로 시작
const d = /abc$/; // 해당 문자로 끝

console.log(c.test(`qwerabc`));
console.log(d.test(`qwerabc`));

// png 파일 검증
const png = /.png$/;
