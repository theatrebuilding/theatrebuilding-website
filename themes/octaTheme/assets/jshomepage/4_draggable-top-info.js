// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Element references
    const curtain = document.getElementById('curtain');
    const footer = document.getElementById('footer');
    const arrowBtn = document.getElementById('footer-arrow');
    const burgerMenu = document.getElementById('burger-menu');

    // Variables for tracking touch/mouse start positions and whether the menu has been interacted with or not
    let startY, startTop, interacted = false;

    // Function to shuffle statements within the curtain element
    function shuffleStatements() {
        const statements = document.getElementsByClassName('curtain-statement');
        const statementsArray = Array.from(statements);
        
        // Fisher-Yates shuffle algorithm
        for (let i = statementsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [statementsArray[i], statementsArray[j]] = [statementsArray[j], statementsArray[i]];
        }
        const parent = statementsArray[0].parentNode;
        parent.textContent = '';
        statementsArray.forEach(statement => parent.appendChild(statement));
    }

    // Function to set curtain transition with a default duration of 1 second
    function setTransition(duration = '1s') {
        curtain.style.transition = `top ease ${duration}`;
    }

    // Function to unset the transition for the curtain
    function resetTransition() {
        curtain.style.transition = 'unset';
    }

    // Function to resize the curtain, adjusting its position based on device type
    function resizeCurtain() {
        curtain.style.transition = 'top ease 1s';
        if (isMobileDevice()) {
            updateCurtainPositionMobile();
        } else {
            updateCurtainPositionDesktop();
        }
        setTimeout(function() {
            resetTransition();
          }, 1000); // Resets transition after 1 second
    }  

    // Function to set the initial position of the curtain based on device type
    function setInitialPosition() {
        const windowHeight = document.documentElement.clientHeight;
        if(isMobileDevice()) {

            // Mobile-specific positioning and element style adjustments
            curtain.style.top = -windowHeight + 100 + 'px';
            arrowBtn.style.display = 'none';
            document.getElementById('join-console-text').style.display = 'none';  
            document.getElementById('inner-curtain').style.height = document.documentElement.clientHeight - 100 + 'px';
            setTimeout(function() {
                document.getElementById('inner-curtain').style.display = 'none';
              }, 1000); // 1-second delay
            curtain.style.position = 'fixed';
        } else {
            
            // Desktop-specific positioning and element style adjustments
            curtain.style.top = -windowHeight + 25 + 'px';
            document.getElementById('inner-curtain').style.height = document.documentElement.clientHeight - 100 + 'px';
            burgerMenu.style.display = 'none';
            arrowBtn.style.display = 'block';
        }  
    }

    // Function to update curtain position on desktop devices
    function updateCurtainPositionDesktop() {
        setInitialPosition();

        // Event handlers for dragging the curtain using the footer
        footer.onmousedown = footer.ontouchstart = function(e) {
            interacted = true;
            startY = (e.touches ? e.touches[0].clientY : e.clientY);
            startTop = parseInt(window.getComputedStyle(curtain).top, 10);

            // Handlers for moving the curtain as the mouse moves or touch moves
            document.onmousemove = document.ontouchmove = function(e) {
                e.preventDefault();
                let clientY = e.touches ? e.touches[0].clientY : e.clientY;
                let newPos = startTop + clientY - startY;

                // Limits the movement of the curtain within the window bounds
                const windowHeight = document.documentElement.clientHeight;
                const maxTop = windowHeight - 25 - curtain.offsetHeight;
                if (newPos >= -windowHeight + 25 && newPos <= maxTop) {
                    curtain.style.top = newPos + 'px';
                }
            };

            // Handlers to stop moving the curtain when mouse is released or touch ends
            document.onmouseup = document.ontouchend = function() {
                document.onmousemove = document.ontouchmove = null;
                document.onmouseup = document.ontouchend = null;
            };
        };
    }

    // Function to update curtain position on mobile devices
    function updateCurtainPositionMobile() {
        if (!interacted) {
            setInitialPosition();
        } else {
            return;
        }
        const welcomeText = document.getElementById('inner-curtain');
        
        // Handler for burger menu click event
        function handleBurgerMenuClick() {
            if (!interacted) {
                setTransition();
                welcomeText.style.display = 'block';
                curtain.style.top = '0';
                setTimeout(resetTransition, 1000); // 1-second delay
                interacted = true;
            } else {
                setTransition();
                setInitialPosition();
                setTimeout(resetTransition, 1000); // 1-second delay
                interacted = false;
            }
        }

        // Event listener for burger menu click
        burgerMenu.addEventListener('click', handleBurgerMenuClick);
    }

    // Function to make the curtain animate briefly to come into view
    function curtainPeek() {
        const windowHeight = document.documentElement.clientHeight;
        if(!interacted) {
            setTransition();
            curtain.style.top = -windowHeight + 100 + 'px';

            setTimeout(function() {
                curtain.style.top = -windowHeight + 25 + 'px';
                setTimeout(resetTransition, 1000); // 1-second delay
            }, 1000); // 1-second delay
        }
    }

    // Conditional execution based on device type
    if (isMobileDevice()) {
        shuffleStatements();
        updateCurtainPositionMobile();
        window.onresize = setInitialPosition;
    } else {
        window.onresize = resizeCurtain;
        updateCurtainPositionDesktop();
        shuffleStatements();
        setTimeout(curtainPeek, 5000); // Curtain peeks after 5 seconds
        setInterval(curtainPeek, 30000); // Repeats every 30 seconds
    }
});