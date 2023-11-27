---
draft: false
title: every time I try to move
artistName: Theatrebuilding
location: 'YC Festival, Copenhagen-Hammamet'
date: 2023-11-25T12:00:00.000Z
css: |
  \#background {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: white;
  transition: all 1s ease;
  }

  \#welcome-screen {
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 5;
  overflow-y: scroll;
  }

  \#startVideo {
  margin: 25px;
  width: 100px;
  height: 100px;
  }

  \#text-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  margin-left: 20px;

  ```
  z-index: 2;
  ```

  }

  \#container {
  position: absolute;
  height: 100vh;
  overflow-y: scroll;
  padding-right: 10vw;

  }

  ul{
  list-style-type: none;
  padding: 0px;
  }

  li {
  font-size: 4vw;
  color: black;
  text-decoration: none;
  }

  \#canvas {
  position: fixed;
  z-index: 3;\
  pointer-events: none;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: scaleX(-1);
  transition: all 1s ease;
  }

  \#vimeo-container {
  position: fixed;
  z-index: 1;\
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: auto;
  transition: all 1s ease;
  }

  i {
  font-style: italic;
  }

  html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  }

  a:link {
  color: black;
  text-decoration: none;
  }

  a:visited {
  color: black;
  text-decoration: none;
  }

  a:hover {
  color: white;
  text-decoration: none;
  }

  a:active {
  color: black;
  text-decoration: none;

  }
  \#welcomeText{
  font-size: 24px;
  font-style: italic;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 25px;
  margin-bottom: 25px;
  }

  \#enterPerformance {
  width: 150px;
  height: 100px;
  font-size: 18px;
  }
_template: advanced
---

<script src="https://player.vimeo.com/api/player.js"></script>    

<div id="text-container">
    <div class="block" id="container">
        <ul data-current="0">
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>where do I begin?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>where do you begin?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>am</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>in a disrupted state</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>of</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>being</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>breathing</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>moving</p></li>
            <li><p><i>the <a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor</a> takes a seat. as if they were sitting on a warm stone in the sun, they find a relaxed position, feet apart, arms resting, relaxed shoulders and face muscles. the <a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor</a> takes a deep breath in and while they slowly exhale, they turn their head to the left. then another breath in and while they exhale slowly, they turn their head to the right. as they keep breathing, they look straight ahead and leaves the chair.</i></p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>everytime I try to move</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I lose track of my destination</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>feet touching the ground</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I lose track of where I came from</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>ruined</p></li>
            <li><p class="highlighted"><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>my body keeps moving</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>in my mind</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I am moving</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>you are not ruined</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>repeating the same patterns</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>looking for a way</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>out</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I am a fragment</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>stay</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>is my body not moving</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>ruins</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>now is not the time</p></li> 
    	      <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>to give up</p></li> 
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>on your loved ones</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>feet touching the ground</p></li>
            <li><p class="highlighted"><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>moving through time</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I am a fragment</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>of a</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>we</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I am a fragment </p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>of</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>you</p></li>
            <li><p class="highlighted"><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>unstable</p></li>
            <li><p class="highlighted"><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>connections</p></li>
            <li><p class="highlighted"><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>hearts</p></li> 
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>beating</p></li> 
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>to the same</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>lost</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>pixels</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>of</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>lungs</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>breathing in</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>not enough cables in this world</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>to carry my warm embrace</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>your skin is</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>reaching</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>I</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>rewriting</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>future</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>memories</p></li>
	          <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>of each other</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>where do you begin?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>am I not moving?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>are we not</p></li> 
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>moving</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>through time</p></li>
            <li><p class="highlighted"><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>resonating</p></li> 
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>in</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>the stories</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>of</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>each other</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>are we not</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>where do I begin?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>ruins</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>where do I end?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>where do you end?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I end in you?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>warm ruins</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do you end in me?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I end in you?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>embrace a random object</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I end where my feet touch the ground?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I end where my hands begin?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I end where my voice ends?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I begin where my voice ends?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do you begin in me?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I begin in you?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do you begin in me?</p></li>
            <li><p><a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactor: </a>do I begin in you?</p></li>
        </ul>
    </div>
</div>

<div id="background"></div>
<div id="vimeo-container"></div>
<div id="vimeo-container-two"></div>
<canvas id="canvas" style="display: none;"></canvas>

<div id="welcome-screen">
  <div id="myRadioStream"><p>click play to start the sound before entering</p><script src="//myradiostream.com/embed/theatrebuilding"></script></div>
  <div id="welcomeText"><p>an undefined number of <a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactors</a> in the black box at <a href="https://hautscene.dk/" target="_blank"> YC festival</a>. their phones light up their faces. they enter and leave whenever they want. they improvise their way around the space together. microphones record the sound of their voices. from Hammamet in Tunisia, a dancer is moving his digital body.</p></div>
  <div><button id="enterPerformance">enter</button></div>
</div>

<script>
const SELECTORS = {
    HTML: 'html',
    CANVAS: '#canvas',
    WELCOME_SCREEN: '#welcome-screen',
    VIMEO_CONTAINER: '#vimeo-container',
    VIMEO_CONTAINER_TWO: '#vimeo-container-two',
    FULLSCREEN_BTN: '#fullscreenBtn',
    ENTER_PERFORMANCE: '#enterPerformance',
    CONTAINER: '#container',
    BACKGROUND: '#background',
    SCRIPT: '#text-container',
    MYRADIOSTREAM: '#myRadioStream',
    WELCOME_TEXT: '#welcomeText',
};

const VIMEO_ID = '888626633';
const VIMEO_LIVE_ID = '888109267';
const TIME_FOR_DARK = 30; // this is the minute of every hour where the screen will go dark and highlight the script sentences with the "highlighted" ID
const UPDATE_INTERVAL = 2000; // 2 seconds
const INITIAL_RANDOM_NUMBER = 50;
const timeBetweenHighlighted = 30000;
const VIMEO_OPTIONS = {
    id: VIMEO_ID,
    height: window.innerHeight,
    loop: true,
    controls: false,
    autoplay: true,
    muted: true
};


let domSize = { height: window.innerHeight, width: window.innerWidth };
let state = {
    visibleTime: 0,
    randomNumber: INITIAL_RANDOM_NUMBER,
    vimeoVisible: false,
    canvasVisible: true,
    lastTimeUpdate: Date.now(),
    isBuffering: false
};

const elements = {
    html: document.querySelector(SELECTORS.HTML),
    canvas: document.getElementById(SELECTORS.CANVAS.slice(1)),
    myRadioStream: document.getElementById(SELECTORS.MYRADIOSTREAM.slice(1)),
    welcomeScreen: document.getElementById(SELECTORS.WELCOME_SCREEN.slice(1)),
    welcomeText: document.getElementById(SELECTORS.WELCOME_TEXT.slice(1)),
    vimeoContainer: document.querySelector(SELECTORS.VIMEO_CONTAINER),
    vimeoContainerTwo: document.querySelector(SELECTORS.VIMEO_CONTAINER_TWO),
    background: document.querySelector(SELECTORS.BACKGROUND),
    script: document.querySelector(SELECTORS.SCRIPT),
    video: document.createElement('video'),
    vimeoPlayer: null, // Initialized below

};

// Initialize styles
elements.vimeoContainer.style.display = 'none';
elements.canvas.style.display = 'block';
elements.video.autoplay = true;
elements.video.muted = true;
elements.vimeoPlayer = new Vimeo.Player(elements.vimeoContainer, VIMEO_OPTIONS);


function isMobileDevice() {
  const isMatchMediaMobile = window.matchMedia("(max-width: 1000px)").matches;
  const isUserAgentMobile = /Mobi|Android/i.test(navigator.userAgent);
  
  return isMatchMediaMobile || isUserAgentMobile;
}


// Event Listeners
document.getElementById(SELECTORS.ENTER_PERFORMANCE.slice(1)).addEventListener('click', setupCamera);
document.getElementById(SELECTORS.CONTAINER.slice(1)).addEventListener('scroll', infinityScroll);

// Function declarations

function hideRadioLiveStream() {
  document.addEventListener( "DOMContentLoaded", function() {
    elements.myRadioStream.style.display = 'none';
  });
}

function setupVimeoPlayer() {
    elements.vimeoPlayer.on('play', () => elements.vimeoContainer.style.display = 'block');
    elements.vimeoPlayer.on('timeupdate', handleTimeUpdate);
}

function setupVimeoPlayerTwo() {
  elements.vimeoContainerTwo.style.position = 'fixed';
  elements.vimeoContainerTwo.style.right = '0';
  elements.vimeoContainerTwo.style.top = '0';
  elements.vimeoContainerTwo.style.height = window.innerHeight + 'px';
  // Adjust the width to maintain aspect ratio
  elements.vimeoContainerTwo.style.width = '56.25vh'; // This is 16:9

}

function handleTimeUpdate() {
    const now = Date.now();
    const timeDiff = now - state.lastTimeUpdate;

    if (timeDiff > UPDATE_INTERVAL) {
        state.isBuffering = !state.isBuffering;
        elements.vimeoContainer.style.display = state.isBuffering ? 'none' : 'block';
    }

    state.lastTimeUpdate = now;
}

async function setupCamera() {
  elements.welcomeScreen.style.display = "none";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
    });
    elements.video.srcObject = stream;
    elements.video.muted = true; // Mute the video
    elements.video.playsInline = true; // Allows inline playback
    elements.video.addEventListener('loadedmetadata', () => {
    elements.video.play(); // Play video after metadata has loaded
    });

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    console.log('ctx: ' + ctx);
    const draw = () => {
//    console.log("Draw function called");
      ctx.drawImage(elements.video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const threshold = 40;
      const feather = 50;

      for (let i = 0; i < data.length; i += 4) {
        const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;

        if (brightness < threshold) {
          data[i + 3] = 0;
        } else if (brightness < threshold + feather) {
          data[i + 3] = 255 * ((brightness - threshold) / feather);
        }
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(draw);
    };

    draw();
    hideWelcome();
  } catch (err) {
    console.error("An error occurred: ", err);
  }
}

function infinityScroll(event) {
  document.addEventListener( "DOMContentLoaded", function() {
//    console.log('DOM Content loaded. Yayyyyy')
    var div = document.getElementById( "container" );
    div.addEventListener( "scroll", function() {
//        console.log('You are scrolling!')
        var max_scroll = this.scrollHeight - this.clientHeight;
        var current_scroll = this.scrollTop;
        var bottom = 100;
            if ( current_scroll + bottom >= max_scroll ) {
                var ul = document.getElementsByTagName( "ul" )[ 0 ];
                var current = parseInt( ul.dataset.current, 10 );
                var li = document.getElementsByTagName( "li" )[ current ];
                var new_li = li.cloneNode( true );
                ul.appendChild( new_li );
                ul.dataset.current = current + 1; 
            }
        });
    });	
}

const turnOffLights = (minuteToRun) => {
  setInterval(() => {
    const date = new Date();
    if (date.getMinutes() === minuteToRun && date.getSeconds() === 0) {
      console.log(`Triggered at ${date}`);


    elements.background.style.transition = 'all 1s ease';
    elements.background.style.filter = 'brightness(100%)';
    elements.background.style.filter = 'brightness(0%)';
    elements.background.style.zIndex = '999';
    console.log('background darkened');
    turnOnLights(5000);


    }
  }, 1000);
};

const turnOnLights = (blackDelay) => {
  setTimeout(() => {
    const highlightedElements = document.querySelectorAll('.highlighted');

    highlightedElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.transition = 'color 2s ease';
        elements.script.style.zIndex = '1000';
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.style.color = '#000000';

        setTimeout(() => {
          element.style.color = '#FFFFFF';
        }, 10); // A brief delay for transition
      }, timeBetweenHighlighted * index);
    });

    // Reset styles after all elements have been processed
    const totalDuration = timeBetweenHighlighted * highlightedElements.length + 2000;
    setTimeout(() => {
      if (elements.background) {
        elements.background.style.zIndex = '-1';
        elements.background.style.filter = 'brightness(100%)';
        highlightedElements.forEach(element => {
          element.style.color = '#000000';
        });
      }
    }, totalDuration);
  }, blackDelay);
};

const showVimeo = (x) => {
  setInterval(() => {
    const random100 = Math.random() * 100;
   // console.log(random100);
    if (state.randomNumber > random100 && !state.vimeoVisible) {
      
      setupVimeoPlayer();
      elements.vimeoPlayer.loadVideo(VIMEO_ID).then(() => {
        hideControls();
        elements.vimeoPlayer.setVolume(0); // Assuming you still want it muted
        elements.vimeoPlayer.play();
        elements.vimeoContainer.style.display = 'block';
        state.vimeoVisible = true;
        chancePercentage();
      //  console.log(state.randomNumber);
      }).catch(error => {
        console.error("Error loading Vimeo video:", error);
      });
    } else {
   //   console.log(`showVimeo function did not run. Random number ${random100.toFixed(2)} is greater than ${state.randomNumber} or it was already playing`);
    }
  }, x * 1000);
};

const showVimeoLive = () => {
  elements.vimeoContainerTwo.innerHTML = `
  <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/888109267?badge=0&amp;autopause=0&amp;quality_selector=0&amp;player_id=0&amp;app_id=58479&amp;muted=0&amp;controls=0&amp;loop=1&amp;autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="every time I try to move"></iframe></div>`;
  setupVimeoPlayerTwo();
    }

const showFace = (x) => {
  setInterval(() => {
    const random100 = Math.random() * 100;
    chancePercentage();
    if (state.randomNumber > random100 && state.canvasVisible == false) {
        elements.canvas.style.display = 'block';
        console.log("Canvas Initialized");
        console.log('stream: ' + elements.video.srcObject);
        state.canvasVisible = true
    } else {
    //  console.log(`showFace function did not run. Random number ${random100.toFixed(2)} is greater than ${state.randomNumber} OR it was already visible`);
    }
  }, x * 1000);
};

const hideVideos = (x) => {
  setInterval(() => {
    if (state.vimeoVisible || state.canvasVisible) {
      state.visibleTime += x;
      let logProb;
        if (state.visibleTime <= 60) {
            // Slowly rising probability in the first minute
            logProb = 0.05 * state.visibleTime;
        } else if (state.visibleTime <= 240) {
            // Faster rise in probability from 5% to 100% between 1 and 4 minutes
            logProb = 5 + 30 * ((state.visibleTime - 60) / (240 - 60));
        } else {
            // 100% probability after 4 minutes
            logProb = 100;
        }

      const chanceOfOff = Math.random() * 100;
   //   console.log('visible time ' + state.visibleTime);

      if (logProb > chanceOfOff) {
        elements.canvas.style.display = 'none';
        elements.vimeoPlayer.unload().then(() => {
          elements.vimeoContainer.style.display = 'none';
          state.vimeoVisible = false;
          state.canvasVisible = false;
          state.visibleTime = 0;
    //      console.log(`hid the videos`);
        }).catch(error => {
          console.error("Error unloading Vimeo video:", error);
        });
      } else {
    //    console.log(`Video(s) running but didn't hide`);
      }
    } else {
   //   console.log(`No videos are running`);
      state.visibleTime = 0;
    }
  }, x * 1000);
};

function hideControls() {
    elements.vimeoPlayer.getPaused().then(function(paused) {
        if (!paused) {
            elements.vimeoPlayer.unload().then(function() {
                elements.vimeoPlayer.loadVideo(vimeoID).then(function(id) {
                    elements.vimeoPlayer.setVolume(0);
                    elements.vimeoPlayer.setControls(false);
                    elements.vimeoPlayer.play();
                });
            });
        }
    });
}

const chancePercentage = () => {
  state.randomNumber = Math.floor(Math.random() * 51) + 50;
};

function hideWelcome() {
  elements.welcomeScreen.style.display = 'none';
  elements.canvas.style.display = 'none';
  elements.vimeoContainer.style.display = 'none';
  state.vimeoVisible = false;
  state.canvasVisible = false;
  state.visibleTime = 0;
  
}

function changeWelcomeText() {
  elements.welcomeText.innerHTML = `an undefined number of <a href="https://en.wiktionary.org/wiki/spect-actor" target="_blank">spectactors</a> in the black box at <a href="https://hautscene.dk/" target="_blank"> YC festival</a>. their phones light up their faces. they enter and leave whenever they want. they improvise their way around the space together. microphones record the sound of their voices. from Hammamet in Tunisia, a dancer is moving his digital body.`;
}

if (isMobileDevice()) {
// Initialize MOBILE
infinityScroll();
showVimeo(120);
showFace(260);
hideVideos(5);
turnOffLights(TIME_FOR_DARK);
hideRadioLiveStream();

} else {
  // Initialize DESKTOP
infinityScroll();
showVimeo(60);
showVimeoLive();
showFace(160);
hideVideos(5);
turnOffLights(TIME_FOR_DARK);
changeWelcomeText();
 }




</script>
