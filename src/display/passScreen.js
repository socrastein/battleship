import "./passScreen.css";
import { gameState } from "../gameState";
import { displayShipImage, displayTitle } from "./startScreen";
import { gameLoop, clearScreen } from "../gameLoop";

const passText = () => {
  return `Pass device to \n${gameState[`player${gameState.playerTurnNum}Name`]}`;
};
const buttonText = "Next Turn";

const toggleTurn = function () {
  if (gameState.playerTurnNum === undefined) {
    gameState.playerTurnNum = 1;
    return;
  }
  if (gameState.playerTurnNum === 1) {
    gameState.playerTurnNum = 2;
  } else gameState.playerTurnNum = 1;
};

export const displayPassScreen = function () {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  toggleTurn();

  const shipImage = displayShipImage();
  const shipTitle = displayTitle();

  const passScreen = document.createElement("div");
  passScreen.id = "passScreen";

  const passMessage = document.createElement("div");
  passMessage.id = "passScreenMessage";
  passMessage.innerText = passText();

  const passButton = document.createElement("button");
  passButton.id = "passScreenButton";
  passCountDown(passButton, gameState.passTimer);

  passScreen.append(shipImage);
  passScreen.append(shipTitle);

  passScreen.append(passMessage);
  passScreen.append(passButton);

  mainContainer.append(passScreen);
};

const passCountDown = function (element, seconds) {
  if (seconds === 0) {
    element.innerText = buttonText;
    element.style.backgroundColor = "lightgreen";
    element.onclick = () => {
      gameLoop();
    };
    return;
  }
  setTimeout(() => {
    passCountDown(element, seconds - 1);
  }, 1000);
  element.innerText = seconds;
};
