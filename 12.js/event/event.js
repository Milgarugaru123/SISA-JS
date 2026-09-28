const btn = document.querySelector(`.btn`);
btn.style.cssText = `padding: 5px 20px; position: relative; left: 50%; cursor: pointer; margin-bottom: 10px`;

const dropdown = document.createElement(`div`);
dropdown.style.cssText = `width: 200px; height: 300px; border: 1px solid black; border-radius: 10px; position: relative; left: 50%;`;
dropdown.classList.add(`init_hidden`);

document.body.append(dropdown);

const chevron = document.querySelector(`#chevron`);
console.log(chevron);

btn.addEventListener(`click`, () => {
  dropdown.classList.toggle(`show`);
  chevron.classList.toggle(`upDown`);
});
