// 만들고 싶은 태그, 내용 묻고, 화면에 나타내기

const userTag = window.prompt("만들고 싶은 태그가 있나요?");
const userMessage = window.prompt("안에 넣고 싶은 내용은?");

const newTag = document.createElement(userTag);
newTag.innerHTML = userMessage;
newTag.style.backgroundColor = "pink";
document.body.append(newTag);
