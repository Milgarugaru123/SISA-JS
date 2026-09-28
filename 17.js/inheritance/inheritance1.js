class Player {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }

  get name() {
    return this.#name;
  }
  get power() {
    return this.#power;
  }
  get hp() {
    return this.#hp;
  }
  set hp(v) {
    this.#hp = Math.max(0, Math.min(v, this.#maxHp));
  }
  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격`);
    console.log(`데미지 : ${this.#power}`);
    console.log(`상대 HP : ${target.hp}`);
  }
}

/* S2지존짱맨S2 */
/* 
Warrior : 150, 20, 파워스트라이크(타겟의 HP 절반, 내 채력 10 깎음)
Magician : 
Thief : 
*/

class Warrior extends Player {
  constructor(name) {
    super(name, 150, 20);
  }
  powerStrike(target) {
    if (this.hp <= 10) {
      console.log(`${this.name} HP 부족!`);
      return;
    }
    target.hp = Math.floor(target.hp / 2);
    this.hp -= 10;
    console.log(`${this.name} -> ${target.name} 공격`);
    console.log(`내 HP : ${this.hp}`);
    console.log(`상대 HP : ${target.hp}`);
  }
}

const user1 = new Warrior(`S2지존짱맨S2`);
const user2 = new Warrior(`크어어억`);
user1.powerStrike(user2);
user2.attack(user1);

const wolf = { name: "춤추는 늑대", hp: 100 };
const golem = { name: "든든한 골렘", hp: 1000 };
user1.attack(wolf);
user2.powerStrike(golem);

class Monster {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, hp, power) {
    this.#name = name;
    this.#hp = hp;
    this.#power = power;
  }

  //   get name() {
  //     return this.#name;
  //   }
  //   get power() {
  //     return this.#power;
  //   }
  //   get hp() {
  //     return this.#hp;
  //   }
  //   set hp(v) {
  //     this.#hp = Math.min(0, v);
  //   }

  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격`);
    console.log(`데미지 : ${this.#power}`);
    console.log(`상대 HP : ${target.hp}`);
  }
}

class Wolf extends Monster {
  #dodgeRate;
  constructor(name) {
    super(name, 100, 15);
    this.#dodgeRate = 0.2;
  }
  dodge() {
    return Math.random() < this.#dodgeRate;
  }
}
