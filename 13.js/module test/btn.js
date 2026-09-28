import { desc, review, qna, descBtn, reviewBtn, qnaBtn } from "./query.js";

const toggleShow = (x, xBtn) => {
  desc.classList.add(`hidden`);
  review.classList.add(`hidden`);
  qna.classList.add(`hidden`);
  x.classList.remove(`hidden`);

  descBtn.classList.remove(`chosen`);
  reviewBtn.classList.remove(`chosen`);
  qnaBtn.classList.remove(`chosen`);
  xBtn.classList.add(`chosen`);
  x.classList.remove(`hover`);
};

const toggleHover = (x, xBtn) => {
  x.classList.contains(`hidden`)
    ? xBtn.classList.add(`hover`)
    : xBtn.classList.remove(`hover`);
};

descBtn.addEventListener(`mouseover`, () => {
  toggleHover(desc, descBtn);
});

reviewBtn.addEventListener(`mouseover`, () => {
  toggleHover(review, reviewBtn);
});

qnaBtn.addEventListener(`mouseover`, () => {
  toggleHover(qna, qnaBtn);
});

descBtn.addEventListener(`mouseout`, () => {
  descBtn.classList.remove(`hover`);
});

reviewBtn.addEventListener(`mouseout`, () => {
  reviewBtn.classList.remove(`hover`);
});

qnaBtn.addEventListener(`mouseout`, () => {
  qnaBtn.classList.remove(`hover`);
});

descBtn.addEventListener(`click`, () => {
  toggleShow(desc, descBtn);
});

reviewBtn.addEventListener(`click`, () => {
  toggleShow(review, reviewBtn);
});

qnaBtn.addEventListener(`click`, () => {
  toggleShow(qna, qnaBtn);
});
