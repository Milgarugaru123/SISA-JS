// const box = document.querySelector(`.box`);
// box.addEventListener(`mouseover`, (e) => {
//     console.log(e);
//     console.log(e.target.style);
// });

const input = document.querySelector(`#input`);
const count = document.querySelector(`.count`);
count.innerHTML = `0 / 100`;
input.addEventListener(`input`, () => {
  console.log(input.value);
  if (input.value.length > 100) {
    const limits = [...input.value].splice(0, 100).reduce((x, y) => x + y);
    console.log(limits);
    input.value = limits;
  } else count.innerHTML = `${input.value.length} / 100`;
});

const pass = document.querySelector(`#password`);
const passBtn = document.createElement(`button`);
passBtn.innerHTML = `보기`;
passBtn.addEventListener(`click`, () => {
  if (pass.type === `password`) {
    pass.type = `input`;
    passBtn.innerHTML = `숨기기`;
  } else {
    pass.type = `password`;
    passBtn.innerHTML = `보기`;
  }
  //   pass.classList.toggle(`show`);
});

document.body.append(passBtn);
