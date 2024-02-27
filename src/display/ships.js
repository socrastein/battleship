import "./ships.css";

const ships = [
  {
    name: "Carrier",
    size: 5,
  },
  {
    name: "Battleship",
    size: 4,
  },
  {
    name: "Destroyer",
    size: 3,
  },
  {
    name: "Submarine",
    size: 3,
  },
  {
    name: "Patrol Boat",
    size: 2,
  },
];

export const placeableShips = function () {
  const shipPlacementContainer = document.createElement("div");
  shipPlacementContainer.id = "shipPlacementContainer";

  const length = ships.length;
  for (let i = 0; i < length; i++) {
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("shipContainer");

    const ship = document.createElement("div");
    ship.classList.add("ship");

    //Remove space in name for CSS #ID formatting
    const shipID = ships[i].name.replace(/\s+/g, "");
    ship.id = shipID;

    shipContainer.append(ship);
    shipPlacementContainer.append(shipContainer);
  }

  return shipPlacementContainer;
};

export const setShipDimensions = function () {
  const gridSquare = document.getElementById("A1");
  const width = gridSquare.offsetWidth;
  const shipElements = document.querySelectorAll(".ship");
  const length = shipElements.length;

  for (let i = 0; i < length; i++) {
    const ship = shipElements[i];
    ship.style.height = `${width}px`;
    ship.style.width = `${width * ships[i].size}px`;
    makeShipDraggable(ship);
  }
};

function makeShipDraggable(ship) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  ship.onmousedown = dragMouseDown;

  function dragMouseDown(event) {
    event = event || window.event;
    event.preventDefault();
    pos3 = event.clientX;
    pos4 = event.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(event) {
    event = event || window.event;
    event.preventDefault();
    pos1 = pos3 - event.clientX;
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;

    ship.style.top = ship.offsetTop - pos2 + "px";
    ship.style.left = ship.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
