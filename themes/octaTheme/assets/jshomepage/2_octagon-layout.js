// Constants for setting up the octagon grid
const gridContainer = document.getElementById("grid-container");
const octagonGrid = document.getElementById("octagon-grid");
const distanceBetweenOctagons = 310; // Distance between centers of adjacent octagons
const octagonSize = distanceBetweenOctagons - 10; // Size of each octagon
let layer = 1

// Calculate dimensions for the grid based on the layer
const gridDimsValue = layer * (distanceBetweenOctagons - 10) + distanceBetweenOctagons;
const gridDims = gridDimsValue + "px"; // Grid dimensions in pixels
const windowWidth = window.innerWidth; // Browser window width
const windowHeight = window.innerHeight; // Browser window height
const gridWidthLessThan = windowWidth - gridDimsValue; // Remaining width after placing grid
const gridHeightLessThan = windowHeight - gridDimsValue; // Remaining height after placing grid
const cellSizeW = gridDimsValue + gridWidthLessThan; // Total width including the grid and remaining width
const cellSizeH = gridDimsValue + gridHeightLessThan; // Total height including the grid and remaining height

// Generate random positions for incomplete layers
function generateRandomPositions(octagonsInLayer) {
  const allPositions = Array.from({ length: octagonsInLayer }, (_, i) => i);
  const randomPositions = []; // Array to store random positions
  
  // Randomly select positions until all positions are filled
  while (randomPositions.length < octagonsInLayer) {
    const randomIndex = Math.floor(Math.random() * allPositions.length);
    randomPositions.push(allPositions.splice(randomIndex, 1)[0]);
  }

return randomPositions;
}

// Function to set dimensions of an HTML element
function setDimensions(element, width, height) {
  element.style.width = width;
  element.style.height = height;
}

// Function to position octagons in the grid
function positionOctagons() {
  let octagons = document.querySelectorAll(".octagon");
  let octagonIndex = 0;
  let maxX = 0;
  let maxY = 0;
  
  // Loop through each octagon and position it
  while (octagonIndex < octagons.length) {
    const octagonsInLayer = layer === 1 ? 1 : 8 * (layer - 1);
    const layerWidth = (layer - 1) * distanceBetweenOctagons;
    const stepsPerSide = layer === 1 ? 1 : (layer - 1) * 2;
    
    const randomPositions = generateRandomPositions(octagonsInLayer, octagonsInLayer);

    // Position each octagon within the layer
    for (let i = 0; i < octagonsInLayer && octagonIndex < octagons.length; i++, octagonIndex++) {
      const side = Math.floor(randomPositions[i] / stepsPerSide);
      const step = randomPositions[i] % stepsPerSide;

      let xPos, yPos; // Variables for X and Y positions

      // Calculate positions based on the side and step
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

      // Set position to absolute for each octagon
      octagons[octagonIndex].style.position = "absolute";
      octagons[octagonIndex].style.left = `${xPos}px`;
      octagons[octagonIndex].style.top = `${yPos}px`;

      // Update maximum X and Y positions
      maxX = Math.max(maxX, xPos);
      maxY = Math.max(maxY, yPos);
    }

    // Increment layer for the next iteration
    layer++;

    // Adjust position of octagons based on layer
    octagons.forEach(octagon => {
      const translateValue = `${((layer - 2) * distanceBetweenOctagons)}px`;
      octagon.style.transform = `translate(${translateValue}, ${translateValue})`;
    });

    // Set dimensions and position of the octagon grid and its container
    const cellDims = (layer * distanceBetweenOctagons) + 10;
    const canvasMarginW = window.innerWidth;
    const canvasMarginH = window.innerHeight;
    octagonGrid.style.width = cellDims + "px";
    octagonGrid.style.height = cellDims + "px";
    octagonGrid.style.transform = `translate(${canvasMarginW}px,${canvasMarginH}px)`;
    gridContainer.style.width = (canvasMarginW * 2) + cellDims + "px";
    gridContainer.style.height = (canvasMarginH * 2) + cellDims + "px";
  }
  return { maxX, maxY }; // Return the maximum X and Y positions
}

// Function to find the highest negative positions among octagons
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

// Function to find the central octagon and scroll to it
function findCenterOctaAndScroll() {
  const targetElement = document.getElementsByClassName("octagon")[0];
//  const gridDims = layer * distanceBetweenOctagons + distanceBetweenOctagons;
//  const halfGridDims = gridDims / 2;
  
  // Calculate the center of the grid and scroll to it
  const targetRect = targetElement.getBoundingClientRect();
  const centerX = (window.innerWidth - targetRect.width) / 2;
  const centerY = (window.innerHeight - targetRect.height) / 2;
  const scrollPosition = {
    top: targetRect.top - centerY,
    left: targetRect.left - centerX,
  };

  // Scroll smoothly to the calculated position
  window.scrollBy({
    top: scrollPosition.top,
    left: scrollPosition.left,
    behavior: 'smooth'
  });
}

// Function to set dimensions of the grid based on the window size
function setGridDimensions() {
  const octagonGrid = document.getElementById("grid-container");
  octagonGrid.style.marginLeft = window.innerWidth;
  octagonGrid.style.marginRight = window.innerWidth;
  octagonGrid.style.marginTop = window.innerHeight;
  octagonGrid.style.marginBottom = window.innerHeight;
}



// Conditional execution based on whether user is on a mobile device or not (the isMobileDevice function is found in infinite-scroll.js)
if ( isMobileDevice() ) {
  
  loadingDomOverlay();
  
  } else {
    // Execute for non-mobile devices
    
    setGridDimensions(); // Set dimensions of the grid
    const { maxX, maxY } = positionOctagons(); // Position octagons and get max X, Y
    const { left: gridMoveLeft, top: gridMoveTop } = findHighestNegativePositions(); // Find highest negative positions
    findCenterOctaAndScroll(); // Scroll to the center octagon
  }