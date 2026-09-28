// 임의의 색상이 나오는 함수 만들기

const rndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const colorPick = () => {
  const r = rndInt(0, 255).toString(16);
  const g = rndInt(0, 255).toString(16);
  const b = rndInt(0, 255).toString(16);
  return (
    "#" +
    (r.length == 1 ? "0" + r : r.toUpperCase()) +
    (g.length == 1 ? "0" + g : g.toUpperCase()) +
    (b.length == 1 ? "0" + b : b.toUpperCase())
  );
};

const todayColor = colorPick();

console.log("오늘의 색상: " + todayColor);

const colorPalette = document.createElement("div");
colorPalette.style.cssText = `width: 100px; height: 100px; background-color: ${todayColor};`;

document.body.append(colorPalette);
