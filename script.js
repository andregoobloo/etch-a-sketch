"use strict";

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const column = document.createElement("div");
  column.classList.add("column");
  container.append(column);
  for (let j = 0; j < 16; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    column.append(box);
  }
}
const box = document.querySelectorAll(".box");

container.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.className === "box") {
    e.target.style.backgroundColor = "pink";
  }
});
