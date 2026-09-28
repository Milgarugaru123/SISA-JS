const nums = [2026, 9, 4, 9, 19]; //년, 월, 일, 시, 분

// push: 뒤에 넣기
// pop: 뒤에서 하나 빼기
// unshift: 앞에 넣기
// shift: 앞에 빼기
// includes: 포함 여부 확인
// slice: 자르기
nums.push(1);
nums.push(2);
nums.push(3);
nums.pop();
const a1 = nums.includes(19);
const a2 = nums.slice(3);

console.log(nums, a1, a2);
