import "./gameGrid.css";
import { squareClicked } from "../gameLoop";

const columnLetters = " ABCDEFGHIJ";

export default function createGrid(small = false) {
  const gridContainer = document.createElement("div");
  gridContainer.id = "gridContainer";

  gridContainer.appendChild(createColumnLabels());

  for (let i = 1; i <= 10; i++) {
    const rowContainer = createRowContainer();
    for (let j = 0; j <= 11; j++) {
      if (j === 0 || j === 11) {
        rowContainer.append(createRowLabel(columnLetters[i]));
        continue;
      }
      rowContainer.append(createGridSquare(columnLetters[i], j));
    }
    gridContainer.append(rowContainer);
  }

  gridContainer.appendChild(createColumnLabels());

  return gridContainer;
}

const createRowContainer = function () {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("rowContainer");
  return rowContainer;
};

//Row with ABCDEFGHIJ across top of grid
const createColumnLabels = function () {
  const rowContainer = createRowContainer();
  for (let i = 0; i < 12; i++) {
    const labelSquare = document.createElement("div");
    labelSquare.classList.add("gridLabel");
    if (i > 0 && i < 11) labelSquare.innerText = i;
    rowContainer.append(labelSquare);
  }
  return rowContainer;
};

const createRowLabel = function (letter) {
  const newGridSquare = document.createElement("div");
  newGridSquare.classList.add("gridLabel");
  newGridSquare.innerText = letter;

  return newGridSquare;
};

const createGridSquare = function (column, row) {
  const newGridSquare = document.createElement("div");
  newGridSquare.classList.add("gridSquare");
  newGridSquare.id = `${column}${row}`;
  newGridSquare.addEventListener("click", () => {
    squareClicked(newGridSquare.id);
  });

  return newGridSquare;
};

const showMiss = function (squareID) {
  const square = document.getElementById(squareID);
  square.classList.add("missedSquare");
};

const showHit = function (squareID) {
  const square = document.getElementById(squareID);
  square.classList.add("hitSquare");
};
