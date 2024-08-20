"use strict";

const container = document.querySelector(".container");
const canvasSize = document.querySelector(".canvas");

const createCanvas = function (size) {
  if (size > 100 || size < 1) return;
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

// Random color generator
const randomColor = function () {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
};

// Default starting size
createCanvas(16);

// Drawing in canvas
const box = document.querySelectorAll(".box");
container.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.className === "box") {
    e.target.style.backgroundColor = randomColor();
  }
});

// Set new canvas size
canvasSize.addEventListener("click", function (e) {
  e.preventDefault();
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const gridSize = Number(prompt("Enter number of squares per side"));
  createCanvas(gridSize);
});
