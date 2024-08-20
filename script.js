"use strict";

const container = document.querySelector(".container");
const canvasSize = document.querySelector(".canvas");

const createCanvas = function (size) {
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    container.append(column);
    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      column.append(box);
    }
  }
};

createCanvas(16);

const box = document.querySelectorAll(".box");

container.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.className === "box") {
    e.target.style.backgroundColor = "pink";
  }
});

canvasSize.addEventListener("click", function (e) {
  e.preventDefault();
  const gridSize = Number(prompt("Enter number of squares per side"));
});
