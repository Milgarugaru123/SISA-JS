// 유저 아이디 만들기
// 아이디 길이가 4~12글자 사이가 아니면 -> 길이 수정 요구
// 아이디에서 !@# 중 하나라도 없으면 -> 특수문자 !@# 중 하나 포함 요구
// 아이디에서 0~3번째 글자가 대문자가 아니면 -> 0~3번째 글자는 대문자 요구
// 전부 만족하면 아이디 생성

const makeId = window.prompt("~~ 아이디 생성 ~~");

const idVerify = (id) => {
  if (id.length < 4 || id.length > 12) {
    console.log("아이디는 4~12자리 사이의 글자 수로 만들어주세요!");
    return;
  }
  if (!(id.includes("!") || id.includes("@") || id.includes("#"))) {
    console.log(`아이디에 "!", "@", "#" 중 하나를 반드시 넣어주세요!`);
    return;
  }
  //   정규식 사용 (regex.test(""))
  if (!/[A-Z]/.test(id.slice(0, 4))) {
    console.log("1~4번째 자리는 대문자로 입력해주세요!");
    return;
  }
  //   전부 대문자인 경우
  //   if (id.slice(0, 4) != id.slice(0, 4).toUpperCase()) {
  //     console.log("1~4번째 자리는 대문자로 입력해주세요!");
  //     return;
  //   }
  return id;
};

const userId = idVerify(makeId);

if (userId) {
  console.log(userId);
}
