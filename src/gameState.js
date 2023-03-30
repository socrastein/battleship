export default function gameState() {
  const gameStages = [
    "Name Selection", // 0
    "Ship Placement", // 1
    "Player Firing",  // 2
    "Game Ending",    // 3
  ];

  let gameStage = gameStages[0];

  const logGameStage = () => {
    console.log(gameStage);
  };

  const changeGameStage = (stageNumber) => {
    gameStage = gameStages[stageNumber];
    console.log(`Game Stage set to: ${gameStage}`);
  }

  return { gameStages, gameStage, logGameStage, changeGameStage };
}
