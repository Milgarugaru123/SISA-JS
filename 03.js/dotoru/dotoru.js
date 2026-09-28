/*
menu: 
블랜드 커피, 280엔, s/m/l
아이스코히, 380엔, s/m/l
산도위치, 600엔, s/l

메뉴 고르기
사이즈 물어보기 (가격: s-그대로, m-10% 추가, l-20% 추가)
멤버쉽 있는지 물어보기
-> 주문하신 ~~ 메뉴 가격은 멤버쉽이면 10% 할인, 아니면 정가
*/

window.alert("DOUTOR에 어서오세요!");
window.alert("메뉴는 1: 블랜드 커피, 2: 아이스코히, 3: 산도위치 가 있습니다.");
// var menu = +window.prompt("주문하실 메뉴는 몇 번인가요? (1/2/3)");
const menu = +window.prompt("주문하실 메뉴는 몇 번인가요? (1/2/3)");
const size = window.prompt("사이즈는 어떻게 하시나요? (s/m/l)");
const member = window.prompt("멤버쉽 있으신가요? (y/n)");
var price = 0;
var is_valid = true;
// if (menu === 1) {
//   price = 280;
//   menu = "블랜드 커피";
// } else if (menu === 2) {
//   price = 380;
//   menu = "아이스코히";
// } else if (menu === 3) {
//   price = 600;
//   menu = "산도위치";
// } else {
//   console.log("없는 메뉴입니다.");
//   is_valid = false;
// }
// if (size === "s") {
// } else if (size === "m") {
//   price = price * 1.1;
// } else if (size === "l") {
//   price = price * 1.2;
// } else {
//   if (is_valid) console.log("존재하지 않는 사이즈입니다.");
//   is_valid = false;
// }
// if (member === "y") {
//   price = price * 0.9;
// } else if (member !== "n") {
//   if (is_valid) console.log("손님, 주문하기 싫으세요?");
//   is_valid = false;
// }

// if (is_valid) console.log(`주문하신 ${menu} 가격은 ${price.toFixed(2)}엔 입니다!`);
// else console.log("제대로 주문해주세요.");

const menu_1 = "블랜드 커피";
const menu_2 = "아이스코히";
const menu_3 = "산도위치";
const price_1 = 280;
const price_2 = 380;
const price_3 = 600;
const size_m = 1.1;
const size_l = 1.2;
const is_member = 0.9;
if (member === "y") {
  if (menu === 1) {
    if (size === "s") {
      console.log(
        `주문하신 ${menu_1}의 가격은 ${(is_member * price_1).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "m") {
      console.log(
        `주문하신 ${menu_2}의 가격은 ${(is_member * price_2 * size_m).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "l") {
      console.log(
        `주문하신 ${menu_3}의 가격은 ${(is_member * price_3 * size_l).toFixed(2)}엔 입니다.`,
      );
    }
  } else if (menu === 2) {
    if (size === "s") {
      console.log(
        `주문하신 ${menu_1}의 가격은 ${(is_member * price_1).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "m") {
      console.log(
        `주문하신 ${menu_2}의 가격은 ${(is_member * price_2 * size_m).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "l") {
      console.log(
        `주문하신 ${menu_3}의 가격은 ${(is_member * price_3 * size_l).toFixed(2)}엔 입니다.`,
      );
    }
  } else if (menu === 3) {
    if (size === "s") {
      console.log(
        `주문하신 ${menu_1}의 가격은 ${(is_member * price_1).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "m") {
      console.log(
        `주문하신 ${menu_2}의 가격은 ${(is_member * price_2 * size_m).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "l") {
      console.log(
        `주문하신 ${menu_3}의 가격은 ${(is_member * price_3 * size_l).toFixed(2)}엔 입니다.`,
      );
    }
  }
} else if (member === "n") {
  if (menu === 1) {
    if (size === "s") {
      console.log(`주문하신 ${menu_1}의 가격은 ${price_1}엔 입니다.`);
    } else if (size === "m") {
      console.log(
        `주문하신 ${menu_2}의 가격은 ${(price_2 * size_m).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "l") {
      console.log(
        `주문하신 ${menu_3}의 가격은 ${(price_3 * size_l).toFixed(2)}엔 입니다.`,
      );
    }
  } else if (menu === 2) {
    if (size === "s") {
      console.log(`주문하신 ${menu_1}의 가격은 ${price_1}엔 입니다.`);
    } else if (size === "m") {
      console.log(
        `주문하신 ${menu_2}의 가격은 ${(price_2 * size_m).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "l") {
      console.log(
        `주문하신 ${menu_3}의 가격은 ${(price_3 * size_l).toFixed(2)}엔 입니다.`,
      );
    }
  } else if (menu === 3) {
    if (size === "s") {
      console.log(`주문하신 ${menu_1}의 가격은 ${price_1}엔 입니다.`);
    } else if (size === "m") {
      console.log(
        `주문하신 ${menu_2}의 가격은 ${(price_2 * size_m).toFixed(2)}엔 입니다.`,
      );
    } else if (size === "l") {
      console.log(
        `주문하신 ${menu_3}의 가격은 ${(price_3 * size_l).toFixed(2)}엔 입니다.`,
      );
    }
  }
} else {
  console.log("잘못된 접근입니다.");
}
