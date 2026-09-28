const btn = document.createElement(`button`);
btn.style.cssText = `font-size: 16px; width: 100px; padding: 10px 0; border-radius: 100px;`;
btn.insertAdjacentHTML(`afterbegin`, `🌙 어둡게`); // 🌙, ☀️
document.body.append(btn);

document.body.cssText = `transition: all 0.3s`;
// const darkMode = document.toggle(`dark`);
// darkMode.style.cssText = `background-color: black`;

const title = document.querySelector(`.title`);
title.style.cssText = `font-size: 30px; font-weight: 700; margin: 20px 200px 0 20px;`;
const lightMode = [true];

btn.addEventListener(`click`, () => {
  if (lightMode[0]) {
    lightMode[0] = false;
    document.body.style.backgroundColor = `black`;
    // document.body.toggle(`dark`);
    btn.innerHTML = `☀️ 밝게`;
    title.style.color = `white`;
  } else {
    lightMode[0] = true;
    document.body.style.backgroundColor = `white`;
    btn.innerHTML = `🌙 어둡게`;
    title.style.color = `black`;
  }
});
