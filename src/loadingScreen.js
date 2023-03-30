import loadingIconImage from "./icons/loading.svg"; // TODO: add icon to folder and fix path

export default {
  loadingScreenEnd() {
    console.log("Ending loading screen");
    let fullScreenContainer = document.getElementById("loadingScreenContainer");
    fullScreenContainer.style.display = "none";
  },

  loadingScreenStart() {
    let fullScreenContainer = document.createElement("div");
    fullScreenContainer.id = "loadingScreenContainer";
    fullScreenContainer.style.height = "100vh";
    fullScreenContainer.style.width = "100vw";
    fullScreenContainer.style.backgroundColor = "white";
    fullScreenContainer.style.zIndex = "5";
    fullScreenContainer.style.position = "absolute";
    fullScreenContainer.style.top = "0";
    fullScreenContainer.style.left = "0";
    fullScreenContainer.style.display = "flex";
    fullScreenContainer.style.justifyContent = "center";
    fullScreenContainer.style.alignItems = "center";
    fullScreenContainer.style.gap = "8px";

    let loadingIcon = document.createElement("img");
    loadingIcon.src = loadingIconImage;
    loadingIcon.style.height = "25px";
    loadingIcon.style.width = "25px";
    loadingIcon.style.animation = "spinning 2s infinite";

    let loadingText = document.createElement("h2");
    loadingText.textContent = "Loading...";

    fullScreenContainer.appendChild(loadingIcon);
    fullScreenContainer.appendChild(loadingText);
    document.body.appendChild(fullScreenContainer);

    setTimeout(this.loadingScreenEnd, 3000);
  },
};
