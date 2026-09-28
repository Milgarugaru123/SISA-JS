/*
CGV
- 영화: 오디세이, 코난, 스파이더맨, 귀칼
- 좌석: 스탠다드(15000), 리클라이너(18000), IMAX(20000), 라이트(10000)
    - 성인: 정가, 미성년자(<20)/시니어(>65): 80%
- 팝콘: 솔트(8000), 캬라멜(8500), 치즈(9000)
- 스낵: 나초(4000), 오징어(7000), 핫도그(5000)
- 음료: 탄산(2500), 커피류(4000), 에이드류(5000), 주류(7000)

결과: 영화 ??, 좌석 ??, 팝콘 ??/없음, 스낵 ??/없음, 음료 ??/없음
총 금액: ??원 
*/

const cgv = {
  movies: ["오디세이", "코난", "스파이더맨", "귀멸의 칼날"],
  seats: [
    { seat: "스탠다드", price: 15000 },
    { seat: "리클라이너", price: 18000 },
    { seat: "IXAM", price: 20000 },
    { seat: "라이트", price: 10000 },
  ],
  popcorns: [
    { flavor: "솔트", price: 8000 },
    { flavor: "캬라멜", price: 8500 },
    { flavor: "치즈", price: 9000 },
    { flavor: "갈릭버터", price: 9000 },
  ],
  snacks: [
    { snack: "나초", price: 4000 },
    { snack: "오징어", price: 7000 },
    { snack: "핫도그", price: 5000 },
  ],
  drinks: [
    { drink: "탄산류", price: 2500 },
    { drink: "커피류", price: 4000 },
    { drink: "에이드류", price: 5000 },
    { drink: "주류", price: 7000 },
  ],
  userPick: {
    movie: null,
    seat: null,
    age: null,
    popcorn: null,
    snack: null,
    drink: null,
  },
  getAge() {
    this.userPick.age = +window.prompt(`나이는`);
    this.userPick.age =
      this.userPick.age >= 20 && this.userPick.age < 65 ? 1 : 0.8;
  },
  pickMovie() {
    window.alert("보고싶으신 영화를 선택해주세요!");
    this.userPick.movie =
      this.movies[
        +window.prompt(
          `1: '${this.movies[0]}', 2: '${this.movies[1]}', 3: '${this.movies[2]}', 4: '${this.movies[3]}'`,
        ) - 1
      ];
  },
  pickSeat() {
    window.alert("좌석을 선택해주세요.");
    this.userPick.seat =
      this.seats[
        +window.prompt(
          `1: '${this.seats[0].seat}', 2: '${this.seats[1].seat}', 3: '${this.seats[2].seat}', 4: '${this.seats[3].seat}'`,
        ) - 1
      ] || this.seats[0];
  },
  pickPopcorn() {
    window.alert("팝콘도 드시나요?");
    this.userPick.popcorn =
      this.popcorns[
        +window.prompt(
          `1: '${this.popcorns[0].flavor}', 2: '${this.popcorns[1].flavor}', 3: '${this.popcorns[2].flavor}', 4: '${this.popcorns[3].flavor}', 그 외: 아니오`,
        ) - 1
      ];
  },
  pickSnack() {
    window.alert("이런 간식도 추천해요!");
    this.userPick.snack =
      this.snacks[
        +window.prompt(
          `1: '${this.snacks[0].snack}', 2: '${this.snacks[1].snack}', 3: '${this.snacks[2].snack}', 그 외: 아니오`,
        ) - 1
      ];
  },
  pickDrink() {
    window.alert("음료는 필요 없으신가요?");
    this.userPick.drink =
      this.drinks[
        +window.prompt(
          `1: '${this.drinks[0].drink}', 2: '${this.drinks[1].drink}', 3: '${this.drinks[2].drink}', 4: '${this.drinks[3].drink}', 그 외: 아니오`,
        ) - 1
      ];
  },
  totalPrice() {
    console.log(
      `영화: '${this.userPick.movie}', 좌석: ${this.userPick.seat.seat}, 팝콘: ${this.userPick.popcorn ? this.userPick.popcorn.flavor + " 맛" : "구매 안 함"}, 스낵: ${this.userPick.snack ? this.userPick.snack.snack : "구매 안 함"}, 음료: ${this.userPick.drink ? this.userPick.drink.drink : "구매 안 함"}`,
    );
    console.log(
      `총 결재 금액: ${(this.userPick.seat.price + (this.userPick.popcorn ? this.userPick.popcorn.price : 0) + (this.userPick.snack ? this.userPick.snack.price : 0) + (this.userPick.drink ? this.userPick.drink.price : 0)) * this.userPick.age}원 ${this.userPick.age === 1 ? "(정가)" : "(할인가)"}`,
    );
  },
};

window.alert("영화관 시뮬레이터");
cgv.getAge();
cgv.pickMovie();
cgv.pickSeat();
cgv.pickPopcorn();
cgv.pickSnack();
cgv.pickDrink();
// console.log(cgv.userPick);
cgv.totalPrice();
