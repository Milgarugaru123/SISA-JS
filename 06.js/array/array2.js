const students = [
  {
    name: "남도일",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["회화", "문법", "단어"],
  },
  {
    name: "이준우",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["실무", "회화", "단어"],
  },
  {
    name: "핫삼",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["한문", "실무", "회화"],
  },
];

const studentsID = students.map((x, i) => {
  return {
    no: "00" + (i + 1),
    name: x.name,
    itBooks: x.itBooks.map((x, i) => {
      return { name: x, no: "00" + (i + 1), booksLength: x.length };
    }),
    japaneseBooks: x.japaneseBooks.map((x) => {
      return { name: x };
    }),
  };
});

console.log(studentsID);
