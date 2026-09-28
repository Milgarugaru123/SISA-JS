/*
Todo 만들기
할 내용, 완료 여부, 데드라인
*/

class Todo {
  #work;
  #isDone;
  #deadline;
  constructor(work, deadline) {
    this.#work = work;
    this.#isDone = false;
    this.#deadline = deadline;
  }
}

// const todo = new Todo(`밥 먹기`, `2026-09-19`);
// console.log(todo);

const todoList = [];

const work = document.querySelector(`#work`);
const date = document.querySelector(`#date`);
const addBtn = document.querySelector(`#add`);
const loadBtn = document.querySelector(`#load`);

addBtn.addEventListener(`click`, () => {
  const todo = new Todo(work.value, date.value);
  todoList.push(todo);
});

loadBtn.addEventListener(`click`, () => {
  console.log(todoList);
});
