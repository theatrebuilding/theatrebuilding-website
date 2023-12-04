document.addEventListener('DOMContentLoaded', function() {
    const curtain = document.getElementById('curtain');
    const footer = document.getElementById('footer');
    const arrowBtn = document.getElementById('footer-arrow');
    const burgerMenu = document.getElementById('burger-menu');
    let startY, startTop, interacted = false;

    function shuffleStatements() {
        const statements = document.getElementsByClassName('curtain-statement');
        const statementsArray = Array.from(statements);
        for (let i = statementsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [statementsArray[i], statementsArray[j]] = [statementsArray[j], statementsArray[i]];
        }
        const parent = statementsArray[0].parentNode;
        parent.textContent = '';
        statementsArray.forEach(statement => parent.appendChild(statement));
    }

    function setTransition(duration = '1s') {
        curtain.style.transition = `top ease ${duration}`;
    }

    function resetTransition() {
        curtain.style.transition = 'unset';
    }

    function resizeCurtain() {
        curtain.style.transition = 'top ease 1s';
        if (isMobileDevice()) {
            updateCurtainPositionMobile();
        } else {
            updateCurtainPositionDesktop();
        }
        setTimeout(function() {
            curtain.style.transition = 'unset';
          }, 1000); // 1-second delay
    }  

    function setInitialPosition() {
        const windowHeight = document.documentElement.clientHeight;
        if(isMobileDevice()) {
            curtain.style.top = -windowHeight + 100 + 'px';
            curtain.style.width = document.documentElement.clientWidth + 'px';  
            arrowBtn.style.display = 'none';
            document.getElementById('join-console-text').style.display = 'none';  
            document.getElementById('inner-curtain').style.height = document.documentElement.clientHeight - 100 + 'px';
            setTimeout(function() {
                document.getElementById('inner-curtain').style.display = 'none';
              }, 1000); // 1-second delay
            curtain.style.position = 'fixed';
        } else {
            curtain.style.top = -windowHeight + 25 + 'px';
            burgerMenu.style.display = 'none';
            arrowBtn.style.display = 'block';
        }  
    }

    function updateCurtainPositionDesktop() {
        setInitialPosition();

        footer.onmousedown = footer.ontouchstart = function(e) {
            interacted = true;
            startY = (e.touches ? e.touches[0].clientY : e.clientY);
            startTop = parseInt(window.getComputedStyle(curtain).top, 10);

            document.onmousemove = document.ontouchmove = function(e) {
                e.preventDefault();
                let clientY = e.touches ? e.touches[0].clientY : e.clientY;
                let newPos = startTop + clientY - startY;

                const windowHeight = document.documentElement.clientHeight;
                const maxTop = windowHeight - 25 - curtain.offsetHeight;
                if (newPos >= -windowHeight + 25 && newPos <= maxTop) {
                    curtain.style.top = newPos + 'px';
                }
            };

            document.onmouseup = document.ontouchend = function() {
                document.onmousemove = document.ontouchmove = null;
                document.onmouseup = document.ontouchend = null;
            };
        };
    }

    function updateCurtainPositionMobile() {
        if (!interacted) {
            setInitialPosition();
        } else {
            return;
        }
    
        const welcomeText = document.getElementById('inner-curtain');
    
        function handleBurgerMenuClick() {
            if (!interacted) {
           //     console.log('burger clicked');
                interacted = true;
                setTransition();
                welcomeText.style.display = 'block';
                curtain.style.top = '0';
            } else {
                setInitialPosition();
                interacted = false;
            }
        }
    
        burgerMenu.addEventListener('click', handleBurgerMenuClick);
        burgerMenu.addEventListener('touchend', handleBurgerMenuClick);
    }
    

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


    if (isMobileDevice()) {
        shuffleStatements();
        updateCurtainPositionMobile();
        window.onresize = setInitialPosition;
    } else {
        window.onresize = resizeCurtain;
        updateCurtainPositionDesktop();
        shuffleStatements();
        setTimeout(curtainPeek, 5000);
        setInterval(curtainPeek, 30000);
    }
});