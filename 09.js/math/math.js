/* 참조 데이터 타입 추가되는 중: element, math */

const myCar = {
  name: "Porsche",
  model: "don't know",
  speedUp(x) {
    console.log(`${x}속도 올림`);
  },
};
myCar.speedUp(1);

console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.floor(3.14));
console.log(Math.ceil(5.3));
console.log(Math.random());

Math.random();

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(9, 0));
console.log(randomInt(50, 1));
