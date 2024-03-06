import "./style.css";
import { gameLoop } from "./gameLoop";
import { showEndScreen } from "./display/endScreen";
const screenOrientation = window.screen.orientation;
screenOrientation.lock("portrait")
showEndScreen("Matt");
