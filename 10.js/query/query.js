const box = document.querySelector(".box");

console.log(box);
box.style.cssText = "background-color: turquoise;";
box.classList.add("sky");
console.log(box);

// 배열 비슷한 거 (배열은 아님) -> Node로 가져옴
const boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((x) => {
  x.style.backgroundColor = "blue";
  x.innerHTML = "확인";
});
