---
title: EN EL CLUB DE LA MENTE EL LENGUAJE DEL AIRE
artistName: Rodrigo Sobarzo
location: 'El Salvador, Región de Atacama, Chile'
date: 2024-03-08T16:00:00.000Z
css: |-
  * {
    margin: 0;
    padding: 0;
  }

  #sound-svg {
    color: #fff;
    transform: scale(2);
    position: absolute;
    bottom: 4rem;
    left: 8rem;
    cursor: pointer;
    z-index: 3;
  }

  #sound-svg:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(2.4);
  }

  .container {
    height: 100vh;
    animation: sunrise 60s forwards;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .video-content {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 2;
    transition: all ease-in-out;
    transform: translate(25%, 25%); 
    animation: moveVideo 40s infinite;
    animation-delay: 30s; 
  }

  #video {
    border-radius: 10px 27px 14px 25px;
    width: 100px;
    animation: scaleVideoMobile 100s forwards;
    @media all and (min-width: 600px) {
      width: 300px;
      animation: scaleVideoDesktop 100s forwards;
    }
  }

  @keyframes moveVideo {
    0% {
      transform: translate(25%, 25%); 
    }
    12.5% {
      transform: translate(30%, 0%);
    }
    25% {
      transform: translate(25%, -25%);
    }
    37.5% {
      transform: translate(0%, -30%);
    }
    50% {
      transform: translate(-25%, -25%);
    }
    62.5% {
      transform: translate(-30%, 0%);
    }
    75% {
      transform: translate(-25%, 25%);
    }
    87.5% {
      transform: translate(0%, 30%);
    }
    100% {
      transform: translate(25%, 25%); 
    }
  }

  @keyframes scaleVideoMobile {
    0% {
      width: 100px; 
    }
    100% {
      width: 300px; 
    }
  }

  @keyframes scaleVideoDesktop {
    0% {
      width: 300px; 
    }
    100% {
      width: 600px; 
    }
  }

  @keyframes sunrise {
    0% {
      background-color: rgba(0, 0, 0, 0.6); 
    }
    100% {
      background-color: rgba(0, 0, 0, 0); 
    }
  }
description: >-
  The ascension of the sun is a tool of time. Time is a technology that belongs
  to the air element. I circle to reconnect to the earth’s core and its
  rotation.
image: /uploads/enElClubRodrigo_thumb.jpg
_template: advanced
---

  <div class="container">
    <div class="image-container">
      <img src="https://cf-ipfs.com/ipfs/bafybeia7a3wmhsb3to2h5oxlvvalvh5eb65vxj3nen73flca4d5zovjhle" alt="Background Image" />
      <div class="video-content">
        <a
          href="https://bafybeig3htfmxerqwzfhttihudrqaqg37g6amsaw7hrf7biztsuridsahi.ipfs.cf-ipfs.com/"
          download="video.mp4"
        >
          <video autoplay muted loop id="video">
            <source
              src="https://bafybeig3htfmxerqwzfhttihudrqaqg37g6amsaw7hrf7biztsuridsahi.ipfs.cf-ipfs.com/"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="sound-svg"
        width="75"
        height="75"
        fill="currentColor"
        stroke-width="1.5"
        color="#000"
      >
        <path
          stroke="#000"
          d="M1 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H3a2 2 0 0 1-2-2Z"
        />
        <path
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.5 7.5S19 9 19 11.5s-1.5 4-1.5 4m3-11S23 7 23 11.5s-2.5 7-2.5 7"
        />
      </svg>
    </div>
  </div>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      var video = document.getElementById("video");  
      var toggleSoundButton = document.querySelector("#sound-svg");
      toggleSoundButton.addEventListener("click", function () {
        video.muted = !video.muted;
      });
    });
  </script>
