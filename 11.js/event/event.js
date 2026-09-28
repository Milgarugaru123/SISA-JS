const btn = document.querySelector(`.btn`);

// btn.addEventListener(`click`, () => {
//   console.log(`직접 만드세요라~`);
//   console.log(` `);
// });

// btn.addEventListener(`mouseover`, () => {
//   console.log(`뭘 보슈?`);
// });

// 점메추 버튼
// 버튼을 누르면 오늘 점심은 돈치킨 메시지 출력

const btn2 = document.createElement(`button`);
btn2.insertAdjacentHTML(`afterbegin`, `점심 메뉴 추천`);
document.body.append(btn2);

btn2.addEventListener(`click`, () => {
  window.alert(`오늘 점심은 돈치킨입니다!`);
});

// 하트 버튼 만들기

const heart = document.createElement(`button`);
heart.style.cssText = `border: none; background-color: transparent; cursor: pointer`;
heart.insertAdjacentHTML(`afterbegin`, `♡`);
document.body.append(heart);

heart.addEventListener(
  `click`,
  () => (heart.innerHTML = heart.innerHTML === `♡` ? `♥` : `♡`),
);

// 숫자 증감 버튼 만들기

const minusBtn = document.createElement(`button`);
const num = document.createElement(`span`);
const plusBtn = document.createElement(`button`);

minusBtn.style.cssText = `font-size: 20px; border: 1px solid black; border-right: none; background-color: transparent; cursor: pointer; margin-left: 10px; padding: 10px;`;
minusBtn.insertAdjacentHTML(`afterbegin`, `-`);
num.style.cssText = `font-size: 18px; border-top: 1px solid black; border-bottom: 1px solid black; padding: 10px;`;
num.innerHTML = 0;
plusBtn.style.cssText = `font-size: 20px; border: 1px solid black; border-left: none; background-color: transparent; cursor: pointer; margin-right: 10px; padding: 10px;`;
plusBtn.insertAdjacentHTML(`afterbegin`, `+`);
document.body.append(minusBtn);
document.body.append(num);
document.body.append(plusBtn);

minusBtn.addEventListener(`click`, () => (num.innerHTML = +num.innerHTML - 1));
plusBtn.addEventListener(`click`, () => (num.innerHTML = +num.innerHTML + 1));

// 사각형 만들기 버튼
// 화면에 100px * 100px 배경 빨간색 박스 생성

const btn3 = document.createElement(`button`);
btn3.style.cssText = `margin: 0 auto; display: block;`;
btn3.insertAdjacentHTML(`afterbegin`, `사각형 만들기`);
document.body.append(btn3);

const rainbow = [
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `blue`,
  `indigo`,
  `purple`,
];

btn3.addEventListener(`click`, () => {
  const box = document.createElement(`div`);
  box.style.cssText = `width: 100px; height: 100px; background-color: ${rainbow[Math.floor(Math.random() * rainbow.length) % rainbow.length]}; margin: 20px; display: inline-block;`;
  document.body.append(box);
});
