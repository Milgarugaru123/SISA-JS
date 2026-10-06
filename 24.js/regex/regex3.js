/* 2026-10-06 정규표현식 */

const today = /^2\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

console.log(today.test(window.prompt(`날짜 입력`)));

const a = /[가-힣]/; // 한글 전체
