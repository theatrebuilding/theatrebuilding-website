---
draft: false
title: The Forest's Imaginary Trial - 6 Grieving Colors
artistName: Sara Gebran
location: Online
date: 2024-02-05T12:00:00.000Z
css: |2-
    #wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0vw;
      left: 0vw;
      width: 100vw;
      height: 100vh;
      margin: 0px;
      background-color: rgb(0, 0, 0);
      transition: background-color 2s ease;
      }

    .scene {
      width: 80vw;
      height: 80vh;
      perspective: 300vw;
      margin: 0px;
    }

    .globe {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: spin 40s linear infinite;
    }

    .dot {
      position: absolute;
      margin-left: 40vw;
      margin-top: 40vh;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 1);
      width: 0.5vw;
      height: 0.5vw;
      transform-origin: center;
      transition: background-color 5s ease;
    }

    #footer {
      color: white;
      display: flex;
      flex-direction: row-reverse;
      position: fixed;
      bottom: 0px;
      width: 100vw;
      padding-right: 5vw;
    }

    #footer>div {
      margin-left: 5vw;
    }

    #audio {
      position: fixed;
      top: 0px;
      display: flex;
      flex-direction: row-reverse;
      height: 50px;
      width: 100vw;
      color: white;
      font-size: x-large;
    }

    #audio>div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      width: auto;
      margin-right: 5vw;
      margin-top: 5vh;
      cursor: pointer;
    }

    .sound-icons {
      width: 25px;
      margin-left: 10px;
    }

    @keyframes spin {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
description: >-
  A re-composition of extracted elements from the book “The Forests Imaginary
  Trial – 374 Grieving Poems” and the live performance MEDIATING NATURE, from
  2023.
image: /uploads/ForestTrial_new02.jpg
_template: advanced
---

  <div id='wrapper'>
    <div id="audio">
      <div>English<audio id="en-audio" src=""></audio><img class="sound-icons" id="eng-sound-icon" src="https://bafybeih5e4gloy3brmpsbc53iv75qkyyn7qyddq7pqjyhw6yvavpmnyyqy.ipfs.cf-ipfs.com/" alt=""></div>
      <div>Español<audio id="sp-audio" src=""></audio><img class="sound-icons" id="spa-sound-icon" src="https://bafybeih5e4gloy3brmpsbc53iv75qkyyn7qyddq7pqjyhw6yvavpmnyyqy.ipfs.cf-ipfs.com/" alt=""></div>
    </div>
    <div class="scene">
      <div class="globe" id="globe"></div>
    </div>
    <div id="footer">
      <div><p>Voz en Español: Sara Gebran // English Voice: Nicol Saninetti</p></div>
    </div>
  </div>

  <script>
    // Global state object
    const audioState = {
        isAudioPlaying: false,
        currentAudioIndex: 0,
        enIsMuted: true,
        spIsMuted: true,
        globeInitialized: false,
        audioTimer: null,
        elapsedAudioTime: 0,
        backgroundTransitionInterval: null
    };
    
    const enAudioUrls = ['https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_intro.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_black.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_green.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_brown.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_red.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_blue.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/en_white.mp3'];
    const spAudioUrls = ['https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_intro.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_black.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_green.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_brown.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_red.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_blue.mp3', 'https://bafybeiefddq3zmetcazjnqy6wjodrpt44ksxggxrjo3hkhmalqecysdhnu.ipfs.cf-ipfs.com/sp_white.mp3'];
    
    // Initialize the globe with dots
    function initGlobe() {
        if (audioState.globeInitialized) {
  
          if (audioState.currentAudioIndex >= 1) {
              const dots = document.getElementsByClassName('dot');
              Array.from(dots).forEach(element => {
                      element.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                      setTimeout(() => {
                          element.remove();
                      }, 5000)
              });
          }
  
          if (audioState.currentAudioIndex == 6) {
              audioState.globeInitialized = false;
          }
          
        } else {
    
        const globe = document.getElementById('globe');
        const rows = 20;
        const cols = 40;
        const radius = 500;
    
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                const phi = Math.PI * (i / (rows - 1));
                const theta = 2 * Math.PI * (j / cols);
                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.cos(phi);
                const z = radius * Math.sin(phi) * Math.sin(theta);
                dot.style.transform = `
                    translate3D(${x}px, ${y}px, ${z}px)
                    rotateY(${theta}rad)
                    rotateZ(${phi}rad)
                    rotateX(${Math.PI / 2 - phi}rad)
                `;
                globe.appendChild(dot);
            }
        }
        audioState.globeInitialized = true;
      }
    }
    
    // Apply background color transition
    function applyShiftingBackground(rgbValues, duration) {
    //  console.log('applying shifting background');
      
        const body = document.querySelector('#wrapper');
        const intervalTime = duration / rgbValues.length * 1000;
        body.style.backgroundColor = rgbValues[0];
            // Clear any previous interval
      if (audioState.backgroundTransitionInterval) {
          clearInterval(audioState.backgroundTransitionInterval);
      }
        body.style.transition = `background-color ${intervalTime}ms ease`;
        let currentColorIndex = 0;
      // Set the new interval and save the interval ID
      audioState.backgroundTransitionInterval = setInterval(() => {
          body.style.backgroundColor = rgbValues[currentColorIndex++];
          if (currentColorIndex >= rgbValues.length) {
              clearInterval(audioState.backgroundTransitionInterval);
              audioState.backgroundTransitionInterval = null; // Clear the saved interval ID
          }
      }, intervalTime);
    }
    
    // Handle audio playback and background color changes
    function handleAudioPlayback(audioElement, colorNumber) {
      const rgbValues = getRgbValuesForColorNumber(colorNumber);
      
      // Define the function that will be used as the event listener
      const metadataLoaded = function() {
          const audioDuration = audioElement.duration;
          applyShiftingBackground(rgbValues, audioDuration);
          // Remove the event listener after it's been called to prevent it from being called multiple times
          audioElement.removeEventListener('loadedmetadata', metadataLoaded);
      };
  
      // Add the event listener
      audioElement.addEventListener('loadedmetadata', metadataLoaded);
  
      // If the metadata is already loaded, we can apply the background shift immediately
      if (audioElement.readyState >= 1) {
          applyShiftingBackground(rgbValues, audioElement.duration);
      }
  
    }
    
    // Map color numbers to RGB values
    function getRgbValuesForColorNumber(colorNumber) {
        switch (colorNumber) {
            case 0: return ["rgb(0, 0, 0)"];
            case 1: return ["rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)"];
            case 2: return ["rgb(56, 160, 88)", "rgb(59, 91, 26)", "rgb(21, 75, 0)", "rgb(104, 203, 88)", "rgb(53, 89, 35)", "rgb(0, 249, 0)", "rgb(76, 176, 98)"];
            case 3: return ["rgb(54, 34, 29)", "rgb(31, 19, 7)", "rgb(54, 34, 29)"];
            case 4: return ["rgb(255, 55, 40)", "rgb(202, 44, 31)", "rgb(148, 22, 1)", "rgb(192, 11, 29)", "rgb(155, 75, 15)"];
            case 5: return ["rgb(46, 60, 148)", "rgb(25, 40, 205)", "rgb(8, 90, 243)", "rgb(60, 10, 230)"];
            case 6: return ["rgb(232, 249, 248)", "rgb(255, 246, 248)", "rgb(255, 253, 243)", "rgb(255, 255, 255)"];
            default: return ["rgb(0, 0, 0)"];
        }
    }
    
  // Update audio state and UI
  function updateAudioState(audioElement, language, isPlaying) {
      const icon = document.getElementById(language === 'en' ? 'eng-sound-icon' : 'spa-sound-icon');
      icon.src = isPlaying ? 'https://bafybeiehccr6p2z3upt5nsvk5pbukxos3jzh2cn7vr7v4cst4vextsqbta.ipfs.cf-ipfs.com/' : 'https://bafybeih5e4gloy3brmpsbc53iv75qkyyn7qyddq7pqjyhw6yvavpmnyyqy.ipfs.cf-ipfs.com/';
      audioState[language + 'IsMuted'] = !isPlaying;
  
      if (isPlaying) {
          // Add back the audio source and play from the timer's position
          const audioSrc = language === 'en' ? enAudioUrls[audioState.currentAudioIndex] : spAudioUrls[audioState.currentAudioIndex];
          audioElement.src = audioSrc;
          audioElement.currentTime = audioState.elapsedAudioTime;
          audioElement.play();
      } else {
          // Remove the audio source to mute
          audioElement.src = '';
      }
  
      // Manage the audio timer
      if (!audioState.enIsMuted || !audioState.spIsMuted) {
          startAudioTimer();
      } else {
          stopAudioTimer();
      }
  }
  
  // Stop audio timer
  function stopAudioTimer() {
      clearInterval(audioState.audioTimer);
      audioState.audioTimer = null;
  }
  
  // Start audio timer
  function startAudioTimer() {
      if (!audioState.audioTimer) {
          audioState.audioTimer = setInterval(() => {
              audioState.elapsedAudioTime++;
              // Update current time for both audio elements if they are not muted
              if (!audioState.enIsMuted) {
                  document.getElementById('en-audio').currentTime = audioState.elapsedAudioTime;
              }
              if (!audioState.spIsMuted) {
                  document.getElementById('sp-audio').currentTime = audioState.elapsedAudioTime;
              }
          }, 1000);
      }
  }
  
    // Handle audio end event
    function handleAudioEnd(audioElement) {
      let newAudioElement = null;
        // Stop the timer and reset elapsed time
        stopAudioTimer();
        audioState.elapsedAudioTime = 0;
    
        // Increment the audio index, looping back if at the end of the playlist
        audioState.currentAudioIndex = (audioState.currentAudioIndex + 1) % enAudioUrls.length;
    
        // Prepare the next audio track if there are more tracks to play
        if (audioState.currentAudioIndex < enAudioUrls.length) {
            const nextEnAudioSrc = enAudioUrls[audioState.currentAudioIndex];
            const nextSpAudioSrc = spAudioUrls[audioState.currentAudioIndex];
            document.getElementById('en-audio').src = nextEnAudioSrc;
            document.getElementById('sp-audio').src = nextSpAudioSrc;
            document.getElementById('en-audio').load();
            document.getElementById('sp-audio').load();
    
            // Start playing the next track if the previous one was playing
            if (!audioState.enIsMuted) {
                const enAud = document.getElementById('en-audio');
                enAud.play();
                startAudioTimer(audioElement);
                newAudioElement = enAud; 
            }
            if (!audioState.spIsMuted) {
                const spAud = document.getElementById('sp-audio');
                spAud.play();
                startAudioTimer(audioElement);
                newAudioElement = spAud; 
            }
        }
  
        handleAudioPlayback(newAudioElement, audioState.currentAudioIndex); 
        startAudioTimer();
        initGlobe();
    }
  
  // Setup audio controls
  function setupAudioControls() {
      const enAudioElement = document.getElementById('en-audio');
      const spAudioElement = document.getElementById('sp-audio');
      // Set initial audio source
      enAudioElement.src = enAudioUrls[0];
      spAudioElement.src = spAudioUrls[0];
    
      function toggleAudioPlayback(audioElement, language) {
          const isPlaying = audioElement.paused;
          updateAudioState(audioElement, language, isPlaying);
      }
    
      // Add click event listeners to the elements
      document.getElementById('eng-sound-icon').parentElement.addEventListener('click', () => toggleAudioPlayback(enAudioElement, 'en'));
      document.getElementById('spa-sound-icon').parentElement.addEventListener('click', () => toggleAudioPlayback(spAudioElement, 'sp'));
    
      // Add 'ended' event listeners to audio elements
      enAudioElement.addEventListener('ended', handleAudioEnd);
      spAudioElement.addEventListener('ended', handleAudioEnd);
  }
    
    // Initialize globe and setup audio controls
    initGlobe();
    setupAudioControls();
    </script>
