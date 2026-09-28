// 타입캐스팅 & 생성자 함수

// Object() -> 구문법이라 잘 안 씀

// Array() -> 얘는 필요에 따라 씀
const arr = Array(100)
  .fill(0)
  .map((x, i) => (x = i + 1));

console.log({ arr });

// 오브젝트의 key == value인 경우에는 {key}로만 적어도 가능

// .forEach() -> 훑기 / 스키밍 / 순회
arr.forEach((x) => {});
