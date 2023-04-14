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

  window.scrollBy(scrollY, scrollX);
  requestAnimationFrame(updateScroll);
}

setTimeout(() => {
    requestAnimationFrame(updateScroll);
  }, 2000); // Delay the script execution for 3 seconds