// element 생성하고 꾸미기

const newDiv = document.createElement("div");
// newDiv.className = "yellow";
newDiv.classList.add("yellow");
newDiv.classList.add("blue");
newDiv.classList.add("green");

newDiv.classList.toggle("red");
// newDiv.classList.toggle("blue");

newDiv.innerHTML = "이건 시련이다.";
document.body.append(newDiv);
