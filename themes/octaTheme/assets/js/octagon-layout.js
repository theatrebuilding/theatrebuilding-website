const distanceBetweenOctagons = 310;
let layer = 1
const gridContainer = document.getElementById("grid-container");
const gridDimsValue = layer * (distanceBetweenOctagons - 10) + distanceBetweenOctagons;
const gridDims = gridDimsValue + "px";
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const gridWidthLessThan = windowWidth - gridDimsValue;
const gridHeightLessThan = windowHeight - gridDimsValue;
const cellSizeW = gridDimsValue + gridWidthLessThan;
const cellSizeH = gridDimsValue + gridHeightLessThan;
gridContainer.style.gridTemplateColumns = "repeat(3, " + gridDims + ")";
gridContainer.style.gridTemplateRows = "repeat(3, " + gridDims + ")";

// Generate random positions for incomplete layers
function generateRandomPositions(octagonsInLayer) {
  const allPositions = Array.from({ length: octagonsInLayer }, (_, i) => i);
  const randomPositions = [];

  while (randomPositions.length < octagonsInLayer) {
    const randomIndex = Math.floor(Math.random() * allPositions.length);
    randomPositions.push(allPositions.splice(randomIndex, 1)[0]);
  }

return randomPositions;
}

function setDimensions(element, width, height) {
  element.style.width = width;
  element.style.height = height;
}

function positionOctagons() {
  let octagons = document.querySelectorAll(".octagon");
  let octagonIndex = 0;
  let maxX = 0;
  let maxY = 0;
  const elements = [document.querySelector('main'), document.querySelector('body'), document.querySelector('html')];

  while (octagonIndex < octagons.length) {
    const octagonsInLayer = layer === 1 ? 1 : 8 * (layer - 1);
    const layerWidth = (layer - 1) * distanceBetweenOctagons;
    const stepsPerSide = layer === 1 ? 1 : (layer - 1) * 2;
    


    const randomPositions = generateRandomPositions(octagonsInLayer, octagonsInLayer);

    for (let i = 0; i < octagonsInLayer && octagonIndex < octagons.length; i++, octagonIndex++) {
      const side = Math.floor(randomPositions[i] / stepsPerSide);
      const step = randomPositions[i] % stepsPerSide;

      let xPos, yPos;

      switch (side) {
        case 0: // right
          xPos = layerWidth;
          yPos = -layerWidth + step * distanceBetweenOctagons;
          break;
        case 1: // bottom
          xPos = layerWidth - step * distanceBetweenOctagons;
          yPos = layerWidth;
          break;
        case 2: // left
          xPos = -layerWidth;
          yPos = layerWidth - step * distanceBetweenOctagons;
          break;
        case 3: // top
        default:
          xPos = -layerWidth + step * distanceBetweenOctagons;
          yPos = -layerWidth;
          break;
      }

      octagons[octagonIndex].style.position = "absolute";
      octagons[octagonIndex].style.left = `${xPos}px`;
      octagons[octagonIndex].style.top = `${yPos}px`;
      maxX = Math.max(maxX, xPos);
      maxY = Math.max(maxY, yPos);
    }

    layer++;

    const translateValue = `${layer * distanceBetweenOctagons / 2}px`;
    octagons.forEach(octagon => {
      octagon.style.transform = `translate(${translateValue}, ${translateValue})`;
    });

    const cellDims = layer * distanceBetweenOctagons + distanceBetweenOctagons;
    const gridDims = cellDims * 3;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    elements.forEach(el => {
      setDimensions(
        el,
        `${Math.max(gridDims, windowWidth) + windowWidth}px`,
        `${Math.max(gridDims, windowHeight) + windowHeight - maxY}px`
      );
    });
    
    
  }
  return { maxX, maxY };
}

function findHighestNegativePositions() {
  const octagons = document.querySelectorAll(".octagon");

  return Array.from(octagons).reduce(
    (acc, octagon) => {
      const left = parseInt(octagon.style.left, 10);
      const top = parseInt(octagon.style.top, 10);

      return {
        left: Math.min(acc.left, left),
        top: Math.min(acc.top, top),
      };
    },
    { left: 0, top: 0 }
  );
}

function findCenterOctaAndScroll() {
  const targetElement = document.getElementsByClassName("octagon")[0];
  const gridDims = layer * distanceBetweenOctagons + distanceBetweenOctagons;
  const halfGridDims = gridDims / 2;
  
  const targetRect = targetElement.getBoundingClientRect();
  const centerX = (window.innerWidth - targetRect.width) / 2;
  const centerY = (window.innerHeight - targetRect.height) / 2;

  const scrollPosition = {
    top: targetRect.top - centerY,
    left: targetRect.left - centerX,
  };

  window.scrollBy({
    top: scrollPosition.top,
    left: scrollPosition.left,
    behavior: 'smooth'
  });
}

function setGridDimensions() {
  const style = document.createElement("style");
  style.textContent = `
    #grid-container > div {
      min-width: ${cellSizeW}px;
      min-height: ${cellSizeH}px;
    }`;
  document.head.appendChild(style);

  const octagonGrid = document.getElementById("octagon-grid");
  octagonGrid.style.width = gridDims;
  octagonGrid.style.height = gridDims;
}

setGridDimensions();
const { maxX, maxY } = positionOctagons();
const { left: gridMoveLeft, top: gridMoveTop } = findHighestNegativePositions();
findCenterOctaAndScroll();




// Get the body of the HTML page.
const body = document.body;

// Create a new background image.
const textureImage = new Image();

// Set the source of the background image to a texture image.
textureImage.src = "";

// Set the background image of the body to the texture image.
body.style.backgroundImage = "url(" + textureImage.src + ")";

// Set the background repeat of the body to no-repeat.
body.style.backgroundRepeat = "repeat";

// Set the background size of the body to cover the entire body.
body.style.backgroundSize = "500px";