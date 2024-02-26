const gameState = {
  player1Name: undefined,
  player2Name: undefined,
  playerTurn: undefined,
};

const GameBoard = function (ownerName) {
  this.owner = ownerName;
  this.ships = [];
  this.shotsFired = [];
  this.shotsTaken = [];
}

GameBoard.prototype.receiveAttack = function (square) {
  this.ships.forEach((ship) => {
    if (ship.includes(square)) {
      ship.takeHit();
      return true;
    } else return false;
  });
}

const Ship = function (name, size) {
  this.name = name;
  this.size = size;
  this.squares = [];
  this.hits = 0;
  this.isSunk = false;
};

Ship.prototype.takeHit = function () {
  if(this.isSunk){
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

module.exports = { Ship, GameBoard }
