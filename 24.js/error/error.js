/*
에러: "고장남" 
js에서의 에러: "뭔가 잘못됨"
*/

/* 
3대 에러

1. compiler error (실행 전, 코드 문법) -> js, python은 못 잡음
2. runtime error (실행 중) -> "우리 역할"
3. context error (실행 후) -> 별도의 테스터가 알아서 찾아줌
*/

const err1 = new Error(`아아 시켰는데 뜨아 나옴.`);

// console.log(err1);
// throw err1;

/* 에러 -> [예외 처리] */
const toAge = (age) => {
  const n = Number(age);
  if (Number.isNaN(n)) throw new Error(`숫자를 입력해 주세요.`);
  if (n < 0) throw new Error(`나이는 음수일 수 없음.`);
  if (!Number.isInteger(n)) throw new Error(`나이는 정수로만 받습니다.`);
  return n;
};

const age = toAge(window.prompt(`나이는?`));
