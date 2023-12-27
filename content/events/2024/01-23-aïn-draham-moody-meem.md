---
title: MEEM
artistName: Moody
location: Aïn Draham
date: 2024-01-23T06:00:00.000Z
css: >
  @import
  url('[https://fonts.googleapis.com/css2?family=Rubik\&family=Rubik+Maps\&family=Sofia\&family=Syne+Mono\&display=swap](https://fonts.googleapis.com/css2?family=Rubik\&family=Rubik+Maps\&family=Sofia\&family=Syne+Mono\&display=swap)');


  body, html {

  margin: 0px;

  padding: 0px;

  height: 100%;

  width: 100%;

  background-color: black;

  color: white;

  }


  .welcome-screen {

  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  margin: 0px;

  margin-top: 25px;

  width: 100%;

  background-color: rgba(0, 0, 0, 1);

  overflow-x: hidden;

  overflow-y: auto;

  }


  .welcome-screen div {

  max-width: 1000px;

  }


  \#text {

  position: relative;

  height: auto;

  width: 100%;

  }


  \#english {

  padding: 25px;

  text-align: left;

  font-size: 18px;

  line-height: 70px;

  font-family: 'Syne Mono', monospace;

  max-width: 80%;

  }


  \#arabic {

  position: absolute;

  top: 0px;

  right: 0px;

  padding: 25px;

  padding-top: 60px;

  text-align: right;

  font-size: 18px;

  line-height: 70px;

  font-family: 'Rubik', Arial, Helvetica, sans-serif;

  max-width: 80%;

  }


  \#enter {

  margin-top: 0px;

  position: relative;

  z-index: 99;

  width: 100vw;

  padding: 25px;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;


  }


  \#enter div {

  border: 10px solid white;

  padding: 10px;

  padding-top: 0px;

  padding-bottom: 0px;

  letter-spacing: 10px;

  font-family: 'Syne Mono', monospace;

  font-size: 50px;

  line-height: 30px;

  text-align: center;

  border-radius: 50px;

  width: 300px;


  }


  .video-container {

  position: fixed; /\* Changed from absolute to fixed \*/

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  }


  .video-container iframe {

  width: 100%;

  height: 100%;

  }


  .video-overlay {

  display: none;

  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  z-index: 10;

  cursor: pointer;

  }


  \#loadingVideo {

  display: none;

  justify-content: center;

  align-items: center;

  min-height: 100vh;

  flex-direction: column;

  padding: 25px;

  text-align: center;

  font-family: 'Syne Mono', monospace;

  }


  .meem {

  display: flex;

  }


  .m {

  position: relative;

  animation-duration: 4s;

  animation-timing-function: ease;

  animation-iteration-count: infinite;

  }


  \#m1 {

  animation-name: moveM1;

  }


  \#m2 {

  animation-name: moveM2;

  }


  @keyframes moveM2 {

  0%, 100% {

  top: 0;

  left: 0;

  }

  5% { top: -1em; left: 0em; }

  35% { top: -1em; left: -1.7em; }

  55%    { top: 0em; left: -1.7em; }

  60% { top: 1em; left: -1.7em }

  85% { top: 1em; left: 0em; }

  87%   { top: 0em; left: 0em; }

  }


  @keyframes moveM1 {

  0%, 100% {

  top: 0em;

  left: 0em;

  }

  5% { top: 1em; left: 0em; }

  35% { top: 1em; left: 1.7em; }

  55%    { top: 0em; left: 1.7em; }

  60% { top: -1em; left: 1.7em }

  85% { top: -1em; left: 0em; }

  87%   { top: 0em; left: 0em; }

  }
description: >-
  A queer insecure creature, who is living in a homophobic atmosphere, trying to
  move inside the noise of electronic sounds.
image: /uploads/meem-screenshot.jpg
_template: advanced
---

<div id="welcomeScreen" class="welcome-screen">
  <div>
    <div id="text">
      <div id="english">
        <p>Many perspectives on MEEM</p>
        <p>
          none of them is his perspective </br>
          he used to use his phone to show himself on social media </br>
          he also thinks about creating an only fans </br>
          but here, for the first time </br>
          he's not in control of his image </br>
          you will open audience perspectives </br>
          we don't know if you will be able to see his insecurities </br>
          MEEM </br>
          a queer insecure creature, who is living in a homophobic atmosphere </br>
          trying to move inside the noise of electronic sounds </br>
          otherwise </br>
          just click enter and watch the footages from MEEM's second test in aindrahem tunisia </br>
          -it's still a work in progress. </br>
          Coming 2024 with other versions and forms , that's what the stars said - </br>
          now this is important, you can click the video to get a new perspective on MEEM and so poeple understand that they are able to do that, i did that because i thought it's nice if many poeple do it together and everyone has a different perspective but then if you are alone it is good if you can get different perspectives as well. </br>
          what do you think ?  
 </p>
      </div>
      <div id="arabic">
        <p>"وجهات نظر متعددة حول "ميم
        </p>
      <p>
        ولكن لا أحد منهم هو وجهة نظره الخاصة. 
        كان يعتاد التحكم في صورته على وسائل التواصل الاجتماعي ، حتى أنه كان يفكر في إنشاء حساب اونلي فانز 
        ومع ذلك، للمرة الأولى، ليس لديه السيطرة على صورته  
        باطلاعك على وجهات نظر الجمهور، ليس من المؤكد ما إذا كانت نقاط الضعف لديه ستكون واضحة  
        "ميم"، مخلوق كويري غير آمن، يحاول تجاوز الجو المعادي للاختلاف في وسط ضجيج الموسيقى الالكترونية
           انقر على "الدخول" لمشاهدة لقطات من اختبار "ميم" الثاني في عين دراهم، تونس 
        -عمل قيد التطوير والقادم في عام 2024 بنسخ وأشكال أخرى. هذا ما تقوله النجوم-
         الآن هذا أمر مهم، يمكنك النقر على الفيديو للحصول على وجهة نظر جديدة حول "ميم" وبالتالي يفهم الناس أنهم قادرون على القيام بذلك. قمت بذلك لأنني اعتقد أنه سيكون جميلاً إذا فعله العديد من الأشخاص معًا وكل شخص لديه وجهة نظر مختلفة. ولكن إذا كنت وحيدًا فإنه جيد أيضًا إذا كنت تستطيع الحصول على وجهات نظر مختلفة أيضًا.
        ما رأيك؟</p>     
      </div>
    </div>
    <div id="enter">
      <div><p>ENTER</p><p>MEEM</p></div>
    </div>
</div>
</div>
<div id="loadingVideo">
  <div id="loadingText">
    <p id="loadingInnerText">loading a new perspective on</p>
  </div>
  <div class="meem">
    <span class="m" id="m1">M</span>
    <span class="e">E</span>
    <span class="e">E</span>
    <span class="m" id="m2">M</span>
</div>
</div>
<div id="videoContainer" class="video-container">
  <div id="videoOverlay" class="video-overlay"></div>
</div>

<script src="https://player.vimeo.com/api/player.js"></script>

<script>
  const welcome = document.getElementById('welcomeScreen');
  const videoContainer = document.getElementById('videoContainer');
  const enter = document.getElementById('enter');
  const loadingVideo = document.getElementById('loadingVideo');
  const loadingInnerText = document.getElementById('loadingInnerText');
  const videoOverlay = document.getElementById('videoOverlay');

  const videoIDs = ['895072702', '895065477', '895076938', '895073289']; 
  let currentPlayer; 
  let videoPlaying = false;
  let loadTimer;

  function loadRandomVideo() {
    clearTimeout(loadTimer); // Clear any existing timer
    videoPlaying = false;

    // Start a timer to check for loading delay
    loadTimer = setTimeout(function() {
      if (!videoPlaying) {
        loadingInnerText.innerText = "It's taking a while to load. You might be on a slow connection, but we are still trying to load a perspective on";
      }
    }, 20000); // 20 seconds

    // Hide the overlay while loading new video
    videoOverlay.style.display = 'none';

    // Select a random video ID from the array of Vimeo videos
    const randomIndex = Math.floor(Math.random() * videoIDs.length);
    console.log(randomIndex);
    const randomVideoID = videoIDs[randomIndex];
    console.log(randomVideoID);

    if (currentPlayer) {
      // Destroy the current player before creating a new one
      currentPlayer.destroy().then(function() {
        currentPlayer = null;
        setupPlayer(randomVideoID);
      }).catch(function(error) {
        console.error('Error destroying player:', error);
      });
    } else {
      setupPlayer(randomVideoID);
    }
  }

  function setupPlayer(videoID) {
    currentPlayer = new Vimeo.Player(videoContainer, {
      id: videoID,
      autoplay: true,
      loop: true,
      controls: false,
      background: true
    });

    currentPlayer.setVolume(1);

    // Event listener for when the video starts playing
    currentPlayer.on('play', function() {
      videoPlaying = true;
      clearTimeout(loadTimer);
      loadingInnerText.innerText = "Loading a new perspective on";
      videoOverlay.style.display = 'block';
    });
  }

  // Add click event listener to the overlay
  videoOverlay.addEventListener('click', function() {
    loadRandomVideo();
  });

  enter.addEventListener('click', function() {
    welcome.style.display = 'none';
    loadingVideo.style.display = 'flex';
    loadRandomVideo();
  });
</script>
