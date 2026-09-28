// 색상 파레트 만들기 (가로 5개)

const container = document.createElement("div");
container.style.cssText = `width: 100%; height: 100vh; display: grid; grid-template-columns: repeat(5, 1fr); justify-content: start`;
document.body.append(container);
document.body.style.margin = "0";

// const blockNum = 100;
const blockNum = +window.prompt("만들고 싶은 색상 파레트의 개수는?");

const randomStr =
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos distinctio vel possimus? Sapiente mollitia at nam. Architecto, aut harum et pariatur ducimus commodi alias facere suscipit ipsa excepturi, dignissimos eaque, laborum totam beatae eveniet hic quaerat consectetur? Sit aut dolorem placeat fugiat voluptas? Iusto dicta fugit facere rerum! Minus numquam dignissimos rerum illo consequatur possimus quam itaque quidem dolorem cupiditate, maxime quaerat ratione repudiandae labore, a exercitationem libero laudantium. Totam quisquam, tempora fugiat culpa, quae, iure sed cum maxime ipsa quaerat deserunt fugit eveniet incidunt quas saepe veritatis maiores corrupti officia ipsum consequatur nihil illum beatae? Unde laboriosam nihil aperiam, in veniam consequuntur quam quaerat iure dolore eveniet. Minima qui nulla, pariatur ad praesentium doloribus ducimus laborum deserunt itaque et possimus impedit officia? Quisquam laudantium, vitae odit magni perferendis praesentium inventore dolor temporibus, eaque repudiandae minima explicabo, accusantium atque asperiores laboriosam. Beatae error esse odio, veritatis voluptatum ipsa quibusdam quas exercitationem a officia amet placeat sit magnam aliquid obcaecati mollitia facilis. Exercitationem distinctio provident iste voluptatibus explicabo debitis similique nesciunt alias sequi necessitatibus atque fugit enim vero totam rerum voluptates, incidunt reprehenderit numquam, ratione, obcaecati consequatur minus quae sed? Voluptatibus aspernatur eius at beatae quam explicabo pariatur. Earum, maxime?`
    .split(/[ ,.?!]/)
    .filter((x) => x);
// console.log(randomStr);

const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rndColor = () => {
  const colorInt = rndInt(0, 0xffffff).toString(16);
  // console.log(colorInt.length);
  const colorIntFilled =
    colorInt.length === 6
      ? colorInt
      : Array(6)
          .fill(0)
          .map((x, i) =>
            i < 6 - colorInt.length ? "0" : colorInt[i - (6 - colorInt.length)],
          )
          .reduce((x, y) => x + y);
  // console.log(colorIntFilled);
  return "#" + colorIntFilled;
};
// console.log(rndColor());

Array(blockNum)
  .fill(0)
  .forEach(() => {
    const blockColor = rndColor();
    const block = document.createElement("div");
    block.style.cssText = `box-sizing: border-box; width: 100%; height: 23vh; display: flex; justify-content: end; align-items: end; padding: 0 10px; background-color: ${blockColor}; position: relative;`;
    container.appendChild(block);

    const colorName = document.createElement("p");
    colorName.style.cssText = `border-radius: 10px; color: white; background-color: rgba(0, 0, 0, 0.2); font-size: 16px; font-weight: bold; padding: 0 10px; `;
    colorName.innerHTML = randomStr[rndInt(0, randomStr.length)];
    block.appendChild(colorName);

    const colorHex = document.createElement("div");
    colorHex.innerHTML = blockColor;
    colorHex.style.cssText = `width: 100%; height: 100%; color: white; font-size: 20px; font-weight: bold; background-color: rgba(0, 0, 0, 0.2); display: flex; justify-content: center; align-items: center; opacity: 0; transition: all 0.3s; position: absolute; top: 0; left: 0`;
    colorHex.addEventListener(
      "mouseenter",
      () => (colorHex.style.opacity = "1"),
    );
    colorHex.addEventListener("mouseout", () => (colorHex.style.opacity = "0"));

    block.appendChild(colorHex);
  });
