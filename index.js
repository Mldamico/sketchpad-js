const container = document.querySelector(".container");
const input = document.getElementById("input-grid");
const btn = document.getElementById("btn-grid");
const reset = document.getElementById("reset");

const randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const completeGrid = size => {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseover", e => {
      e.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    });
  }
};

btn.addEventListener("click", e => {
  e.preventDefault();
  clearGrid();
  completeGrid(input.value);
});

function clearGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach(element => {
    container.removeChild(element);
  });
}

window.addEventListener("load", completeGrid(16));
reset.addEventListener("click", e => {
  clearGrid();
  completeGrid(16);
});
