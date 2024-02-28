import "./style.css";
import { createStartScreen } from "./display/startScreen";
import { startGame } from "./gameLoop";
import { gameState } from "./gameState";

const mainContainer = document.getElementById("mainContainer");

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

if(isMobile){
    gameState.isMobile = true;
} else {
    gameState.isMobile = false;
}

startGame(true);
