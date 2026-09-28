import { qna, qnaBtn } from "./query.js";

export const qnaData = [];

qnaBtn
  .querySelector(`.count`)
  .insertAdjacentHTML(`afterbegin`, `(${qnaData.length})`);

if (qnaData.length === 0)
  qna.insertAdjacentHTML(`afterbegin`, `등록된 문의가 없습니다.`);
else {
  qnaData.forEach((x) => {
    qna.insertAdjacentHTML(`afterbegin`, x.qna);
  });
}
