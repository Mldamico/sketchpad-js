const container = document.querySelector(".container");
const input = document.getElementById("input-grid");
const btn = document.getElementById("btn-grid");
const randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const completeGrid = size => {
  console.log(size);
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList = "square";

    container.appendChild(div);
    div.addEventListener("mouseover", e => {
      console.log(e);
      e.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    });
  }
};

completeGrid(16);

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
