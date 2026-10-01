// 비동기: 오래걸리는 작업들 [setTimeout, 서버]
// promise

/* 
요청해야 응답함
request [HTTPS/API] & response [JSON]
*/

// fetch("https://dummyjson.com/recipes")
//   .then((res) => res.json())
//   .then((x) => {
//     console.log(x);
//   });

fetch(`https://dummyjson.com/products`)
  .then((x) => x.json())
  .then((x) => {
    console.log(x);
  });

const btn = document.querySelector(`.data_btn`);
const loader = document.querySelector(`.loader`);
const rend = document.querySelector(`.rend`);

const dataFetch = () => {
  fetch(`https://dummyjson.com/products`)
    .then((x) => x.json())
    .then((x) => {
      return x.products.map((product) => product.title);
    })
    .then((x) => {
      loader.classList.add(`hidden`);
      rend.innerHTML = ``;
      x.forEach((title) => {
        rend.insertAdjacentHTML(`beforeend`, `${title}<br />`);
      });
      rend.classList.remove(`hidden`);
      // console.log(x);
    })
    .catch((x) => {
      console.log(`Error: ${x}`);
    });
};

btn.addEventListener(`click`, () => {
  loader.classList.remove(`hidden`);
  rend.innerHTML = ``;
  rend.classList.add(`hidden`);
  dataFetch();
});
