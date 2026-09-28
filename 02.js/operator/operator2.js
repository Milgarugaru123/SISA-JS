// 나이 확인, 버스 요금 물어보기, 7살 이하는 무료, 8~19살은 30% 할인, 65세 이상은 30% 할인, 나머지 그냥
// 10000~99999 사이의 숫자, 각 자리의 합 나타내기, 벗어나면 오류

const age = Number(window.prompt("당신의 나이는?"));
const busCost = Number(window.prompt("버스 요금은 얼마인가요? (원)"));
const totalCost =
  age <= 7
    ? "무료"
    : 20 <= age && age <= 65
      ? busCost + "원"
      : Math.floor(busCost * 0.7) + "원";
console.log(`당신이 지불할 요금은 ${totalCost}입니다.`);

const num = Number(window.prompt("10000~99999 사이의 숫자 입력!"));
// const result1 =
//   num < 10000 || num > 99999
//     ? "오류! 범위 내 숫자를 입력하세요!"
//     : Math.floor(num / 10000) +
//       Math.floor((num % 10000) / 1000) +
//       Math.floor(((num % 10000) % 1000) / 100) +
//       Math.floor((((num % 10000) % 1000) % 100) / 10) +
//       ((((num % 10000) % 1000) % 100) % 10);
// console.log(`${result1}`);
const num_1 = num % 10;
const num_10 = ((num - num_1) / 10) % 10;
const num_100 = ((num - num_10 * 10 - num_1) / 100) % 10;
const num_1000 = ((num - num_100 * 100 - num_10 * 10 - num_1) / 1000) % 10;
const num_10000 =
  ((num - num_1000 * 1000 - num_100 * 100 - num_10 * 10 - num_1) / 10000) % 10;
const result2 = num_1 + num_10 + num_100 + num_1000 + num_10000;
console.log(
  `${num < 10000 || num > 99999 ? "오류! 범위 내 숫자를 입력하세요!" : result2}`,
);
