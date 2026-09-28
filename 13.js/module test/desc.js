import { desc } from "./query.js";

export const descData = `면 100% · 국내 생산 · 30일 무료 반품`;

if (!descData) desc.insertAdjacentHTML(`afterbegin`, `등록된 설명이 없습니다.`);
else desc.insertAdjacentHTML(`afterbegin`, descData);
