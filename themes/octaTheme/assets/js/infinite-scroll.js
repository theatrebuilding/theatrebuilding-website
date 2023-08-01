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
  const speed = Math.min((distance / maxDistance) * maxSpeed, maxSpeed);

  const scrollX = (speed * deltaX) / distance;
  const scrollY = (speed * deltaY) / distance;

  let newScrollX = window.scrollX + scrollY;
  let newScrollY = window.scrollY + scrollX;

  // Loop the scroll when edges are reached
  const bodyWidth = document.body.scrollWidth;
  const bodyHeight = document.body.scrollHeight;

  newScrollX = (newScrollX < 0) ? bodyWidth + newScrollX : (newScrollX + viewportWidth > bodyWidth) ? newScrollX - bodyWidth + viewportWidth : newScrollX;
  newScrollY = (newScrollY < 0) ? bodyHeight + newScrollY : (newScrollY + viewportHeight > bodyHeight) ? newScrollY - bodyHeight + viewportHeight : newScrollY;

  window.scrollTo(newScrollX, newScrollY);
  requestAnimationFrame(updateScroll);
}

setTimeout(() => {
  requestAnimationFrame(updateScroll);
}, 2000); // Delay the script execution for 2 seconds





// MOBILE TILT SCROLLING
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function(event) {
      var tiltLR = event.gamma; // range [-90,90], left-right tilt
      var tiltFB = event.beta;  // range [-180,180], front-back tilt

      var sensitivity = 5; // Change this value to adjust the sensitivity to device tilt

      // Use Math.round to round tilt values to nearest whole number
      // Multiply by sensitivity factor to speed up or slow down scrolling based on tilt
      var scrollAmountX = Math.round(tiltLR) * sensitivity;
      var scrollAmountY = Math.round(tiltFB) * sensitivity;

      // Adjust the current scroll position based on device tilt
      window.scrollBy(scrollAmountX, scrollAmountY);
      console.log(sensitivity);

  }, true);
} else {
  // The browser doesn't support DeviceOrientationEvent
  console.log("Sorry, your browser doesn't support Device Orientation events");
  
}