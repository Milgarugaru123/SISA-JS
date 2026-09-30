/* 브라우저에서 오래 걸리는 작업 (비동기) : setTimeout(), setInterval() */
// => 함수에 함수를 넣어서 순서를 보장
// => callback hell (2015년도 이전까지는 거의 이렇게 함)

/* 
promise: 비동기 작업의 성공 또는 실패를 알려주는 타입
-> state: fulfilled / rejected / pending
-> result: 값
*/

const a = new Promise((success, fail) => {
  //   success(`피자`);
  //   fail(`피자`);

  setTimeout(() => {
    success(`피자`);
  }, 10000);
});

console.log(a);

// a.then((x) => console.log(x));

const b = new Promise((success, fail) => {
  setTimeout(() => {
    fail(`치킨`);
  }, 3000);
});

b.then((x) => console.log(x));
b.catch((x) => console.log(x));
