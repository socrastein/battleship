const gameState = {
  player1Name: undefined,
  player1Board: undefined,

  player2Name: undefined,
  player2Board: undefined,

  playerTurn: undefined,
};

//Gameboard objects

const GameBoard = function (ownerName) {
  this.owner = ownerName;
  this.ships = [];
  this.shotsFired = [];
  this.shotsTaken = [];
};

GameBoard.prototype.addShip = function (name, size, locationArray) {
  const ship = new Ship(name, size);
  ship.setLocation(locationArray);
  this.ships.push(ship);
};

GameBoard.prototype.receiveAttack = function (square) {
  if (this.shotsTaken.includes(square)) {
    throw console.error("This square has already been fired upon.");
  }
  this.shotsTaken.push(square);
  this.ships.forEach((ship) => {
    if (ship.includes(square)) {
      ship.takeHit();
      return true;
    } else return false;
  });
};

GameBoard.prototype.sendAttack = function (gameboard, square) {
  if (this.shotsFired.includes(square)) {
    throw console.error("This square has already been fired upon.");
  }
  this.shotsFired.push(square);
  gameboard.receiveAttack(square);
};

GameBoard.prototype.shipsAreSunk = function () {
  this.ships.forEach((ship) => {
    if (!ship.isSunk) return false;
  });
  return true;
};

//Ship objects

const Ship = function (name, size) {
  this.name = name;
  this.size = size;
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

module.exports = { Ship, GameBoard, gameState };
