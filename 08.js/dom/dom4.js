// div 태그 안에 button 만들기

const newDiv = document.createElement("div");
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.border = "1px solid red";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";
document.body.append(newDiv);

const newBtn = document.createElement("button");
newBtn.style.cssText = `padding: 5px 15px;`;
newBtn.innerHTML = "안녕";
newDiv.appendChild(newBtn);
