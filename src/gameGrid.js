import "./gameGrid.css";
import squareClicked from "./squareClicked";

export default function createGrid() {
  const letters = "ABCDEFGHIJ";
  const gridContainer = document.createElement("div");
  gridContainer.id = "gridContainer";

  for (let i = 0; i < 10; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.id = `rowContainer${i + 1}`;
    rowContainer.classList.add("rowContainer");

    for (let j = 1; j <= 10; j++) {
      let newGridSquare = document.createElement("div");
      newGridSquare.classList.add("gridSquare");
      newGridSquare.id = `${letters[i]}${j}`;
      newGridSquare.innerText = newGridSquare.id;
      newGridSquare.addEventListener("click", squareClicked);
      rowContainer.appendChild(newGridSquare);
    }
    gridContainer.appendChild(rowContainer);
  }

  return gridContainer;
}
