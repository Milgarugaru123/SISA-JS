import {
  date,
  progressLabel,
  progressBar,
  todo,
  addTodoBtn,
  distSelected,
  allWorks,
  worksLeft,
  worksDone,
  works,
  noWorks,
  noDesc,
  noSub,
  deleteAllBtn,
} from "./query.js";
import "./localData.js";
import { Todo, initData, todoData, saveData } from "./localData.js";

const weekdays = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];
const today = new Date();

const todoDoneCount = () =>
  todoData.filter((x) => x.getIsDone() === true).length;

const progressUpdate = () => {
  progressBar.value = todoDoneCount();
  progressBar.max = todoData.length;
  if (!todoData.length) {
    progressLabel.innerHTML = `적어둔 일이 없어요...`;
  } else if (todoData.length === progressBar.value) {
    progressLabel.innerHTML = `${todoData.length}개 전부 끝냈어요!`;
  } else {
    progressLabel.innerHTML = `${todoData.length}개 중 ${progressBar.value}개 끝~`;
  }
};

const todoIsValid = () => todo.value !== ``;

const activeAddTodoBtn = () => {
  addTodoBtn.classList.add(`add_todo_active`);
  addTodoBtn.classList.remove(`add_todo_inactive`);
};
const inactiveAddTodoBtn = () => {
  addTodoBtn.classList.add(`add_todo_inactive`);
  addTodoBtn.classList.remove(`add_todo_active`);
};
todo.addEventListener(`input`, () => {
  if (todoIsValid()) activeAddTodoBtn();
  else inactiveAddTodoBtn();
});

const workOneToggle = (work, isActive = true) => {
  if (isActive) {
    work.classList.add(`work_one_active`);
    work.classList.remove(`work_one_inactive`);
  } else {
    work.classList.add(`work_one_inactive`);
    work.classList.remove(`work_one_active`);
  }
};

const noWorksToggle = (dist) => {
  switch (dist) {
    case 0:
      noDesc.innerHTML = `일정이 없다니, 나태한 것`;
      noSub.innerHTML = `일정 적고 Enter 누르거나 옆에 버튼 누르면 됨`;
      todoData.forEach((x) => workOneToggle(x.getWork()));
      if (todoData.length) {
        noWorks.classList.add(`no_works_inactive`);
        noWorks.classList.remove(`no_works_active`);
      } else {
        noWorks.classList.add(`no_works_active`);
        noWorks.classList.remove(`no_works_inactive`);
      }
      break;

    case 1:
      noDesc.innerHTML = `할 일을 다 끝내다니, 장하구나!`;
      noSub.innerHTML = `혹시나 더 할 일이 있으면 추가하든가~`;
      todoData
        .filter((x) => x.getIsDone() === true)
        .forEach((x) => workOneToggle(x.getWork(), false));
      todoData
        .filter((x) => x.getIsDone() === false)
        .forEach((x) => workOneToggle(x.getWork()));
      if (todoData.length > todoDoneCount()) {
        noWorks.classList.add(`no_works_inactive`);
        noWorks.classList.remove(`no_works_active`);
      } else {
        noWorks.classList.add(`no_works_active`);
        noWorks.classList.remove(`no_works_inactive`);
      }
      break;

    case 2:
      noDesc.innerHTML = `그래서 언제 할 건데?`;
      noSub.innerHTML = `완료 표시한 것들 모이는 곳`;
      todoData
        .filter((x) => x.getIsDone() === true)
        .forEach((x) => workOneToggle(x.getWork()));
      todoData
        .filter((x) => x.getIsDone() === false)
        .forEach((x) => workOneToggle(x.getWork(), false));
      if (todoDoneCount()) {
        noWorks.classList.add(`no_works_inactive`);
        noWorks.classList.remove(`no_works_active`);
      } else {
        noWorks.classList.add(`no_works_active`);
        noWorks.classList.remove(`no_works_inactive`);
      }
      break;

    default:
      break;
  }
};
const distNoWorksToggle = () => {
  if (distSelected.classList.contains(`active_left`)) noWorksToggle(1);
  else if (distSelected.classList.contains(`active_done`)) noWorksToggle(2);
  else noWorksToggle(0);
};
const activeDist = (dist) => {
  distSelected.classList.remove(`active_all`);
  distSelected.classList.remove(`active_left`);
  distSelected.classList.remove(`active_done`);
  distSelected.classList.add(dist);
  allWorks.classList.remove(`li_inactive`);
  worksLeft.classList.remove(`li_inactive`);
  worksDone.classList.remove(`li_inactive`);
  allWorks.classList.remove(`li_active`);
  worksLeft.classList.remove(`li_active`);
  worksDone.classList.remove(`li_active`);
};
allWorks.addEventListener(`click`, () => {
  activeDist(`active_all`);
  allWorks.classList.add(`li_active`);
  worksLeft.classList.add(`li_inactive`);
  worksDone.classList.add(`li_inactive`);
  distNoWorksToggle();
});
worksLeft.addEventListener(`click`, () => {
  activeDist(`active_left`);
  allWorks.classList.add(`li_inactive`);
  worksLeft.classList.add(`li_active`);
  worksDone.classList.add(`li_inactive`);
  distNoWorksToggle();
});
worksDone.addEventListener(`click`, () => {
  activeDist(`active_done`);
  allWorks.classList.add(`li_inactive`);
  worksLeft.classList.add(`li_inactive`);
  worksDone.classList.add(`li_active`);
  distNoWorksToggle();
});

const deleteAllBtnToggle = () => {
  if (todoDoneCount() === 0) deleteAllBtn.classList.add(`delete_all_inactive`);
  else deleteAllBtn.classList.remove(`delete_all_inactive`);
  noWorksToggle(3);
};

const viewUpdate = () => {
  progressUpdate();
  distNoWorksToggle();
  deleteAllBtnToggle();
  saveData();
};

addTodoBtn.addEventListener(`click`, () => {
  if (!todoIsValid()) return;

  const workOne = document.createElement(`div`);
  workOne.classList.add(`work_one`);
  workOne.classList.add(`work_one_active`);
  const work = document.createElement(`label`);
  work.classList.add(`work`);
  const checkbox = document.createElement(`input`);
  checkbox.type = `checkbox`;
  const workDesc = document.createElement(`div`);
  workDesc.classList.add(`work_desc`);
  workDesc.innerHTML = `${todo.value}`;
  const deleteOne = document.createElement(`div`);
  deleteOne.classList.add(`delete_one`);
  deleteOne.innerHTML = `✕`;

  const newWork = new Todo(today, todo.value, workOne);

  const toggleWorkDone = () => {
    newWork.toggleIsDone();
    if (checkbox.checked) {
      workDesc.classList.add(`work_desc_done`);
    } else {
      workDesc.classList.remove(`work_desc_done`);
    }
    viewUpdate();
    // console.log(todoData);
  };
  checkbox.addEventListener(`change`, toggleWorkDone);

  deleteOne.addEventListener(`click`, () => {
    works.removeChild(workOne);
    todoData.splice(todoData.indexOf(newWork), 1);
    viewUpdate();
  });

  works.insertAdjacentElement(`afterbegin`, workOne);
  workOne.appendChild(work);
  work.appendChild(checkbox);
  work.appendChild(workDesc);
  workOne.appendChild(deleteOne);

  todoData.push(newWork);
  todo.value = ``;
  inactiveAddTodoBtn();
  viewUpdate();
  // console.log(todoData);
});

deleteAllBtn.addEventListener(`click`, () => {
  todoData
    .filter((x) => x.getIsDone() === true)
    .forEach((x) => {
      works.removeChild(x.getWork());
      todoData.splice(todoData.indexOf(x), 1);
    });
  viewUpdate();
});

// init
if (!!initData)
  initData.forEach((x) => {
    const workOne = document.createElement(`div`);
    workOne.classList.add(`work_one`);
    workOne.classList.add(`work_one_active`);
    const work = document.createElement(`label`);
    work.classList.add(`work`);
    const checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    const workDesc = document.createElement(`div`);
    workDesc.classList.add(`work_desc`);
    workDesc.innerHTML = `${x.desc}`;
    const deleteOne = document.createElement(`div`);
    deleteOne.classList.add(`delete_one`);
    deleteOne.innerHTML = `✕`;

    const newWork = new Todo(x.date, x.desc, workOne);

    const toggleWorkDone = () => {
      newWork.toggleIsDone();
      if (checkbox.checked) {
        workDesc.classList.add(`work_desc_done`);
      } else {
        workDesc.classList.remove(`work_desc_done`);
      }
      viewUpdate();
      // console.log(todoData);
    };
    if (x.isDone) {
      checkbox.checked = true;
      toggleWorkDone();
    }
    checkbox.addEventListener(`change`, toggleWorkDone);

    deleteOne.addEventListener(`click`, () => {
      works.removeChild(workOne);
      todoData.splice(todoData.indexOf(newWork), 1);
      viewUpdate();
    });

    works.insertAdjacentElement(`afterbegin`, workOne);
    workOne.appendChild(work);
    work.appendChild(checkbox);
    work.appendChild(workDesc);
    workOne.appendChild(deleteOne);

    todoData.push(newWork);
  });

date.innerHTML = `${today.getMonth() + 1}월 ${today.getDate()}일 ${weekdays[today.getDay()]}요일`;
todo.value = ``;
inactiveAddTodoBtn();
viewUpdate();
