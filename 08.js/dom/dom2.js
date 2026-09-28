// 유저에게 만들고 싶은 버튼 개수 물어보기
// 내용은 '안녕!'
// 버튼 개수만큼 출력

const card = document.createElement("div");
card.style.width = "50%";
card.style.height = "500px";
card.style.display = "flex";
card.style.flexFlow = "row wrap";
card.style.backgroundColor = "lightgray";
document.body.append(card);

const btnNum = +window.prompt("만들고 싶은 버튼의 개수는?");
Array(btnNum)
  .fill(0)
  .forEach(() => {
    const btn = document.createElement("button");
    btn.innerHTML = "안녕!";
    document.body.append(btn);
  });
