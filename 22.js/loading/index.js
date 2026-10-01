const img = document.querySelector(`.image`);
img.classList.remove(`image`);
const loader = document.querySelector(`.flower-spinner`);

const loading = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`image load complete.`);
    }, 3000);
  });
};

loading().then((x) => {
  console.log(x);
  loader.classList.add(`hidden`);
  img.classList.add(`image`);
  img.classList.remove(`hidden`);
});
