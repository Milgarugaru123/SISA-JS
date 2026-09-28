/*
일본어 점수 입력
100점 만점 중에,
90점 이상 A
80점 이상 B
70점 이상 C 
60점 이상 D
그 외는 스미마셍
*/

/*
놀이동산 입장료
나이 물어보기
7세 미만은 무료
7~12세는 5000원
13~19세는 10000원
성인은 15000원
*/

const jp_score = +window.prompt("일본어 점수는? (0~100)");
if (jp_score < 0 || jp_score > 100) {
  console.log("올바른 점수를 입력해주세요.");
} else if (jp_score >= 90) {
  console.log(`${jp_score}점이면, A 등급이네요.`);
} else if (jp_score >= 80) {
  console.log(`${jp_score}점이면, B 등급이네요.`);
} else if (jp_score >= 70) {
  console.log(`${jp_score}점이면, C 등급이네요.`);
} else if (jp_score >= 60) {
  console.log(`${jp_score}점이면, D 등급이네요.`);
} else {
  console.log("스미마셍");
}

const age = +window.prompt("당신의 나이는?");
if (age <= 0) {
  console.log("살아는 계신가요?");
} else if (age < 7) {
  console.log("입장료는 무료입니다.");
} else if (age <= 12) {
  console.log("입장료는 5000원입니다.");
} else if (age <= 19) {
  console.log("입장료는 10000원입니다.");
} else {
  console.log("입장료는 15000원입니다.");
}
