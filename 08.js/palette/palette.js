// 색상 파레트 만들기 (가로 5개)

const container = document.createElement("div");
container.style.cssText = `width: 100%; height: 100vh; display: grid; grid-template-columns: repeat(5, 1fr); justify-items: center`;
document.body.append(container);

const blockNum = 100;
const randomStr =
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos distinctio vel possimus? Sapiente mollitia at nam. Architecto, aut harum et pariatur ducimus commodi alias facere suscipit ipsa excepturi, dignissimos eaque, laborum totam beatae eveniet hic quaerat consectetur? Sit aut dolorem placeat fugiat voluptas? Iusto dicta fugit facere rerum! Minus numquam dignissimos rerum illo consequatur possimus quam itaque quidem dolorem cupiditate, maxime quaerat ratione repudiandae labore, a exercitationem libero laudantium. Totam quisquam, tempora fugiat culpa, quae, iure sed cum maxime ipsa quaerat deserunt fugit eveniet incidunt quas saepe veritatis maiores corrupti officia ipsum consequatur nihil illum beatae? Unde laboriosam nihil aperiam, in veniam consequuntur quam quaerat iure dolore eveniet. Minima qui nulla, pariatur ad praesentium doloribus ducimus laborum deserunt itaque et possimus impedit officia? Quisquam laudantium, vitae odit magni perferendis praesentium inventore dolor temporibus, eaque repudiandae minima explicabo, accusantium atque asperiores laboriosam. Beatae error esse odio, veritatis voluptatum ipsa quibusdam quas exercitationem a officia amet placeat sit magnam aliquid obcaecati mollitia facilis. Exercitationem distinctio provident iste voluptatibus explicabo debitis similique nesciunt alias sequi necessitatibus atque fugit enim vero totam rerum voluptates, incidunt reprehenderit numquam, ratione, obcaecati consequatur minus quae sed? Voluptatibus aspernatur eius at beatae quam explicabo pariatur. Earum, maxime?`
    .split(/[ ,.?!]/)
    .filter((x) => x);
// console.log(randomStr);

document.body.style.margin = "0";

Array(blockNum)
  .fill(0)
  .forEach(() => {
    const block = document.createElement("div");
    block.style.cssText = `box-sizing: border-box; width: 100%; height: 23vh; display: flex; justify-content: end; align-items: end; padding: 0 10px`;
    const colorR = Math.random() * 255;
    const colorG = Math.random() * 255;
    const colorB = Math.random() * 255;
    block.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    container.appendChild(block);

    const colorName = document.createElement("p");
    colorName.style.cssText = `border-radius: 10px;color: white; background-color: rgba(0, 0, 0, 0.2); font-size: 16px; font-weight: bold; padding: 0 10px; `;
    colorName.innerHTML =
      randomStr[Math.floor(Math.random() * randomStr.length)];
    block.appendChild(colorName);
  });
