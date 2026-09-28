const calBox = document.createElement("div");
const dateMes = ["월", "화", "수", "목", "금", "토", "일"].map(
  (x) => x + "요일",
);
// const schedule = document.createElement("div");

const todayWeek = new Date().getDay();

calBox.classList.add("out_box");
document.body.append(calBox);

const makeSchedule = (start, end) => `${start} ~ ${end}`;
const dateSche = Array(dateMes.length).fill(makeSchedule("09:00", "22:00"));
dateSche[dateSche.length - 1] = "";

Array(dateMes.length)
  .fill(0)
  .forEach((x, i) => {
    const daySchedule = document.createElement("div");
    daySchedule.classList.add("in_box");

    const date = document.createElement("div");
    const schedule = document.createElement("div");
    date.classList.add("date");
    date.innerHTML = dateMes[i];
    schedule.classList.add("schedule");
    schedule.innerHTML = dateSche[i] || "휴무 데스";
    if (i === (todayWeek + 6) % dateMes.length)
      daySchedule.style.cssText = `border-left: 4px solid red; font-weight: bold;`;
    if (!dateSche[i])
      daySchedule.style.cssText = `color: rgba(141, 141, 141, 0.8);`;

    calBox.appendChild(daySchedule);
    daySchedule.appendChild(date);
    daySchedule.appendChild(schedule);
  });
