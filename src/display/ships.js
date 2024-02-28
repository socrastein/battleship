import { gameState } from "../gameState";
import "./ships.css";

const ships = [
  {
    name: "Carrier",
    size: 5,
    startX: undefined,
    startY: undefined,
  },
  {
    name: "Battleship",
    size: 4,
    startX: undefined,
    startY: undefined,
  },
  {
    name: "Destroyer",
    size: 3,
    startX: undefined,
    startY: undefined,
  },
  {
    name: "Submarine",
    size: 3,
    startX: undefined,
    startY: undefined,
  },
  {
    name: "Patrol",
    size: 2,
    startX: undefined,
    startY: undefined,
  },
];

export const placeableShips = function () {
  const shipPlacementContainer = document.createElement("div");
  shipPlacementContainer.id = "shipPlacementContainer";

  const placeShipText = document.createElement("div");
  placeShipText.id = "placeShipText";
  placeShipText.innerText = "Drag and drop to place your ships"

  shipPlacementContainer.append(placeShipText);

  const length = ships.length;
  for (let i = 0; i < length; i++) {
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("shipContainer");

    const ship = document.createElement("div");
    ship.classList.add("ship");
    ship.innerText = ships[i].name;

    ship.id = ships[i].name;
    ship.size = ships[i].size;

    shipContainer.append(ship);
    shipPlacementContainer.append(shipContainer);
  }

  return shipPlacementContainer;
};

export const toggleShipVertical = function (ship) {
  const gridSquare = document.getElementById("A1");
  const width = gridSquare.offsetWidth;
};

export const setShipDimensions = function () {
  const gridSquare = document.getElementById("A1");
  const width = gridSquare.offsetWidth;
  const shipElements = document.querySelectorAll(".ship");
  const length = shipElements.length;

  for (let i = 0; i < length; i++) {
    const ship = shipElements[i];
    ships[i].startX = ship.offsetX;
    ships[i].startY = ship.offsetY;
    ship.style.height = `${width * 0.8}px`;
    ship.style.width = `${width * ships[i].size * 0.9}px`;
    makeShipDraggable(ship);
  }
};

function makeShipDraggable(ship) {
  const mobile = gameState.isMobile;
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

  function highlightGrid(ship) {
    removeHighlight();
    const square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);
    if(square === null) return;

    if (square.classList.contains("gridSquare")) {
      const column = square.id.slice(1);
      if (column <= 11 - ship.size) {
        //Valid square to place ship
        square.classList.add("highlight");
      } else {
        //Invalid square to place ship
        square.classList.add("highlightError");
      }
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
    snapToClosestSquare();
  }

  function snapToClosestSquare() {
    removeHighlight();
    const offsetX = ship.offsetWidth * 0.05;
    const offsetY = ship.offsetHeight * 0.1;

    let square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);
    if(square === null) returnShipToOriginalPosition();

    if (square.classList.contains("gridSquare")) {
      const column = square.id.slice(1);
      if (column > 11 - ship.size) {
        const row = square.id[0];
        square = document.getElementById(`${row}${11 - ship.size}`);
      }
      ship.style.top = square.offsetTop + offsetY + "px";
      ship.style.left = square.offsetLeft + offsetX + "px";
    } else {
      returnShipToOriginalPosition();
    }
  }

  function returnShipToOriginalPosition() {
    ship.style.top = origY + "px";
    ship.style.left = origX + "px";
  }
}
