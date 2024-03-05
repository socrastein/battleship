import "./style.css";
import { gameLoop } from "./gameLoop";
const screenOrientation = window.screen.orientation;
screenOrientation.lock("portrait")
gameLoop();
