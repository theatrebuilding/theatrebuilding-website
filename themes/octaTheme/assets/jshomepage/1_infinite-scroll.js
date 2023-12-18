// Function to check if the current device is a mobile device (this function is accessible within onther .js files because the .js files get bundeled by Hugo on build)
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1 || window.matchMedia("(max-width: 760px)").matches);
}

// Conditional execution based users device
// If the current device is a mobile device, we don't want to do anything. We just want to keep the flex column that we currently have as it is quite simple and easy to understand on mobile.
if ( isMobileDevice() ) {
  
// TO-DO
// Maybe other things to do here in future...


} else {
  // ELSE IF IS DESKTOP
  const maxSpeed = 2; // Max scrolling speed in pixels
  let mouseX = 0;     // Current mouse X position
  let mouseY = 0;     // Current mouse Y position

  // Function to apply scroll based on calculated amounts
  function applyScroll(scrollAmountX, scrollAmountY) {
    
    // Calculate new scroll positions
    let newScrollX = window.scrollX + scrollAmountX;
    let newScrollY = window.scrollY + scrollAmountY;
    
    // Get viewport and document dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const bodyWidth = document.body.scrollWidth;
    const bodyHeight = document.body.scrollHeight;
    
    // Adjust scroll position for looping scroll
    newScrollX = (newScrollX < 0) ? bodyWidth + newScrollX : (newScrollX + viewportWidth > bodyWidth) ? newScrollX - bodyWidth + viewportWidth : newScrollX;
    newScrollY = (newScrollY < 0) ? bodyHeight + newScrollY : (newScrollY + viewportHeight > bodyHeight) ? newScrollY - bodyHeight + viewportHeight : newScrollY;
    
    // Apply calculated scroll positions
    window.scrollTo(newScrollX, newScrollY);
  }
  
  // Function to update scroll based on mouse position
  function updateScroll() {
    
    // Get viewport center
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;
    
    // Calculate delta for scroll direction
    const deltaX = mouseY - centerY; // Inverted scroll direction for X
    const deltaY = mouseX - centerX; // Inverted scroll direction for Y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Calculate dynamic scroll speed
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const speed = Math.min((distance / maxDistance) * maxSpeed, maxSpeed);
    
    // Apply scroll based on speed and direction
    const scrollX = (speed * deltaX) / distance;
    const scrollY = (speed * deltaY) / distance;
    applyScroll(scrollY, scrollX);
    
    // Continuously update scroll
    requestAnimationFrame(updateScroll);
  }

  // Event listener for mouse movement
  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  // Delay the start of the script execution
  setTimeout(() => {
    requestAnimationFrame(updateScroll);
  }, 2000); // Delay the script execution for 2 seconds
}
