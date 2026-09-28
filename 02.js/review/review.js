// 유저에게 정사각형의 한 변의 길이를 입력받으면 정사각형의 넓이, 둘레를 알려주기
// 원의 반지름 입력받고, 원의 넓이, 둘레 나타내기
// 정삼각형의 밑변과 높이를 각각 입력 받으면 넓이, 둘레 나타내기
// 몇 분인지 물어보고 초 단위로 변환하기

const squareLine = Number(window.prompt("정사각형 한 변의 길이는?"));
const cirRadius = Number(window.prompt("원의 반지름의 길이는?"));
const triBase = Number(window.prompt("정삼각형의 밑변의 길이는?"));
// const triHeight = Number(window.prompt("정삼각형의 높이는?"));
const min = Number(window.prompt("초로 변환하고자 하는 시간은 (분)?"));

console.log(`정사각형의 넓이: ${squareLine ** 2}, 둘레: ${4 * squareLine}`);
const cirVol = cirRadius ** 2 * 3.14;
const cirRad = 2 * cirRadius * 3.14;
console.log(`원의 넓이: ${cirVol.toFixed(2)}, 둘레: ${cirRad.toFixed(2)}`);
// console.log(
//   `정삼각형의 넓이: ${(triBase * triHeight) / 2}, 둘레: ${3 * triBase}`,
// );
const triVol = (triBase ** 2 * Math.sin(Math.PI / 3)) / 2;
console.log(`정삼각형의 넓이: ${triVol.toFixed(2)}, 둘레: ${3 * triBase}`);
console.log(`${min} 분 -> ${60 * min} 초`);
