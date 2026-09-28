const arr = [2, 4, 6, 8, 10];

const double = (x) => {
  return x * 2;
};
// const double = (x) => x * 2;

const doubledArray = arr.map(double);
// const doubledArray = arr.map((x) => x * 2);
console.log(doubledArray);

const coffee = ["아메리카노", "라떼", "모카", "프라푸치노"];
const test = coffee.map((x, i) => `${i + 1}. ${x}`);
console.log(test);

const student = [
  { name: "김나단", age: 31 },
  { name: "이민욱", age: 29 },
  { name: "윤정은", age: 30 },
];
const studentID = student.map((x, i) => {
  return { no: i, name: x.name, age: x.age };
});
// const studentID = student.map((x, i) => {
//   x.no = i;
//   return x;
// });
console.log(studentID);
