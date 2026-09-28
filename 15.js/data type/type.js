// obj - 변수 & 함수
// class - 변수 & 함수

// 중고차 판매 사이트
// 가격(price), 연도(year), 주행거리(mileage), 사고 유무(hasAccident), 침수 여부(hasFlooding)

class Car {
  //   #price;
  //   #year;
  //   #mileage;
  //   #hasAccident;
  //   #hasFlooding;
  price;
  year;
  mileage;
  hasAccident;
  hasFlooding;

  constructor(a, b, c) {
    this.price = a;
    this.year = b;
    this.mileage = c;
  }
}

const a = new Car(10000, 2020, 10000);
const b = new Car(3000, 2010, 50000);

console.log(a.price, b.price);
