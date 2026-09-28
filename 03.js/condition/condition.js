// 유저에게 나이를 입력받고, 20살 이상이면 성인이시군요!
// 프로그램 종료!

const age = +window.prompt("나이 입력");
if (age >= 20) {
  console.log("성인이시군요!");
} else if (age >= 13) {
  console.log("미성년자시군요!");
} else {
  console.log("응애네 응애.");
}
console.log("프로그램 종료!");
