import { gameState, GameBoard, runTest } from "./gameState";
import createGrid from "./display/gameGrid";
import { createStartScreen } from "./display/startScreen";
import { displayPlaceableShips } from "./display/ships";
import { displayFiringScreen } from "./display/firingScreen";

const mainContainer = document.getElementById("mainContainer");

export const clearScreen = function () {
  mainContainer.innerHTML = "";
};

export const gameLoop = function (test = false) {
  if (test) {
    runTest();
  }
  clearScreen();
  if (!gameState.player1Name) {
    createStartScreen();
    return;
  }

  if (!gameState.player1Board) {
    setupShipPlacement(1);
    return;
  }

  if (!gameState.player2Board) {
    setupShipPlacement(2);
    return;
  }

  if (test) {
    console.log(gameState.player1Board);
    console.log(gameState.player2Board);
  }
  displayFiringScreen();
};

const setupShipPlacement = function (playerNum) {
  gameState.playerTurnNum = playerNum;
  gameState[`player${playerNum}Board`] = new GameBoard(
    gameState[`player${playerNum}Name`]
  );
  mainContainer.append(createGrid());
  displayPlaceableShips();
};
