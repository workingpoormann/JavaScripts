function generateRandomColor() {}

const main = document.querySelector("main");

for (let index = 0; index < 20; index++) {
  const box = document.createElement("div");
  box.style = "border: 1px solid black";
  box.textContent = "hoge";
  box.classList.add("item");
  main.append(box);
}
