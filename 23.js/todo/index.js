const work = document.querySelector(`.buttons input`);
const addBtn = document.querySelector(`.add`);
const removeBtn = document.querySelector(`.remove`);
const todoList = document.querySelector(`.list`);

addBtn.addEventListener(`click`, () => {
  const todoWork = document.createElement(`li`);
  todoWork.innerHTML = work.value;
  work.value = ``;
  todoList.appendChild(todoWork);
  localStorage.setItem(`savedTodos`, todoList.innerHTML);
});

removeBtn.addEventListener(`click`, () => {
  todoList.innerHTML = ``;
  localStorage.setItem(`savedTodos`, todoList.innerHTML);
});

// init
const prevData = localStorage.getItem(`savedTodos`) ?? ``;
// console.log(prevData);
todoList.innerHTML = prevData;
