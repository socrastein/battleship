export const gameState = {
  player1: undefined,
  player2: undefined,
  playerTurn: undefined,
};

const player = function (name) {
  this.name = name;
  this.ships = [];
  this.shots = [];
};

player.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

player.prototype.checkShot = function (square) {
  this.ships.forEach((ship) => {
    if (ship.includes(square)) {
      ship.takeHit();
      return true;
    } else return false;
  });
};

const ship = function (name, size) {
  this.name = name;
  this.size = size;
  this.squares = [];
  this.hits = 0;
  this.isSunk = false;
};

ship.prototype.takeHit = function () {
  this.hits += 1;
  if (this.hits === this.size) {
    this.isSunk = true;
  }
};

ship.prototype.setLocation = function ([squares]) {
  if (squares.length !== this.size) {
    throw console.error("Ship needs to occupy as many squares as its size.");
  }
  this.squares = [...squares];
};
