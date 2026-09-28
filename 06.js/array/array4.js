const students = [
  { name: "윤정은", age: 30, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTJ" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "ISTP" },
];

/*
나이 29살 이상만 남기기 + birthyear(년생) 추가
MBTI 성향 I인 사람만 남기기 + {tendency: "내향적"} 추가
*/

const newStd1 = students
  .filter((x) => x.age >= 29)
  .map((x) => {
    x.birthyear = new Date().getFullYear() - x.age + 1;
    return x;
  });
const newStd2 = students
  .filter((x) => x.mbti[0] === "I")
  .map((x) => {
    x.tendency = "내향적";
    return x;
  });

console.log(newStd1, newStd2);
