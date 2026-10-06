const obj = {
  name: `kim`,
  age: 30,
  skills: [`JAVA`, `javascript`],
};
const a = JSON.stringify(obj);
console.log(a);

/* parse : 해석하기 */
const b = JSON.parse(`{"name":"kim","age":30,"skills":["JAVA","javascript"]}`);
console.log(b);
