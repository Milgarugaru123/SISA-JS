const car = {
  name: "포르쉐",
  model: "잘몰라요",
  speed: 0,
  speedUp() {
    this.speed = this.speed + 10;
  },
  speedDown() {
    this.speed = this.speed < 10 ? 0 : this.speed - 10;
  },
  break() {
    this.speed = 0;
  },
  moveLeft() {
    console.log(`${this.name} moves left.`);
  },
  moveRight() {
    console.log(`${this.name} moves right.`);
  },
  show() {
    console.log(this.speed);
  },
};

car.speedUp();
car.speedUp();
car.speedUp();
// car.show();

// calc 오브젝트 생성
// first, second 키값 입력
// plus, minus, multiply, square, divide 함수 정의 및 출력

const calc = {
  first: 0,
  second: 0,
  exp: null,
  plus() {
    return this.first + this.second;
  },
  minus() {
    return this.first - this.second;
  },
  multiply() {
    return this.first * this.second;
  },
  square() {
    return this.first ** this.second;
  },
  divide() {
    return this.first / this.second;
  },
  show() {
    switch (this.exp) {
      case 1:
        this.exp = this.plus();
        break;

      case 2:
        this.exp = this.minus();
        break;

      case 3:
        this.exp = this.multiply();
        break;

      case 4:
        this.exp = this.square();
        break;

      case 5:
        this.exp = this.divide();
        break;
    }
    console.log(this.exp.toFixed(2));
  },
};

window.alert("간단한 계산기 모델");
calc.first = +window.prompt("계산할 첫 번째 값 입력");
calc.second = +window.prompt("계산할 두 번째 값 입력");
calc.exp = +window.prompt(
  "어떤 연산을 할지 선택 (1: 덧셈, 2: 뺄셈, 3: 곱셈, 4: 제곱, 5: 나눗셈)",
);
calc.show();
