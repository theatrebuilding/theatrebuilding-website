const octagonGrid = document.querySelector(".octagon-grid");
let gridMoveLeft = 0;
let gridMoveTop = 0;

 function positionOctagons() {
   const octagons = document.querySelectorAll(".octagon");
   const distanceBetweenOctagons = 310;
 
   let layer = 1;
   let octagonIndex = 0;
 
   while (octagonIndex < octagons.length) {
     let octagonsInLayer;
     if (layer === 1) {
       octagonsInLayer = 1;
     } else {
       octagonsInLayer = 8 * (layer - 1);
     }
 
     const layerWidth = (layer - 1) * distanceBetweenOctagons;
     const stepsPerSide = layer === 1 ? 1 : (layer - 1) * 2;
 
     for (let i = 0; i < octagonsInLayer && octagonIndex < octagons.length; i++, octagonIndex++) {
       const side = Math.floor(i / stepsPerSide);
       const step = i % stepsPerSide;
 
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
 
       if (xPos >= 0 && yPos >= 0) {
         octagons[octagonIndex].style.position = "absolute";
         octagons[octagonIndex].style.left = `${xPos}px`;
         octagons[octagonIndex].style.top = `${yPos}px`;
       } else {
         octagons[octagonIndex].style.position = "absolute";
         octagons[octagonIndex].style.left = `${xPos}px`;
         octagons[octagonIndex].style.top = `${yPos}px`;      }
     }
 
     layer++;
   }
 }

function findHighestNegativePositions() {
  const octagons = document.querySelectorAll(".octagon");

  let highestNegativeLeft = 0;
  let highestNegativeTop = 0;

  octagons.forEach((octagon) => {
    const left = parseInt(octagon.style.left, 10);
    const top = parseInt(octagon.style.top, 10);

    if (left < highestNegativeLeft) {
      highestNegativeLeft = left;
    }

    if (top < highestNegativeTop) {
      highestNegativeTop = top;
    }
  });

  gridMoveLeft = highestNegativeLeft;
  gridMoveTop = highestNegativeTop;

}

function findCenterOctaAndScroll() {

    const octas = document.getElementsByClassName("octagon");
    const targetElement = octas[0];

    console.log(targetElement);
    console.log(gridMoveLeft);
    console.log(gridMoveTop);

    const rect = targetElement.getBoundingClientRect();
  const posY = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2);
  const posX = rect.left + window.scrollX - (window.innerWidth / 2) + (rect.width / 2);

    console.log(posY);
    console.log(posX);


    window.scrollBy({
      top: posY,
      left: posX,
      behavior: 'smooth'
    });


   //   const posY = -gridMoveTop / 2;
   //   const posX = -gridMoveLeft / 2;


    
    // Scroll to the element's position
   // targetElement.scrollIntoView({
   //   behavior: 'smooth', // Smooth scrolling animation
   //   block: 'start' // Align the target element to the top of the viewport
   // });


  
}


positionOctagons();
findHighestNegativePositions();

octagonGrid.style.left = -gridMoveLeft+'px';
octagonGrid.style.top = -gridMoveTop+'px';

findCenterOctaAndScroll();


