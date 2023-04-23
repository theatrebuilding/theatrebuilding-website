const maxSpeed = 10; // Max scrolling speed in pixels
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function updateScroll() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const centerX = viewportWidth / 2;
  const centerY = viewportHeight / 2;

  const deltaX = mouseY - centerY; // Inverted scroll direction for X
  const deltaY = mouseX - centerX; // Inverted scroll direction for Y
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
  const speed = Math.min(distance / maxDistance * maxSpeed, maxSpeed);

  const scrollX = speed * (deltaX / distance);
  const scrollY = speed * (deltaY / distance);

  let newScrollX = window.scrollX + scrollY;
  let newScrollY = window.scrollY + scrollX;

  // Loop the scroll when edges are reached
  const bodyWidth = document.body.scrollWidth;
  const bodyHeight = document.body.scrollHeight;
  
  if (newScrollX < 0) {
    newScrollX = bodyWidth + newScrollX;
  } else if (newScrollX + viewportWidth > bodyWidth) {
    newScrollX = newScrollX - bodyWidth + viewportWidth;
  }

  if (newScrollY < 0) {
    newScrollY = bodyHeight + newScrollY;
  } else if (newScrollY + viewportHeight > bodyHeight) {
    newScrollY = newScrollY - bodyHeight + viewportHeight;
  }

  window.scrollTo(newScrollX, newScrollY);
  requestAnimationFrame(updateScroll);
}

setTimeout(() => {
  requestAnimationFrame(updateScroll);
}, 2000); // Delay the script execution for 2 seconds
