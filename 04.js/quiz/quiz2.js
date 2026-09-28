// email 검사
// @ 포함 여부 확인
// .net .com .co.kr 등으로 끝나야 함
// 모두 소문자여야 함
// 숫자 0~9 사이 하나 포함해야 함

const makeEmail = window.prompt("~~ 이메일 주소 생성 ~~");
const emailEnd = [".net", ".com", ".co.kr"];

const emailVerify = (email) => {
  if (!email.includes("@")) {
    console.log(`이메일에 "@"가 없습니다.`);
    return;
  }
  if (email.split("@").length !== 2) {
    console.log(`이메일에 "@"는 한 번만 들어가야 합니다.`);
    return;
  }
  if (email !== email.toLowerCase()) {
    console.log(`이메일은 전부 소문자로 구성되어야 합니다.`);
    return;
  }
  if (
    !emailEnd.some((ends) => {
      return email.toLowerCase().endsWith(ends);
    })
  ) {
    console.log(
      `이메일은 반드시 ".net", ".com", ".co.kr" 중 하나로 끝나야 합니다.`,
    );
    return;
  }
  if (!/[0-9]/.test(email.split("@")[0])) {
    console.log(`이메일에는 0~9 사이의 값이 포함되어야 합니다.`);
    return;
  }
  return email;
};

const userEmail = emailVerify(makeEmail);

if (userEmail) console.log(userEmail + " 생성 완료!");
