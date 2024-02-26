import { gameState } from "./gameState";

export const startGame = function () {
  console.log("Beginning new game!");
  console.log(`Player 1: ${gameState.player1Name}`);
  console.log(`Player 2: ${gameState.player2Name}`);
};

const gameLoop = function () {};
