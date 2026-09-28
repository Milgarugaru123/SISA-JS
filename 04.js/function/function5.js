const a = "icecream";
const b = a.includes("cream"); //포함 여부 확인 -> return: boolean
const c = a.repeat(3); //반복 -> return: string
a.startsWith("a"); // ~로 시작하는가? -> return: boolean
const d = a.endsWith("z"); // ~로 끝나는가? -> return: boolean
a.toUpperCase(); //모두 대문자화 -> return: string
a.toLowerCase(); //모두 소문자화 -> return: string
a.replace("i", "w"); //a 부분을 b로 바꾸기 -> return: string
a.replaceAll("i", "w"); //a 부분을 전부 b로 바꾸기 -> return: string
a.split("r"); // ~을 기준으로 반으로 나누기 -> return: string
a.slice(0, 4); // n1~n2 번째까지 자르기 -> return: string
a.length; // 문자열의 길이 반환 ->  return: number

console.log(b, c, d);

const news =
  "South Korea jails care home head for sexually assaulting disabled residents The man, surnamed Kim, was handed a 15-year prison term for abusing three residents at the facility near Seoul.";

const user_looking_for = window.prompt("찾고 싶은 단어");
console.log(news.includes(user_looking_for) ? "있음" : "없음");

console.log(news.toUpperCase());

console.log(news.replaceAll("Kim", "Somebody"));
