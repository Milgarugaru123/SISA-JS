const email = document.querySelector(`#email`);
const pass = document.querySelector(`#password`);
const is_agreed = document.querySelector(`#agree`);
const loginBtn = document.querySelector(`.loginBtn`);
const errMes = document.querySelectorAll(`.err`);

email.addEventListener(`input`, () => {
  if (email.value.includes(`@`)) {
    email.classList.remove(`input_err`);
    errMes[0].classList.remove(`err_show`);
  }
});
pass.addEventListener(`input`, () => {
  if (pass.value.length >= 8) {
    pass.classList.remove(`input_err`);
    errMes[1].classList.remove(`err_show`);
  }
});
is_agreed.addEventListener(`click`, () => {
  is_agreed.checked ? errMes[2].classList.remove(`err_show`) : ``;
});
loginBtn.addEventListener(`click`, () => {
  if (!email.value.includes(`@`)) {
    email.classList.add(`input_err`);
    errMes[0].classList.add(`err_show`);
  } else {
    email.classList.remove(`input_err`);
    errMes[0].classList.remove(`err_show`);
  }
  if (pass.value.length < 8) {
    pass.classList.add(`input_err`);
    errMes[1].classList.add(`err_show`);
  } else {
    pass.classList.remove(`input_err`);
    errMes[1].classList.remove(`err_show`);
  }
  if (!is_agreed.checked) errMes[2].classList.add(`err_show`);
  else errMes[2].classList.remove(`err_show`);
  if (
    errMes[0].classList.length == 1 &&
    errMes[1].classList.length == 1 &&
    errMes[2].classList.length == 1
  ) {
    window.alert(`로그인 되었습니다!`);
    location.reload(true);
  }
});
