class MedicalRecord {
  #visitDate;
  #examine;
  #doctorName;
  constructor(a, b, c) {
    this.setVisitDate(a);
    this.#examine = b;
    this.#doctorName = c;
  }
  setVisitDate(date) {
    // Regex(문자형식 체크 타입)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      throw new Error(`해당 날짜는 유효하지 않습니다.`);
    }
    const d = new Date(date);
    const today = new Date();
    if (+d.getFullYear() < 1970 || d > today) {
      throw new Error(`어느 시대에 살고 계신가요?`);
    }
    // this.#visitDate = d;
    this.#visitDate = date;
  }
}

class Pet {
  #name;
  #age;
  #species;
  #medical_records;
  constructor(a, b, c) {
    this.#name = a;
    this.setAge(b);
    this.#species = c;
    this.#medical_records = [];
  }
  setAge(age) {
    if (age < 0) {
      throw new Error(`어떻게 나이가 음수 ㅋㅋㅋ`);
    }
    this.#age = age;
  }
  setRecords(a, b, c) {
    const medicalRecord = new MedicalRecord(a, b, c);
    this.#medical_records.push(medicalRecord);
  }
}

const pet = new Pet(
  window.prompt(`맡길 동물의 이름은?`),
  +window.prompt(`나이는?`),
  window.prompt(`동물의 종은?`),
);

pet.setRecords(
  window.prompt(`검사 날짜`),
  window.prompt(`검사 기록`),
  window.prompt(`의사 성함`),
);

console.log(pet);

pet.setAge(-10);

console.log(pet);
