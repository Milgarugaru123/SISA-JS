// 🥚 🐣 🐤 🐔 🍗
// 버튼 치킨 만들기!
// 클릭하면 각각 1~3 / 2~4 / 2~4 / 3~5 / 1~3

const btn = document.createElement(`button`);
btn.style.cssText = `border: 2px solid orange; border-radius: 12px; background-color: yellow; display: block; padding: 5px 10px; margin: 30px auto; cursor: pointer;`;
btn.innerHTML = `뵹아리 키우기! ~`;
document.body.append(btn);

const chickAge = [`🥚`, `🐣`, `🐤`, `🐔`, `🍗`];

const petChicken = document.createElement(`div`);
petChicken.style.cssText = `font-size: 50px; text-align: center; padding: 5px 10px; pointer-events: none;`;
document.body.append(petChicken);

const egg = (step) => {
  petChicken.innerHTML = chickAge[0];
  setTimeout(
    () => {
      step();
    },
    (Math.random() * 2 + 1) * 1000,
  );
};

const hatch = (step) => {
  petChicken.innerHTML = chickAge[1];
  setTimeout(
    () => {
      step();
    },
    (Math.random() * 2 + 2) * 1000,
  );
};

const chick = (step) => {
  petChicken.innerHTML = chickAge[2];
  setTimeout(
    () => {
      step();
    },
    (Math.random() * 2 + 2) * 1000,
  );
};

const hen = (step) => {
  petChicken.innerHTML = chickAge[3];
  setTimeout(
    () => {
      step();
    },
    (Math.random() * 2 + 3) * 1000,
  );
};

const chicken = () => {
  petChicken.innerHTML = chickAge[4];
};

btn.addEventListener(`click`, () => {
  egg(() => {
    hatch(() => {
      chick(() => {
        hen(() => {
          chicken();
        });
      });
    });
  });
});
