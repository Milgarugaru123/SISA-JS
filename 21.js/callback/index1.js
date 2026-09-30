/* 피자 만들기 */
/* 
1. 도우 만들기
2. 소스 바르기
3. 토핑 올리기
4. 치즈 뿌리기
5. 굽기
6. 피자 완성
*/

class Pizza {
  #menu;
  #dough;
  #sauce;
  #topping;
  #cheese;
  constructor(menu, dough, sauce, topping, cheese) {
    this.#menu = menu;
    this.#dough = dough;
    this.#sauce = sauce;
    this.#topping = topping;
    this.#cheese = cheese;
  }
  order(step) {
    console.log(`${this.#menu} 피자 주문이요.`);
    setTimeout(() => {
      step();
    }, 2000);
  }
  dough(step) {
    console.log(`${this.#dough} 도우 펴는 중...`);
    setTimeout(() => {
      step();
    }, 3000);
  }
  sauce(step) {
    console.log(`${this.#sauce} 소스 바르는 중...`);
    setTimeout(() => {
      step();
    }, 2000);
  }
  topping(step) {
    console.log(`${this.#topping} 토핑 추가하는 중...`);
    setTimeout(() => {
      step();
    }, 1000);
  }
  cheese(step) {
    console.log(`${this.#cheese} 치즈 뿌리는 중...`);
    setTimeout(() => {
      step();
    }, 1000);
  }
  bake(step) {
    console.log(`피자 굽는 중...`);
    setTimeout(() => {
      console.log(`시간이 조금 걸릴 수 있습니다.`);
    }, 2000);
    setTimeout(() => {
      step();
    }, 5000);
  }
  complete() {
    console.log(`${this.#menu} 피자 완성!`);
  }
}

const pizzaIng = {
  dough: [`치즈 크러스트`, `씬`, `??`],
  sauce: [`토마토`, `굴`, `??`],
  topping: [`페퍼로니`, `새우`, `파인애플`, `??`],
  cheese: [`모짜렐라`, `체다`, `파마산`, `??`],
};

const hawaiian = new Pizza(
  `하와이안`,
  pizzaIng.dough[1],
  pizzaIng.sauce[0],
  pizzaIng.topping[2],
  pizzaIng.cheese[2],
);

hawaiian.order(() => {
  hawaiian.dough(() => {
    hawaiian.sauce(() => {
      hawaiian.topping(() => {
        hawaiian.cheese(() => {
          hawaiian.bake(() => {
            hawaiian.complete();
          });
        });
      });
    });
  });
});
