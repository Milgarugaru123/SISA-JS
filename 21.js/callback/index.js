/* 비동기 컨트롤 문법 */
/* 카페 주문 순서 */
// 주문 -> 결제 -> 제조 -> 수령

const orderCoffee = (menu, step) => {
  console.log(`${menu} 주문 완료!`);
  setTimeout(() => {
    step();
  }, 3000);
};

const payCoffee = (menu, step) => {
  console.log(`${menu} 결제 완료!`);
  setTimeout(() => {
    step();
  }, 3000);
};

const makeCoffee = (menu, step) => {
  console.log(`${menu} 제조 완료!`);
  setTimeout(() => {
    step();
  }, 3000);
};

const takeoutCoffee = (menu) => {
  console.log(`${menu} 수령 완료!`);
};

// setTimeout(() => {
//   orderCoffee(`아이스 아메리카노`);
// }, 2000);

// setTimeout(() => {
//   payCoffee(`아이스 아메리카노`);
// }, 5000);

// setTimeout(() => {
//   makeCoffee(`아이스 아메리카노`);
// }, 8000);

// setTimeout(() => {
//   takeoutCoffee(`아이스 아메리카노`);
// }, 11000);

const chosenMenu = `아이스 아메리카노`;

orderCoffee(chosenMenu, () => {
  payCoffee(chosenMenu, () => {
    makeCoffee(chosenMenu, () => {
      takeoutCoffee(chosenMenu);
    });
  });
});
