/* 
프로미스 타입 이용
2초 뒤에 성공 함수를 실행 `토마토`
then 함수로 토마토 꿀맛! 출력
*/

/* 
input, button
-> 내용 포함 꿀맛 출력
*/

// const tomato = new Promise((success, fail) => {
//   setTimeout(() => {
//     success(`토마토`);
//   }, 2000);
// });

// tomato.then((x) => window.alert(`${x} 꿀맛!`));

const input = document.createElement(`input`);
input.placeholder = `좋아하는 음식?`;
input.style.cssText = `padding: 5px; margin-right: 10px;`;
const btn = document.createElement(`button`);
btn.style.cssText = `padding: 5px 10px`;
btn.innerHTML = `출력`;

document.body.append(input);
document.body.append(btn);

btn.addEventListener(`click`, () => {
  const fav = new Promise((success, fail) => {
    setInterval(() => {
      success(input.value);
      input.value = null;
    }, 2000);
  });
  fav.then((x) => window.alert(`${x} 꿀맛!`));
});
