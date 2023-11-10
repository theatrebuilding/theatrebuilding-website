function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1 || window.matchMedia("(max-width: 600px)").matches);
}

function applyScroll(scrollAmountX, scrollAmountY) {
  let newScrollX = window.scrollX + scrollAmountX;
  let newScrollY = window.scrollY + scrollAmountY;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const bodyWidth = document.body.scrollWidth;
  const bodyHeight = document.body.scrollHeight;

  newScrollX = (newScrollX < 0) ? bodyWidth + newScrollX : (newScrollX + viewportWidth > bodyWidth) ? newScrollX - bodyWidth + viewportWidth : newScrollX;
  newScrollY = (newScrollY < 0) ? bodyHeight + newScrollY : (newScrollY + viewportHeight > bodyHeight) ? newScrollY - bodyHeight + viewportHeight : newScrollY;

  window.scrollTo(newScrollX, newScrollY);
}


if ( isMobileDevice() ) {
  
// TO-DO
// Scrolling based on mobile device tilt, beta, gamma.

} else {
  const maxSpeed = 2; // Max scrolling speed in pixels
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
    const speed = Math.min((distance / maxDistance) * maxSpeed, maxSpeed);
  
    const scrollX = (speed * deltaX) / distance;
    const scrollY = (speed * deltaY) / distance;
  
    applyScroll(scrollY, scrollX);
  
    requestAnimationFrame(updateScroll);
  }

  setTimeout(() => {
    requestAnimationFrame(updateScroll);
  }, 2000); // Delay the script execution for 2 seconds
}
