import newGame from "./startGame";

export default function createTopBar(){
  const topBarContainer = document.getElementById("topBarContainer");
  let game = newGame();
  let playerOne = game.getFirstName();
  let playerTwo = game.getSecondName();

  const topBarGameTitle = document.createElement("div");
  topBarGameTitle.id = "topBarGameTitle";
  topBarGameTitle.classList.add("topBarItem");
  topBarGameTitle.innerHTML = "<h1>Battleship</h1>";

  const topBarLeftName = document.createElement("div");
  topBarLeftName.id = "topBarLeftName";
  topBarLeftName.classList.add("topBarItem");
  topBarLeftName.innerHTML = `<h2>${playerOne}</h2>`;

  const topBarRightName = document.createElement("div");
  topBarRightName.id = "topBarRightName";
  topBarRightName.classList.add("topBarItem");
  topBarRightName.innerHTML = `<h2>${playerTwo}</h2>`;

  topBarContainer.appendChild(topBarLeftName);
  topBarContainer.appendChild(topBarGameTitle);
  topBarContainer.appendChild(topBarRightName);
}