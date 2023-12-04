document.addEventListener('DOMContentLoaded', function() {
    const curtain = document.getElementById('curtain');
    const footer = document.getElementById('footer');
    let startY, startTop;
    let interacted = false;
    
    function updateCurtainPosition() {
        const windowHeight = document.documentElement.clientHeight;
        const maxTop = windowHeight - 25 - curtain.offsetHeight; // Maximum 'top' value
        const initialTop = -windowHeight + 25; // Initial off-screen position

        curtain.style.top = initialTop + 'px'; // Set initial position
        

        footer.onmousedown = footer.ontouchstart = function(e) {
            interacted = true;
            startY = (e.touches ? e.touches[0].clientY : e.clientY);
            startTop = parseInt(window.getComputedStyle(curtain).top, 10);
            document.onmousemove = document.ontouchmove = onMove;
            document.onmouseup = document.ontouchend = onEnd;
        };

        function onMove(e) {
            e.preventDefault();
            let clientY = e.touches ? e.touches[0].clientY : e.clientY;
            let newPos = startTop + clientY - startY;

            // Restrict curtain movement within the visible viewport
            if (newPos >= initialTop && newPos <= maxTop) {
                curtain.style.top = newPos + 'px';
            }
        }

        function onEnd() {
            document.onmousemove = document.ontouchmove = null;
            document.onmouseup = document.ontouchend = null;
        }
    }

    function curtainPeek() {
        if(!interacted) {
            curtain.style.transition = 'top ease 1s';
            curtain.style.top = -windowHeight + 100 + 'px';
    
            setTimeout(function() {
                curtain.style.top = -windowHeight + 25 + 'px';
                setTimeout(function() {
                    curtain.style.transition = 'unset';
                  }, 1000); // 1-second delay
              }, 1000); // 1-second delay
        }
      }
      

      setTimeout(curtainPeek, 5000);
      setInterval(curtainPeek, 15000);

    window.onresize = updateCurtainPosition; // Update position on resize
    updateCurtainPosition(); // Initial setup

    
});


