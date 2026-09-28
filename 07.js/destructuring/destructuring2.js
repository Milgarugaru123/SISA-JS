const std = {
  name: "윤정은",
  age: 29,
  mbit: "enfp",
  parttime: ["코인노래방", "옷가게", "도토루 커피"],
};

const { name, mbti, parttime } = std;
const [coin, _, coffee] = parttime;

console.log(coin, coffee);
