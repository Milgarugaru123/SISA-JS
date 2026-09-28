import { review, reviewBtn } from "./query.js";

export const reviewData = [
  {
    rate: 5,
    desc: `배송 빨라요. 색도 사진이랑 똑같음. 그렇다면 두 줄이 되ㅕㄴ 어닝ㄹ험ㄴㅇㅎㅁㅇㄶ문ㅇ히`,
  },
  { rate: 4, desc: `사이즈가 살짝 큰 편이에요.` },
];

reviewBtn
  .querySelector(`.count`)
  .insertAdjacentHTML(`afterbegin`, `(${reviewData.length})`);

if (reviewData.length === 0)
  review.insertAdjacentHTML(`afterbegin`, `등록된 리뷰가 없습니다.`);
else {
  reviewData.forEach((x) => {
    const reviewBox = document.createElement(`div`);
    reviewBox.style.cssText = `width: 100%; height: auto; display: flex; gap: 10px; align-items: center; margin-top: 16px;`;
    const reviewRate = document.createElement(`span`);
    reviewRate.style.color = `orange`;
    reviewRate.innerHTML = `★`.repeat(x.rate) + `☆`.repeat(5 - x.rate);
    const reviewDesc = document.createElement(`span`);
    reviewDesc.innerHTML = x.desc;

    review.appendChild(reviewBox);
    reviewBox.appendChild(reviewRate);
    reviewBox.appendChild(reviewDesc);
  });
}
