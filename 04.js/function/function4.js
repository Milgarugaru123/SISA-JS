const activeSkill = (skill) => {
  console.log("스킬 발동 준비");
  skill();
  console.log("발동 완료");
};

const fire = () => {
  console.log("불 마법 발동");
};
const ice = () => {
  console.log("얼음 마법 발동");
};
const light = () => {
  console.log("빛 공격");
};

activeSkill(light);
activeSkill(ice);
activeSkill(fire);
