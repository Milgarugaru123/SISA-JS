const donchicken = {
  name: "돈치킨",
  location: "역삼역 어딘가",
  menu: { main: "후라이드", sub: "양념치킨", side: "미역국" },
};

console.log(donchicken.location);
console.log(donchicken["location"]);
console.log(donchicken.menu.side);
console.log(donchicken["menu"]["side"]);
console.log(donchicken.vip);

donchicken.vip = "나님";
console.log(donchicken.vip);
