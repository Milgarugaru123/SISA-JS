/*
이름, mbti, 나이, 생년월일, 최애 애니를 각 변수로 입력받고,
결과를 아래와 같이 나타내기

제 이름은 ~~이고, mbti는 ~~입니다.
나이는 ~~살이고, 생년월일은 ~~입니다.
최애 애니는 ~~ 입니다. 요로시쿠!
*/

const name = window.prompt("이름?");
const mbti = window.prompt("mbti?");
const age = window.prompt("나이?");
const birth_date = window.prompt("생년월일?");
const fav_anime = window.prompt("최애 애니?");

console.log(`제 이름은 ${name}이고, mbti는 ${mbti}입니다.`);
console.log(`나이는 ${age}살이고, 생년월일은 ${birth_date}입니다.`);
console.log(`최애 애니는 ${fav_anime} 입니다. 요로시쿠!`);

console.log(`
    제 이름은 ~~이고, mbti는 ~~입니다.
나이는 ~~살이고, 생년월일은 ~~입니다.
최애 애니는 ~~ 입니다. 요로시쿠!
    `);
