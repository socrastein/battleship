import { gameState } from "../gameState";
import { displayPassScreen } from "./passScreen";
import "./ships.css";

export const shipObjects = [
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

export const createShip = function (shipObject, index, text = true) {
  const ship = document.createElement("div");
  ship.classList.add(`ship`, `${shipObject.name}`);
  if (text) ship.innerText = shipObject.name;

  ship.name = shipObject.name;
  ship.size = shipObject.size;
  ship.index = index;

  return ship;
};

export const displayPlaceableShips = function () {
  const mainContainer = document.getElementById("mainContainer");
  const shipPlacementContainer = document.createElement("div");
  shipPlacementContainer.id = "shipPlacementContainer";

  shipPlacementContainer.append(displayPlacingInstruction());

  const ships = [];

  const length = shipObjects.length;
  for (let i = 0; i < length; i++) {
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("shipContainer");

    const ship = createShip(shipObjects[i], i);

    ship.addEventListener("dblclick", (event) => {
      toggleShipVertical(ship);
    });

    ships.push(ship);

    shipContainer.append(ship);
    shipPlacementContainer.append(shipContainer);
  }

  mainContainer.append(shipPlacementContainer);
  ships.forEach((ship) => {
    setShipDimensions(ship);
    makeShipDraggable(ship);
    ship.origX = ship.getBoundingClientRect().left;
    ship.origY = ship.getBoundingClientRect().top;
  });

  window.onresize = () => {
    const allShips = document.querySelectorAll(".ship");
    const len = allShips.length;
    for (let i = 0; i < len; i++) {
      if (allShips[i].headSquare) {
        const ref = document.getElementById(`${allShips[i].headSquare.id}`);
        snapToClosestSquare(allShips[i], ref);
      }
    }
  };
};

export const toggleShipVertical = function (ship) {
  if (ship.classList.contains("vertical")) {
    ship.classList.remove("vertical");
    ship.innerText = shipObjects[ship.index].name;
  } else {
    ship.classList.add("vertical");
    ship.innerText = shipObjects[ship.index].short;
  }

  setShipDimensions(ship);
};

export const setShipDimensions = function (ship, reference) {
  let width;
  if (reference) {
    width = reference.offsetWidth;
  } else {
    width = document.getElementById("A1").offsetWidth;
  }
  if (ship.classList.contains("vertical")) {
    ship.style.height = `${width * ship.size * 0.9}px`;
    ship.style.width = `${width * 0.8}px`;
  } else {
    ship.style.height = `${width * 0.8}px`;
    ship.style.width = `${width * ship.size * 0.9}px`;
  }
};

const makeShipDraggable = function (ship) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  ship.onmousedown = dragMouseDown;
  ship.addEventListener("touchstart", (event) => {
    dragMouseDown(event);
  });

  function dragMouseDown(event) {
    event.preventDefault();
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

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
    setTimeout(() => {
      snapToClosestSquare(ship);
    }, 100);
  }
};

const highlightGrid = function (ship) {
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
};

const removeHighlight = function () {
  const previous = document.getElementsByClassName("highlight");
  if (previous.length > 0) previous[0].classList.remove("highlight");
  const errors = document.getElementsByClassName("highlightError");
  if (errors.length > 0) errors[0].classList.remove("highlightError");
};

export const snapToClosestSquare = function (ship, square, small = false) {
  let offsetX;
  let offsetY;

  if (!square) {
    square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);
  }
  if (square === null || !square.classList.contains("gridSquare")) {
    if (ship.classList.contains("vertical")) {
      toggleShipVertical(ship);
    }
    returnShipToOriginalPosition(ship);
    validateShipPlacement();
    return;
  }

  highlightGrid(ship);

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
  removeHighlight();
  if (!small) {
    validateShipPlacement();
  }
};

const returnShipToOriginalPosition = function (ship) {
  ship.style.top = ship.origY + "px";
  ship.style.left = ship.origX + "px";
  ship.headSquare = null;
};

const clearOccupiedSquares = function () {
  const occupiedSquares = document.querySelectorAll(".occupied");
  const length = occupiedSquares.length;
  for (let i = 0; i < length; i++) {
    const square = occupiedSquares[i];
    square.classList.remove("occupied");
    square.classList.remove("invalid");
  }
};

const validateShipPlacement = function () {
  clearOccupiedSquares();
  let allShipsPlaced = true;
  const ships = document.querySelectorAll(".ship");
  const length = ships.length;

  for (let i = 0; i < length; i++) {
    const ship = ships[i];
    if (!ship.headSquare) {
      allShipsPlaced = false;
      continue;
    }

    const squares = getShipSquares(ship);

    squares.forEach((square) => {
      const element = document.getElementById(square);
      if (element.classList.contains("occupied")) {
        element.classList.add("invalid");
        allShipsPlaced = false;
      } else {
        element.classList.add("occupied");
      }
    });
  }
  if (allShipsPlaced) {
    console.log("All ships placed");
    setShipCoordinates();
  } else hideAcceptButton();
};

const getShipSquares = function (ship) {
  if (!ship.headSquare) return null;
  const squares = [];
  const column = parseInt(ship.headSquare.id.slice(1));
  const rowIndex = rows.indexOf(ship.headSquare.id[0]);
  for (let j = 0; j < ship.size; j++) {
    if (ship.classList.contains("vertical")) {
      squares.push(
        document.getElementById(`${rows[rowIndex + j]}${column}`).id
      );
    } else {
      squares.push(
        document.getElementById(`${rows[rowIndex]}${column + j}`).id
      );
    }
  }
  return squares;
};

const setShipCoordinates = function () {
  const ships = document.querySelectorAll(".ship");
  const length = ships.length;
  const playerNum = gameState.playerTurnNum;
  const playerBoard = gameState[`player${playerNum}Board`];
  playerBoard.clearShips();

  for (let i = 0; i < length; i++) {
    const ship = ships[i];
    if (ship.classList.contains("vertical")) {
      ship.vertical = true;
    } else ship.vertical = false;
    const squares = getShipSquares(ship);
    gameState[`player${playerNum}Board`].addShip(
      ship.name,
      ship.size,
      ship.vertical,
      squares
    );
  }
  showAcceptButton();
};

const hideAcceptButton = function () {
  let acceptButton;
  acceptButton = document.getElementById("acceptButton");
  if (acceptButton) {
    acceptButton.style.display = "none";
  }
};

const showAcceptButton = function () {
  let acceptButton;
  acceptButton = document.getElementById("acceptButton");
  if (!acceptButton) {
    acceptButton = document.createElement("button");
    acceptButton.id = "acceptButton";
    acceptButton.innerText = "Accept";
    document.getElementById("shipPlacementContainer").append(acceptButton);
    acceptButton.onclick = () => displayPassScreen();
  } else {
    acceptButton.style.display = "flex";
  }
};
