(() => {
  // <stdin>
  function isMobileDevice() {
    return typeof window.orientation !== "undefined" || (navigator.userAgent.indexOf("IEMobile") !== -1 || window.matchMedia("(max-width: 600px)").matches);
  }
  function applyScroll(scrollAmountX, scrollAmountY) {
    let newScrollX = window.scrollX + scrollAmountX;
    let newScrollY = window.scrollY + scrollAmountY;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const bodyWidth = document.body.scrollWidth;
    const bodyHeight = document.body.scrollHeight;
    newScrollX = newScrollX < 0 ? bodyWidth + newScrollX : newScrollX + viewportWidth > bodyWidth ? newScrollX - bodyWidth + viewportWidth : newScrollX;
    newScrollY = newScrollY < 0 ? bodyHeight + newScrollY : newScrollY + viewportHeight > bodyHeight ? newScrollY - bodyHeight + viewportHeight : newScrollY;
    window.scrollTo(newScrollX, newScrollY);
  }
  if (isMobileDevice()) {
    console.log("mobile");
  } else {
    let updateScroll = function() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight / 2;
      const deltaX = mouseY - centerY;
      const deltaY = mouseX - centerX;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const speed = Math.min(distance / maxDistance * maxSpeed, maxSpeed);
      const scrollX = speed * deltaX / distance;
      const scrollY = speed * deltaY / distance;
      applyScroll(scrollY, scrollX);
      requestAnimationFrame(updateScroll);
    };
    updateScroll2 = updateScroll;
    console.log("desktop");
    const maxSpeed = 2;
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });
    setTimeout(() => {
      requestAnimationFrame(updateScroll);
    }, 2e3);
  }
  var updateScroll2;
  var distanceBetweenOctagons = 310;
  var octagonSize = distanceBetweenOctagons - 10;
  var layer = 1;
  var gridContainer = document.getElementById("grid-container");
  var octagonGrid = document.getElementById("octagon-grid");
  var gridDimsValue = layer * (distanceBetweenOctagons - 10) + distanceBetweenOctagons;
  var gridDims = gridDimsValue + "px";
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var gridWidthLessThan = windowWidth - gridDimsValue;
  var gridHeightLessThan = windowHeight - gridDimsValue;
  var cellSizeW = gridDimsValue + gridWidthLessThan;
  var cellSizeH = gridDimsValue + gridHeightLessThan;
  function generateRandomPositions(octagonsInLayer) {
    const allPositions = Array.from({ length: octagonsInLayer }, (_, i) => i);
    const randomPositions = [];
    while (randomPositions.length < octagonsInLayer) {
      const randomIndex = Math.floor(Math.random() * allPositions.length);
      randomPositions.push(allPositions.splice(randomIndex, 1)[0]);
    }
    return randomPositions;
  }
  function positionOctagons() {
    let octagons = document.querySelectorAll(".octagon");
    let octagonIndex = 0;
    let maxX2 = 0;
    let maxY2 = 0;
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
          case 0:
            xPos = layerWidth;
            yPos = -layerWidth + step * distanceBetweenOctagons;
            break;
          case 1:
            xPos = layerWidth - step * distanceBetweenOctagons;
            yPos = layerWidth;
            break;
          case 2:
            xPos = -layerWidth;
            yPos = layerWidth - step * distanceBetweenOctagons;
            break;
          case 3:
          default:
            xPos = -layerWidth + step * distanceBetweenOctagons;
            yPos = -layerWidth;
            break;
        }
        octagons[octagonIndex].style.position = "absolute";
        octagons[octagonIndex].style.left = `${xPos}px`;
        octagons[octagonIndex].style.top = `${yPos}px`;
        maxX2 = Math.max(maxX2, xPos);
        maxY2 = Math.max(maxY2, yPos);
      }
      layer++;
      octagons.forEach((octagon) => {
        const translateValue = `${(layer - 2) * distanceBetweenOctagons}px`;
        octagon.style.transform = `translate(${translateValue}, ${translateValue})`;
      });
      const cellDims = layer * distanceBetweenOctagons + 10;
      const canvasMarginW = window.innerWidth;
      const canvasMarginH = window.innerHeight;
      octagonGrid.style.width = cellDims + "px";
      octagonGrid.style.height = cellDims + "px";
      octagonGrid.style.transform = `translate(${canvasMarginW}px,${canvasMarginH}px)`;
      gridContainer.style.width = canvasMarginW * 2 + cellDims + "px";
      gridContainer.style.height = canvasMarginH * 2 + cellDims + "px";
    }
    return { maxX: maxX2, maxY: maxY2 };
  }
  function findHighestNegativePositions() {
    const octagons = document.querySelectorAll(".octagon");
    return Array.from(octagons).reduce(
      (acc, octagon) => {
        const left = parseInt(octagon.style.left, 10);
        const top = parseInt(octagon.style.top, 10);
        return {
          left: Math.min(acc.left, left),
          top: Math.min(acc.top, top)
        };
      },
      { left: 0, top: 0 }
    );
  }
  function findCenterOctaAndScroll() {
    const targetElement = document.getElementsByClassName("octagon")[0];
    const gridDims2 = layer * distanceBetweenOctagons + distanceBetweenOctagons;
    const halfGridDims = gridDims2 / 2;
    const targetRect = targetElement.getBoundingClientRect();
    const centerX = (window.innerWidth - targetRect.width) / 2;
    const centerY = (window.innerHeight - targetRect.height) / 2;
    const scrollPosition = {
      top: targetRect.top - centerY,
      left: targetRect.left - centerX
    };
    window.scrollBy({
      top: scrollPosition.top,
      left: scrollPosition.left,
      behavior: "smooth"
    });
  }
  function setGridDimensions() {
    const octagonGrid2 = document.getElementById("grid-container");
    octagonGrid2.style.marginLeft = window.innerWidth;
    octagonGrid2.style.marginRight = window.innerWidth;
    octagonGrid2.style.marginTop = window.innerHeight;
    octagonGrid2.style.marginBottom = window.innerHeight;
  }
  setGridDimensions();
  var { maxX, maxY } = positionOctagons();
  var { left: gridMoveLeft, top: gridMoveTop } = findHighestNegativePositions();
  findCenterOctaAndScroll();
})();
