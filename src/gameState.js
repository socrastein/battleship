import { shipObjects } from "./display/ships";

export const gameState = {
  isMobile: undefined,
  player1Name: undefined,
  player1Board: undefined,

  player2Name: undefined,
  player2Board: undefined,

  playerTurnNum: undefined,
  passTimer: 1,
};

export const runTest = () => {
  gameState.player1Name = "Player 1";
  gameState.player1Board = new GameBoard("Player 1");

  gameState.player2Name = "Player 2";
  gameState.player2Board = new GameBoard("Player 2");

  gameState.playerTurnNum = 1;
  gameState.passTimer = 0;

  const length = shipObjects.length;
  const rows = "ABCDE";

  for (let i = 0; i < length; i++) {
    const ship = shipObjects[i];
    const locArray = [];
    const row = rows[i];
    for (let l = 0; l < ship.size; l++) {
      locArray.push(`${row}${l + 1}`);
    }
    gameState.player1Board.addShip(ship.name, ship.size, false, locArray);
    gameState.player2Board.addShip(ship.name, ship.size, false, locArray);
  }
};

const isMobile = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else return false;
};

if (isMobile()) {
  gameState.isMobile = true;
} else {
  gameState.isMobile = false;
}
console.log("Mobile: " + gameState.isMobile);

//Gameboard objects
//#region

export const GameBoard = function (ownerName) {
  this.owner = ownerName;
  this.ships = [];
  this.shotsHit = [];
  this.shotsMissed = [];
};

GameBoard.prototype.addShip = function (name, size, vertical, locationArray) {
  const ship = new Ship(name, size, vertical);
  ship.setLocation(locationArray);
  this.ships.push(ship);
};

GameBoard.prototype.clearShips = function () {
  this.ships = [];
};

GameBoard.prototype.receiveAttack = function (square) {
  if (this.shotsMissed.includes(square)) {
    throw console.error("This square has already been fired upon.");
  }
  this.shotsMissed.push(square);
  this.ships.forEach((ship) => {
    if (ship.includes(square)) {
      ship.takeHit();
      return true;
    } else return false;
  });
};

GameBoard.prototype.sendAttack = function (gameboard, square) {
  if (this.shotsHit.includes(square)) {
    throw console.error("This square has already been fired upon.");
  }
  this.shotsHit.push(square);
  gameboard.receiveAttack(square);
};

GameBoard.prototype.shipsAreSunk = function () {
  this.ships.forEach((ship) => {
    if (!ship.isSunk) return false;
  });
  return true;
};

//#endregion

//Ship objects
//#region

const Ship = function (name, size, vertical) {
  this.name = name;
  this.size = size;
  this.vertical = vertical;
  this.squares = [];
  this.hits = 0;
  this.isSunk = false;
};

Ship.prototype.takeHit = function () {
  if (this.isSunk) {
    throw console.error("Ship has already been sunk.");
  }
  this.hits += 1;
  if (this.hits === this.size) {
    this.isSunk = true;
  }
};

Ship.prototype.setLocation = function (squares) {
  if (squares.length !== this.size) {
    throw console.error("Ship needs to occupy as many squares as its size.");
  }
  this.squares = [...squares];
};

//#endregion
