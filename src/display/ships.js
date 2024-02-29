import { gameState } from "../gameState";
import "./ships.css";

const shipObjects = [
  {
    name: "Carrier",
    short: "Carrier",
    size: 5,
  },
  {
    name: "Battleship",
    short: "Battle",
    size: 4,
  },
  {
    name: "Destroyer",
    short: "Destroy",
    size: 3,
  },
  {
    name: "Submarine",
    short: "Sub",
    size: 3,
  },
  {
    name: "Patrol",
    short: "Boat",
    size: 2,
  },
];

const rows = " ABCDEFGHIJ";
let mobile;

window.addEventListener("load", () => {
  mobile = gameState.isMobile;
});

const displayPlacingInstruction = function () {
  const placeShipText = document.createElement("div");
  placeShipText.id = "placeShipText";
  placeShipText.innerText =
    "Drag and drop to place your ships\nDouble-tap to rotate on grid";
  return placeShipText;
};

export const displayPlaceableShips = function () {
  const shipPlacementContainer = document.createElement("div");
  shipPlacementContainer.id = "shipPlacementContainer";

  shipPlacementContainer.append(displayPlacingInstruction());

  const length = shipObjects.length;
  for (let i = 0; i < length; i++) {
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("shipContainer");

    const ship = document.createElement("div");
    ship.classList.add("ship");
    ship.innerText = shipObjects[i].name;

    ship.id = shipObjects[i].name;
    ship.size = shipObjects[i].size;
    ship.index = i;

    ship.addEventListener("dblclick", (event) => {
      toggleShipVertical(ship);
    });

    shipContainer.append(ship);
    shipPlacementContainer.append(shipContainer);
  }
  return shipPlacementContainer;
};

export const toggleShipVertical = function (ship) {
  const gridSquare = document.getElementById("A1");
  const width = gridSquare.offsetWidth;

  if (ship.classList.contains("vertical")) {
    ship.classList.remove("vertical");
    ship.style.height = `${width * 0.8}px`;
    ship.style.width = `${width * ship.size * 0.9}px`;
    ship.innerText = shipObjects[ship.index].name;
  } else {
    ship.classList.add("vertical");
    ship.style.height = `${width * ship.size * 0.9}px`;
    ship.style.width = `${width * 0.8}px`;
    ship.innerText = shipObjects[ship.index].short;
  }
};

export const setShipDimensions = function () {
  const gridSquare = document.getElementById("A1");
  const width = gridSquare.offsetWidth;
  const shipElements = document.querySelectorAll(".ship");
  const length = shipElements.length;

  for (let i = 0; i < length; i++) {
    const ship = shipElements[i];
    ship.style.height = `${width * 0.8}px`;
    ship.style.width = `${width * shipObjects[i].size * 0.9}px`;
    makeShipDraggable(ship);
  }
};

const makeShipDraggable = function (ship) {
  const origX = ship.getBoundingClientRect().left;
  const origY = ship.getBoundingClientRect().top;
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  ship.onmousedown = dragMouseDown;
  ship.addEventListener("touchstart", (event) => {
    dragMouseDown(event);
  });

  function dragMouseDown(event) {
    event = event || window.event;
    // event.preventDefault();
    if (mobile) {
      pos3 = event.touches[0].pageX;
      pos4 = event.touches[0].pageY;
      document.ontouchend = closeDragElement;
      document.ontouchmove = elementDrag;
    } else {
      pos3 = event.clientX;
      pos4 = event.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(event) {
    event = event || window.event;
    event.preventDefault();

    highlightGrid(ship);

    if (mobile) {
      pos1 = pos3 - event.touches[0].pageX;
      pos2 = pos4 - event.touches[0].pageY;
      pos3 = event.touches[0].pageX;
      pos4 = event.touches[0].pageY;
    } else {
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
    }

    ship.style.top = ship.offsetTop - pos2 + "px";
    ship.style.left = ship.offsetLeft - pos1 + "px";
  }

  function highlightGrid() {
    removeHighlight();
    const square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);
    if (square === null) return;
    if (!square.classList.contains("gridSquare")) return;
    let limit;
    if (ship.classList.contains("vertical")) {
      //Get row letter
      let row = square.id[0];
      limit = rows.indexOf(row);
    } else {
      //Get column number
      limit = square.id.slice(1);
    }

    if (limit <= 11 - ship.size) {
      //Valid square to place ship
      square.classList.add("highlight");
    } else {
      //Invalid square to place ship
      square.classList.add("highlightError");
    }
  }

  function removeHighlight() {
    const previous = document.getElementsByClassName("highlight");
    if (previous.length > 0) previous[0].classList.remove("highlight");
    const errors = document.getElementsByClassName("highlightError");
    if (errors.length > 0) errors[0].classList.remove("highlightError");
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
    setTimeout(() => {
      snapToClosestSquare();
    }, 100);
  }

  function snapToClosestSquare() {
    let offsetX;
    let offsetY;

    let square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);
    if (square === null || !square.classList.contains("gridSquare")) {
      if (ship.classList.contains("vertical")) {
        toggleShipVertical(ship);
      }
      returnShipToOriginalPosition();
      validateShipPlacement();
      return;
    }

    highlightGrid();

    if (ship.classList.contains("vertical")) {
      offsetX = ship.offsetWidth * 0.1;
      offsetY = ship.offsetHeight * 0.05;
    } else {
      offsetX = ship.offsetWidth * 0.05;
      offsetY = ship.offsetHeight * 0.1;
    }

    if (square.classList.contains("highlightError")) {
      const column = square.id.slice(1);
      const row = square.id[0];
      if (ship.classList.contains("vertical")) {
        //Get closest valid square on that column
        square = document.getElementById(`${rows[11 - ship.size]}${column}`);
      } else {
        //Get closest valid square on that row
        square = document.getElementById(`${row}${11 - ship.size}`);
      }
    }
    ship.style.top = square.offsetTop + offsetY + "px";
    ship.style.left = square.offsetLeft + offsetX + "px";
    ship.headSquare = square;
    console.log(ship.headSquare);
    removeHighlight();
    validateShipPlacement();
  }

  function returnShipToOriginalPosition() {
    ship.style.top = origY + "px";
    ship.style.left = origX + "px";
    ship.headSquare = null;
  }
};

const clearOccupiedSquares = function () {
  const occupiedSquares = document.querySelectorAll(".occupied");
  const length = occupiedSquares.length;
  for (let i = 0; i < length; i++) {
    const square = occupiedSquares[i];
    square.classList.remove("occupied");
    square.classList.remove("highlightError");
  }
};

const validateShipPlacement = function () {
  clearOccupiedSquares();
  const ships = document.querySelectorAll(".ship");
  const length = ships.length;
  for (let i = 0; i < length; i++) {
    const ship = ships[i];
    let square;
    if (ship.headSquare) {
      square = ship.headSquare;
    } else continue;
    const column = parseInt(square.id.slice(1));
    const rowIndex = rows.indexOf(square.id[0]);

    for (let j = 0; j < ship.size; j++) {
      let occupied;
      //Set ships along vertical line to occupied
      if (ship.classList.contains("vertical")) {
        occupied = document.getElementById(`${rows[rowIndex + j]}${column}`);
        //Set ships along horizontal line to occupied
      } else {
        occupied = document.getElementById(`${rows[rowIndex]}${column + j}`);
      }
      //Check if another ship is occupying same space
      if (occupied.classList.contains("occupied")) {
        occupied.classList.remove("occupied");
        occupied.classList.add("highlightError");
      } else {
        occupied.classList.add("occupied");
      }
    }
  }
};
