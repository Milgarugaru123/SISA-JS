const company = [
  { name: "씨엘제로", location: "오사카" },
  { name: "라쿠텐", location: "도쿄" },
  { name: "메루카리", location: "도쿄" },
];

const companyID = company.map((x, i) => {
  return { no: "00" + (i + 1), name: x.name, location: x.location };
});

console.log(companyID);

const japanClass = [
  { name: "A반", level: "basic", students: ["남도일", "이준우", "핫삼"] },
  { name: "B반", level: "advance", students: ["김전일", "김이박", "삼도천"] },
];

const japanClassID = japanClass.map((x, i) => {
  return {
    no: i + 1,
    name: x.name,
    level: x.level,
    students: x.students.map((x, i) => {
      return {
        no: i + 1,
        name: x,
      };
    }),
  };
});

console.log(japanClassID);
