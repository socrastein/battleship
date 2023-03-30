import "./style.css";
// IMPORTING IMAGES:
// import MyImage from './my-image.png'

import createGrid from "./grid";
import createTopBar from "./topBar";
import squareClicked from "./squareClicked";
import gameState from "./gameState";
import loadingScreen from "./loadingScreen";

createTopBar();
createGrid();
const game = gameState();
game.logGameStage();
game.changeGameStage(3);
loadingScreen.loadingScreenStart();

