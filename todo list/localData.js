// import dataJson from "./todoData.json" assert { type: "json" };
// console.log(dataJson);

export class Todo {
  #date;
  #desc;
  #isDone;
  #work;
  constructor(date, desc, work) {
    this.setTodo(date, desc);
    this.#isDone = false;
    this.setWork(work);
  }
  getTodo() {
    return { date: this.#date, desc: this.#desc };
  }
  setTodo(date = this.#date, desc = this.#desc) {
    this.#date = date;
    this.#desc = desc;
  }
  getIsDone() {
    return this.#isDone;
  }
  toggleIsDone() {
    this.#isDone = !this.#isDone;
  }
  getWork() {
    return this.#work;
  }
  setWork(work) {
    this.#work = work;
  }
}

// localStorage.clear();

export const initData = JSON.parse(localStorage.getItem(`todoData`));
console.log(initData);

export const todoData = [];

export const saveData = () => {
  localStorage.setItem(
    `todoData`,
    JSON.stringify(
      todoData.map((x) => {
        return {
          date: x.getTodo().date,
          desc: x.getTodo().desc,
          isDone: x.getIsDone(),
        };
      }),
    ),
  );
};

// export const saveData = () => {
//   const a = document.createElement(`a`);
//   const file = new Blob([todoData], { type: "text/plain" });
//   a.href = URL.createObjectURL(file);
//   a.download = `todoData.json`;
//   a.click();
// };
