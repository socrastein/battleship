import "./style.css";
// IMPORTING IMAGES:
// import MyImage from './my-image.png'

import createGrid from "./gameGrid";

const mainContainer = document.getElementById("mainContainer");

mainContainer.append(createGrid())
