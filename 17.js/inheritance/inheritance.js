/*
나만의 타입
동물(강아지, 고양이) 키우기 게임
필드(변수): 체력, 행복도, 이름 => (명사)
메소드(함수): 운동하기, 잠자기, 먹기 + 죽기 => (동사)
*/

/* 
업데이트 추가
동물 종류 추가 -> 새 [날기], 물고기 [헤엄치기]
*/

class Animal {
  #name;
  #stamina;
  #happiness;
  #alive;

  constructor(name) {
    this.#name = name;
    this.#stamina = 50;
    this.#happiness = 50;
    this.#alive = true;
  }

  workOut() {
    this.useStamina(10);
    this.#happiness -= 10;
  }
  sleep() {
    this.#stamina += 10;
  }
  eat() {
    this.#happiness += 10;
  }
  dead() {
    this.#alive = false;
  }
  useStamina(num) {
    this.#stamina -= num;
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name);
  }
  fly(x) {
    super.useStamina(x);
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name);
  }
  swim(x) {
    super.useStamina(x);
  }
}

/* 
카페 알바생
- 닉네임, 직급, 시급, 근무일, 근무조정하기, 시급협상
-> 변수: 닉네임, 직급, 시급, 근무일
-> 함수: 근무조정하기, 시급협상
*/

class PartTimer {
  #nickname;
  #position;
  #wage;
  #workDays;

  shiftWorkDay() {}
  wageChange() {}
}
