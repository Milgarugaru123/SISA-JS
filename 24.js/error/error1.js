// throw new TypeError(`ㄹㅇ`);

const arr = [1, 2, 3, 4, 5];
// arr.toUpperCase();
// ark.toUpperCase();

const toAge = (age) => {
  const n = Number(age);
  if (Number.isNaN(n)) throw new Error(`숫자를 입력해 주세요.`);
  if (n < 0) throw new Error(`나이는 음수일 수 없음.`);
  if (!Number.isInteger(n)) throw new Error(`나이는 정수로만 받습니다.`);
  return n;
};

try {
  const a = `hello`;
  a.map();
  //   console.log(a.toUpperCase());
} catch (e) {
  // 에러 발생 시, 이쪽 코드 실행
  console.log(`에러 펌핑`);
} finally {
  // 에러 발생 여부랑 상관 없이 반드시 실행됨.
  console.log(`파이널`);
}
