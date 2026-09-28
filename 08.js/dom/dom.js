/*
데이터 타입:
기본: string, boolean, number, undefined
참조: array, object, function + window(브라우저), document(HTML)
*/

const a1 = window.confirm("아무거나");
// const src1 = document.querySelectorAll("body");
console.log(a1);

const btn = document.createElement("button");
btn.innerHTML = "오늘은 수요일";

document.body.append(btn);

// div 태그 - 오늘 날짜
// h1 태그 - js & html
// 화면에 태그 나타나게

const today = document.createElement("div");
const _h1 = document.createElement("h1");
const date = new Date();
today.innerHTML = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
_h1.innerHTML = "js & html";

document.body.append(today);
document.body.append(_h1);
