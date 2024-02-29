import { gameState, GameBoard } from "./gameState";
import createGrid from "./display/gameGrid";
import { displayPlaceableShips, setShipDimensions } from "./display/ships";

const mainContainer = document.getElementById("mainContainer");

export const startGame = function (test = false) {
  if (test) {
    gameState.player1Name = "Matt";
    gameState.player2Name = "Summer";
  }
  console.log("Beginning new game!");
  console.log(`Player 1: ${gameState.player1Name}`);
  console.log(`Player 2: ${gameState.player2Name}`);
  gameState.player1Board = new GameBoard(gameState.player1Name);
  gameState.player2Board = new GameBoard(gameState.player2Name);
  gameState.playerTurnNum = 1;

  mainContainer.append(createGrid());
  mainContainer.append(displayPlaceableShips())
  setShipDimensions();

};

export const squareClicked = function (squareID) {
  const square = document.getElementById(squareID);
};

const gameLoop = function () {};
