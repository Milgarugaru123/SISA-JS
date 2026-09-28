const atag = document.querySelector(`#a`);

console.log(atag.dataset);

const date = document.querySelector(`#date`);
const dateText = document.createElement(`span`);
dateText.style.cssText = `width: 300px; height: auto; font-size: 24px; font-weight: bold; padding: 20px;`;
const today = new Date();
date.value = `${today.getFullYear()}-${(today.getMonth() + 1).toString().length === 1 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1}-${today.getDate().toString().length === 1 ? "0" + today.getDate() : today.getDate()}`;
dateText.innerHTML = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
date.addEventListener(`change`, (e) => {
  console.log([date.value.split(`-`)]);
  const [year, month, day] = date.value.split(`-`);
  dateText.innerHTML = `${year}년 ${month}월 ${day}일`;
});

document.body.append(dateText);
