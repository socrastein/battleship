import "./startScreen.css";
import { gameState, GameBoard } from "../gameState";
import { displayPassScreen } from "./passScreen";

import shipImg from "../images/battleship.svg";
import { gameLoop } from "../gameLoop";

export const displayShipImage = function () {
  const img = document.createElement("img");
  img.id = "startImage";
  img.src = shipImg;

  return img;
};

export const displayTitle = function () {
  const title = document.createElement("h1");
  title.id = "startTitle";
  title.textContent = "BATTLESHIP";

  return title;
};

export const createStartScreen = function (test) {
  const mainContainer = document.getElementById("mainContainer");

  const startContainer = document.createElement("div");
  startContainer.id = "startContainer";

  //Title image and text

  const startTitleContainer = document.createElement("div");
  startTitleContainer.id = "startTitleContainer";

  const startImage = displayShipImage();
  const startTitle = displayTitle();

  startTitleContainer.append(startImage);
  startTitleContainer.append(startTitle);

  //Begin new game button

  const startInputContainer = document.createElement("div");
  startInputContainer.id = "startInputContainer";

  const startNewButton = document.createElement("button");
  startNewButton.id = "startNewButton";
  startNewButton.textContent = "New Game";
  startNewButton.addEventListener("click", () => {
    displayNameInput(1);
  });

  startInputContainer.append(startNewButton);

  startContainer.append(startTitleContainer);
  startContainer.append(startInputContainer);

  return mainContainer.append(startContainer);
};

const displayNameInput = function (playerNumber) {
  //Get and clear input container
  const inputContainer = document.getElementById("startInputContainer");
  inputContainer.innerHTML = "";

  const label = document.createElement("label");
  label.textContent = `Enter name for Player ${playerNumber}`;
  label.id = "startInputLabel";
  label.for = "startInputField";

  const field = document.createElement("input");
  field.id = "startInputField";
  field.placeholder = `Player ${playerNumber}`;
  field.addEventListener("keydown", (key) => {
    if (key.keyCode === 13) {
      if (field.value.length > 0) {
        enterPlayerName(field.value.trim());
      }
    }
  });

  const button = document.createElement("button");
  button.id = "startNewButton";
  button.textContent = "Accept";
  button.addEventListener("click", () => {
    if (field.value.length > 0) {
      enterPlayerName(field.value.trim());
    }
  });

  inputContainer.append(label);
  inputContainer.append(field);
  field.focus();
  inputContainer.append(button);
};

const enterPlayerName = function (name) {
  if (gameState.player1Name === undefined) {
    gameState.player1Name = name;
    displayNameInput(2);
    return;
  }
  if (gameState.player2Name === undefined) {
    gameState.player2Name = name;
    displayPassScreen();
  }
};
