function createLoadingOverlay() {
    // Create overlay div
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.borderBottom = '1px solid white';
    overlay.style.backgroundColor = 'black';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.transition = 'transform 1s ease';
    overlay.style.zIndex = '1000'; // Ensure it's on top of other elements
    
    // Create inner div with text
    const textDiv = document.createElement('div');
    textDiv.textContent = 'Loading performance';
    textDiv.style.color = 'white'; // Ensure the text is visible

    // Create span for animated dots
    const dotsSpan = document.createElement('span');
    textDiv.appendChild(dotsSpan);

    // Append textDiv to overlay
    overlay.appendChild(textDiv);

    // Append overlay to body
    document.body.appendChild(overlay);

    // Function to update dots
    let dotCount = 0;
    function updateDots() {
        let dots = '.'.repeat(dotCount);
        dotsSpan.textContent = dots;
        dotCount = (dotCount + 1) % 4; // Cycle from 0 to 3
    }

    function curtainUp() {
        overlay.style.transform = 'translateY(-100%)';
        overlay.addEventListener('transitionend', () => {
            overlay.remove();
            clearInterval(updateDots); // Stop the dot animation
        });
    }

    // Start dot animation
    setInterval(updateDots, 500); // Adjust timing as needed

    // Animate and remove overlay after DOM content is loaded
    window.onload = () => {
        setTimeout(curtainUp, 1000);
    };
}

createLoadingOverlay();