// color
//   min: 0
//   max: 16777215
function generateRandomColor() {
  const min = 0;
  const max = 16777215;
  const colorInt = Math.floor(Math.random() * (max - min + 1)) + min;

  // int to hex string
  return "#" + colorInt.toString(16);
}

const main = document.querySelector("main");

for (let index = 0; index < 20; index++) {
  const box = document.createElement("div");
  box.style = "border: 1px solid black; font-size: 24px; border-radius: 5px";

  const randomColor = generateRandomColor();
  box.style.backgroundColor = randomColor;
  box.textContent = randomColor;
  box.style.textShadow = "2px 2px 12px";

  box.classList.add("item");
  main.append(box);
}
