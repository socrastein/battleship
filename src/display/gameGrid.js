import "./gameGrid.css";

const rowLetters = [
  null,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  null,
];

const colNumbers = [
  null,
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  null,
];

export default function createGrid(small = false) {
  const gridContainer = document.createElement("div");
  if (small) {
    gridContainer.id = "smallGridContainer";
  } else gridContainer.id = "gridContainer";
  rowLetters.forEach((row) => {
    colNumbers.forEach((col) => {
      if (small && (!row || !col)) return;
      const square = document.createElement("div");

      //Display labels on outside of large grid
      if (!row && !small) square.innerText = col;
      if (!col && !small) square.innerText = row;

      if (row && col) {
        square.classList.add("gridSquare");
        if (small) {
          square.dataset.coord = `${row}${col}`;
        } else {
          square.id = `${row}${col}`;
        }
      } else {
        square.classList.add("gridLabel");
      }
      gridContainer.append(square);
    });
  });

  return gridContainer;
}

const showMiss = function (squareID) {
  const square = document.getElementById(squareID);
  square.classList.add("missedSquare");
};

const showHit = function (squareID) {
  const square = document.getElementById(squareID);
  square.classList.add("hitSquare");
};
