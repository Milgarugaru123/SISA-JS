// setTimeout() : 일정 시간 뒤에 실행
// setInterval() : 간격마다 반복

setInterval(() => {
  console.log(1);
}, 1000);

const timer = document.createElement(`p`);
timer.style.cssText = `font-size: 16;`;
const init_time = new Date();
timer.innerHTML = `${init_time.getHours()}:${init_time.getMinutes()}:${init_time.getSeconds()}`;
document.body.append(timer);

setInterval(() => {
  const now = new Date();
  timer.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}, 1000);

// console.log(
//   init_time
//     .toLocaleTimeString()
//     .split(/[오후전]/)
//     .splice(``),
// );
