import "./firingScreen.css";
import createGrid from "./gameGrid";
import { gameState } from "../gameState";
import { createShip, setShipDimensions, snapToClosestSquare } from "./ships";
import { displayPassScreen } from "./passScreen";

const mainContainer = document.getElementById("mainContainer");

let playerBoard;
let enemyBoard;

const setPlayerBoards = function () {
  const playerNum = gameState.playerTurnNum;
  let enemyNum;
  if (playerNum === 1) {
    enemyNum = 2;
  } else enemyNum = 1;

  playerBoard = gameState[`player${playerNum}Board`];
  enemyBoard = gameState[`player${enemyNum}Board`];
};

export const displayFiringScreen = function () {
  setPlayerBoards();
  mainContainer.append(createGrid());
  attachClickEventsToGrid();
  showPlayerShots();

  const playerHudContainer = document.createElement("div");
  playerHudContainer.id = "playerHudContainer";
  playerHudContainer.append(createTopHud());
  mainContainer.append(playerHudContainer);

  const ships = document.querySelectorAll(".ship");
  const shipArray = [...ships];
  shipArray.forEach((ship) => {
    setShipDimensions(ship);
  });
  showPlayerShips();
  showEnemyShots();

  playerHudContainer.append(createFireStatus());
};

const attachClickEventsToGrid = () => {
  const squares = document.querySelectorAll(".gridSquare");
  const length = squares.length;
  for (let i = 0; i < length; i++) {
    const square = squares[i];
    square.addEventListener("click", (event) => {
      const square = event.target;
      highLightSquare(square);
    });
  }
};

const createTopHud = function () {
  const topHudContainer = document.createElement("div");
  topHudContainer.id = "topHudContainer";

  const playerStatus = showPlayerStatus(gameState.playerTurnNum);
  const smallGrid = createGrid(true);

  topHudContainer.append(playerStatus);
  topHudContainer.append(smallGrid);

  return topHudContainer;
};

const showPlayerStatus = function (playerNum) {
  const playerStatusContainer = document.createElement("div");
  playerStatusContainer.id = "playerStatusContainer";

  const nameDiv = document.createElement("div");
  nameDiv.id = "statusName";
  nameDiv.innerText = gameState[`player${playerNum}Name`];

  playerStatusContainer.append(nameDiv);

  const shipsDiv = document.createElement("div");
  shipsDiv.id = "statusShips";

  const playerShips = playerBoard.ships;
  const shipsLength = playerShips.length;
  for (let i = 0; i < shipsLength; i++) {
    const shipObj = playerShips[i];
    const ship = createShip(playerShips[i], i, false);
    ship.style.position = "static";
    playerStatusContainer.append(ship);
    attachShipHighlight(ship);

    const size = shipObj.size;
    for (let j = 0; j < size; j++) {
      const indicator = document.createElement("div");
      indicator.classList.add("hitIndicator");
      if (enemyBoard.shotsHit.includes(`${shipObj.squares[j]}`)) {
        indicator.classList.add("hitSquare");
      }
      ship.append(indicator);
    }
    if (shipObj.isSunk) ship.style.opacity = "25%";
  }

  return playerStatusContainer;
};

let bigShipHighlight;
let smallShipHighlight;
let timer;

const attachShipHighlight = function (ship) {
  const highlightShip = () => {
    if (bigShipHighlight) {
      bigShipHighlight.classList.remove("shipHighlight");
    }
    if (smallShipHighlight) {
      smallShipHighlight.classList.remove("shipHighlight");
    }
    ship.classList.add("shipHighlight");
    bigShipHighlight = ship;
    const list = ship.classList;
    let smallShip;
    switch (true) {
      case list.contains("Carrier"):
        smallShip = document.querySelector(".smallShip.Carrier");
        smallShip.classList.add("shipHighlight");
        smallShipHighlight = smallShip;
        break;
      case list.contains("Battleship"):
        smallShip = document.querySelector(".smallShip.Battleship");
        smallShip.classList.add("shipHighlight");
        smallShipHighlight = smallShip;
        break;
      case list.contains("Destroyer"):
        smallShip = document.querySelector(".smallShip.Destroyer");
        smallShip.classList.add("shipHighlight");
        smallShipHighlight = smallShip;
        break;
      case list.contains("Submarine"):
        smallShip = document.querySelector(".smallShip.Submarine");
        smallShip.classList.add("shipHighlight");
        smallShipHighlight = smallShip;
        break;
      case list.contains("Patrol"):
        smallShip = document.querySelector(".smallShip.Patrol");
        smallShip.classList.add("shipHighlight");
        smallShipHighlight = smallShip;
        break;

      default:
        break;
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      if (bigShipHighlight) {
        bigShipHighlight.classList.remove("shipHighlight");
      }
      if (smallShipHighlight) {
        smallShipHighlight.classList.remove("shipHighlight");
      }
    }, 2500);
  };

  if (gameState.isMobile) {
    ship.addEventListener("touchstart", () => {
      highlightShip();
    });
  } else {
    ship.addEventListener("mousedown", () => {
      highlightShip();
    });
  }
};

const createFireStatus = function () {
  const statusFire = document.createElement("div");
  statusFire.id = "statusFire";
  statusFire.innerText = "Select square to attack";

  return statusFire;
};

const showFireConfirmation = function (square) {
  const statusFire = document.getElementById("statusFire");
  statusFire.innerText = "";

  const fireSquare = document.createElement("div");
  fireSquare.innerText = square.id;
  fireSquare.id = "statusFireSquare";

  const fireButton = document.createElement("button");
  fireButton.id = "statusFireButton";
  fireButton.innerText = "FIRE";
  fireButton.onclick = () => {
    console.log("Shot fired!");
    verifyShot(square.id);
  };

  statusFire.append(fireSquare);
  statusFire.append(fireButton);
};

const showFireStatus = function (message) {
  console.log(message);
  const statusFire = document.getElementById("statusFire");
  statusFire.innerHTML = "";
  statusFire.style.flexDirection = "column";

  const messageContainer = document.createElement("div");
  messageContainer.id = "resultMessage";
  messageContainer.innerText = message;

  const button = document.createElement("button");
  button.id = "endTurnButton";
  button.innerText = "End Turn";
  button.onclick = () => {
    displayPassScreen();
  };

  statusFire.append(messageContainer);
  statusFire.append(button);
};

let selectedSquare;

const highLightSquare = (square) => {
  if (
    square.classList.contains("missedSquare") ||
    square.classList.contains("hitSquare")
  ) {
    return;
  }
  if (selectedSquare) {
    selectedSquare.classList.remove("selectedSquare");
  }
  square.classList.add("selectedSquare");
  selectedSquare = square;
  showFireConfirmation(square);
};

const verifyShot = (squareID) => {
  const enemyShips = enemyBoard.ships;
  const length = enemyShips.length;
  let message = "MISS!";
  let hit = false;
  const square = document.getElementById(squareID);

  for (let i = 0; i < length; i++) {
    const ship = enemyShips[i];
    if (ship.squares.includes(squareID)) {
      ship.takeHit();
      hit = true;
      message = `Direct hit on enemy ${ship.name}!`;
      if (ship.isSunk) {
        message += `\nThe ${ship.name} has sunk.`;
      }
      break;
    }
  }
  setSquareResult(square, hit);
  showFireStatus(message);
};

const showPlayerShips = () => {
  const smallGrid = document.getElementById("smallGridContainer");
  const ships = playerBoard.ships;
  const length = ships.length;
  for (let i = 0; i < length; i++) {
    const ship = createShip(ships[i], i, false);
    ship.classList.add("smallShip");
    let reference = document.querySelector(
      `[data-coord=${ships[i].squares[0]}]`
    );
    smallGrid.append(ship);
    if (ships[i].vertical) {
      ship.classList.add("vertical");
    }
    setShipDimensions(ship, reference);
    snapToClosestSquare(ship, reference, true);
  }

  window.onresize = () => {
    const smallShips = document.querySelectorAll(".smallShip");
    for (let i = 0; i < length; i++) {
      const ref = document.querySelector(`[data-coord=${ships[i].squares[0]}]`);
      snapToClosestSquare(smallShips[i], ref);
    }
  };
};

const showPlayerShots = () => {
  playerBoard.shotsMissed.forEach((shot) => {
    const square = document.getElementById(shot);
    square.classList.add("missedSquare");
  });
  playerBoard.shotsHit.forEach((shot) => {
    const square = document.getElementById(shot);
    square.classList.add("hitSquare");
  });
};

const showEnemyShots = () => {
  enemyBoard.shotsMissed.forEach((shot) => {
    console.log(shot);
    const square = document.querySelector(`[data-coord=${shot}]`);
    square.classList.add("missedSquare");
  });
  enemyBoard.shotsHit.forEach((shot) => {
    console.log(shot);

    const square = document.querySelector(`[data-coord=${shot}]`);
    square.classList.add("hitSquare");
  });
};

const setSquareResult = (square, hit) => {
  if (hit) {
    square.classList.add("hitSquare");
    playerBoard.shotsHit.push(square.id);
  } else {
    square.classList.add("missedSquare");
    playerBoard.shotsMissed.push(square.id);
  }
};
