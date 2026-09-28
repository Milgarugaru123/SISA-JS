class Seat {
  #location;
  #price;
  #isOccupied;
  constructor(location, price) {
    this.setLoc(location);
    this.setPrice(price);
    this.#isOccupied = false;
  }
  setLoc(location) {
    this.#location = location;
  }
  setPrice(price) {
    this.#price = price;
  }
  toggleOccupy() {
    this.#isOccupied = !this.#isOccupied;
  }
  getIsOccupied() {
    return this.#isOccupied;
  }
}

const body = document.querySelector(`body`);
const seatNum = +window.prompt(`전체 좌석 개수?`);
const seatRowCount = +window.prompt(`좌석 가로줄 수?`);
body.style.cssText = `width: ${seatRowCount * 74 - 10}px; display: grid; grid-template-columns: repeat(${seatRowCount}, 1fr); align-items: center; gap: 10px; padding: 10px; margin: 0 auto;`;
const atoz = [...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`];
const seatRowLabel = new Array(Math.floor(seatNum / seatRowCount))
  .fill(0)
  .map(
    (x, i) =>
      `${i >= atoz.length ** 2 ? atoz[Math.floor(i / atoz.length ** 2) - 1] : ``}${i >= atoz.length ? atoz[Math.floor(((i % atoz.length ** 2) + 26) / atoz.length) - 1] : ``}${atoz[i % atoz.length]}`,
  );
console.log(seatRowLabel);

const seats = new Array(seatNum).fill(0).map((x, i) => {
  const seat = document.createElement(`button`);
  seat.style.cssText = `padding: 32px 0; cursor: pointer;`;
  seat.innerHTML = `${seatRowLabel[Math.floor(i / seatRowCount)]} ${(i % seatRowCount) + 1}`;
  const seatData = new Seat(
    seat.innerHTML,
    Math.random() < 0.5 ? 15000 : 18000,
  );

  seat.addEventListener(`click`, () => {
    if (!seatData.getIsOccupied()) {
      seatData.toggleOccupy();
      seat.style.cssText = `color: white; border: 2px solid black; border-radius: 3px; background-color: black; padding: 32px 0; cursor: not-allowed;`;
      seat.addEventListener(`mouseover`, () => {
        seat.style.cssText = `color: white; border: 2px solid black; border-radius: 3px; background-color: black; padding: 32px 0; cursor: not-allowed;`;
      });

      console.log(seats.filter((x) => x.getIsOccupied()));
    }
  });

  document.body.append(seat);
  return seatData;
});

console.log(seats.filter((x) => x.getIsOccupied()));
