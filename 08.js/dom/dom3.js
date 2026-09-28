/*
유저에게 div 개수 입력받기
내용은 hello
backgroundColor: red, orange, yellow, green, blue, navy, indigo 반복
출력
*/

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "indigo",
  //   "violet",
];
const divLen = colors.length;
const fontColors = Array(divLen)
  .fill(0)
  .map((x, i) =>
    [..."1567"].some((x) => +x - 1 == i % divLen) ? "white" : "black",
  );

const divNum = +window.prompt("만들려는 div의 개수는?");

const rainbow = (tag, i) => {
  tag.innerHTML = "hello";
  tag.style.padding = "10px 20px";
  tag.style.backgroundColor = colors[i % divLen];
  tag.style.color = fontColors[i % divLen];
  tag.style.marginBottom = i % divLen === divLen - 1 ? "20px" : "0";
};

Array(divNum)
  .fill(0)
  .forEach((x, i) => {
    const block = document.createElement("div");
    rainbow(block, i);
    document.body.append(block);
  });
