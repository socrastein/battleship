import "./passScreen.css";
import { displayShipImage, displayTitle } from "./startScreen";
import { clearGameState } from "../gameState";
import { gameLoop } from "../gameLoop";

export const showEndScreen = function (winnerName) {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const shipImage = displayShipImage();
  const shipTitle = displayTitle();

  const endScreen = document.createElement("div");
  endScreen.id = "passScreen";

  const passMessage = document.createElement("div");
  passMessage.id = "passScreenMessage";
  passMessage.innerText = `Game Over\n${winnerName} has destroyed the enemy fleet!`;
  passMessage.style.fontSize = "1.5rem";

  const mainMenuButton = document.createElement("button");
  mainMenuButton.id = "passScreenButton";
  mainMenuButton.innerText = "Main Menu";
  mainMenuButton.onclick = () => {
    clearGameState();
    gameLoop();
  };

  endScreen.append(shipImage);
  endScreen.append(shipTitle);

  endScreen.append(passMessage);
  endScreen.append(mainMenuButton);

  mainContainer.append(endScreen);
};
