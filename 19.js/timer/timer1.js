// 헬로우 버튼을 누르면 3초 뒤에 알럿으로 하이! 라는 문구 내보내기

const helloButton = document.createElement(`button`);
helloButton.innerHTML = `헬로우`;
helloButton.addEventListener(`click`, () => {
  setTimeout(() => {
    alert(`하이!`);
  }, 3000);
});
document.body.append(helloButton);

const timeButton = document.createElement(`button`);
timeButton.innerHTML = `현재 시간`;
timeButton.addEventListener(`click`, () => {
  setTimeout(() => {
    const today = new Date();
    alert(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
  }, 5000);
});
document.body.append(timeButton);
