const makeRamen = () => {
  console.log("물 끓이기.");
  console.log("스프 넣기.");
  console.log("라면 넣기.");
  console.log("보글보글 끓이기.");
  console.log("맛있게 먹기.");
};

// makeRamen();

const makeBuldak = () => {
  console.log("물 끓이기.");
  console.log("라면 넣기.");
  console.log("보글보글 끓이기.");
  console.log("물 버리기.");
  console.log("스프 넣고 비비기.");
  console.log("맛있게 먹기.");
};

// makeBuldak();

const makeRice = () => {
  console.log("쌀 넣기.");
  console.log("물 넣기.");
  console.log("쌀 씻기.");
  console.log("물 버리고 새 물 넣기.");
  console.log("쌀 불리기.");
  console.log("뚜껑 닫고 끓이기.");
  console.log("뜸 들이기.");
  console.log("🍽️맛있게 먹기🍽️");
};

// makeRice();

const ramen = () => {
  console.log("라면 넣기.");
  console.log("보글보글 끓이기.");
};

const normalRamen = () => {
  console.log("스프 넣기.");
  ramen();
};

const buldak = () => {
  ramen();
  console.log("물 버리기.");
  console.log("스프 넣고 비비기.");
};

const bibim = () => {
  ramen();
  console.log("물 버리기.");
  console.log("면 씻고 식히기.");
  console.log("스프 넣고 비비기.");
};

const makeRecipe = (recipe) => {
  console.log("물 끓이기.");
  recipe();
  console.log("🍽️맛있게 먹기🍽️");
};

makeRecipe(normalRamen);
makeRecipe(buldak);
makeRecipe(bibim);
