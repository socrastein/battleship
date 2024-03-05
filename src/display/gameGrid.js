import "./gameGrid.css";
import { squareClicked } from "../gameLoop";

const rowLetters = " ABCDEFGHIJ";

export default function createGrid(small = false) {
  const gridContainer = document.createElement("div");

  if (small) {
    gridContainer.id = "smallGridContainer";
  } else {
    gridContainer.id = "gridContainer";
  }

  if (!small) gridContainer.appendChild(createColumnLabels());

  for (let i = 1; i <= 10; i++) {
    const rowContainer = createRowContainer();
    for (let j = 0; j <= 11; j++) {
      if (j === 0 || j === 11) {
        if (!small) {
          rowContainer.append(createRowLabel(rowLetters[i]));
        }
        continue;
      }
      rowContainer.append(createGridSquare(rowLetters[i], j, small));
    }
    gridContainer.append(rowContainer);
  }

  if (!small) gridContainer.appendChild(createColumnLabels());

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

const createGridSquare = function (row, column, small = false) {
  const newGridSquare = document.createElement("div");
  newGridSquare.classList.add("gridSquare");
  //Assign ID to .coord to avoid duplicates on firing screen with minimap grid
  if (small) {
    newGridSquare.dataset.coord = `${row}${column}`;
  } else newGridSquare.id = `${row}${column}`;

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
