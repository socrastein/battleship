import "./style.css"
import { createStartScreen } from "./display/startScreen";

const mainContainer = document.getElementById("mainContainer");

mainContainer.append(createStartScreen())
