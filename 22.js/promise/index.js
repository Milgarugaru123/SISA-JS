/* 
피자 만들기
도우(3) -> 소스(2) -> 토핑(2) -> 치즈(1) -> 굽기(3) -> 완성(2)
프로미스 타입 이용
*/

const dough = () => {
  return new Promise((success, fail) => {
    console.log(`피자 주문!`);
    setInterval(() => {
      success(`도우 완성!`);
    }, 3000);
  });
};

const sauce = () => {
  return new Promise((success, fail) => {
    setInterval(() => {
      success(`소스 다 바름!`);
    }, 2000);
  });
};

const topping = () => {
  return new Promise((success, fail) => {
    setInterval(() => {
      success(`토핑 다 올림!`);
    }, 2000);
  });
};

const cheese = () => {
  return new Promise((success, fail) => {
    setInterval(() => {
      success(`치즈까지 완벽!`);
    }, 1000);
  });
};

const bake = () => {
  return new Promise((success, fail) => {
    setInterval(() => {
      success(`피자 굽는 중...`);
    }, 3000);
  });
};

const complete = () => {
  return new Promise((success, fail) => {
    setInterval(() => {
      success(`피자 완성!`);
    }, 2000);
  });
};

dough()
  .then((x) => {
    console.log(x);
    return sauce();
  })
  .then((x) => {
    console.log(x);
    return topping();
  })
  .then((x) => {
    console.log(x);
    return cheese();
  })
  .then((x) => {
    console.log(x);
    return bake();
  })
  .then((x) => {
    console.log(x);
    return complete();
  })
  .then((x) => {
    console.log(x);
  });
