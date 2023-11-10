function startCountdown() {
  document.addEventListener('DOMContentLoaded', () => {
    const countdownElements = document.querySelectorAll('.forthcoming');

    countdownElements.forEach((countdownElement) => {
      const dateAttribute = countdownElement.getAttribute('data-seconds');
      const isoDate = dateAttribute.replace(' ', 'T').replace(' +0000 UTC', 'Z');
      const dateObj = new Date(isoDate);
      let timerId;
      //console.log(dateObj);
      //console.log(postDate);

      function updateCountdown() {
        const now = new Date();
        const timeLeft = (dateObj - now) / 1000;
        //console.log('now: ' + now);
        //console.log('timeleft: ' + timeLeft);


        if (isNaN(timeLeft)) {
          countdownElement.textContent = `Starts on: ${dateAttribute}`;
          return;
        }

        if (timeLeft <= 0) {
          clearInterval(timerId);
          countdownElement.textContent = 'The performance is now live!';
          return;
        }

        
        const days = Math.floor(timeLeft / (60 * 60 * 24));
        const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        const seconds = Math.floor(timeLeft % 60);

        let timeString = '';

        if (days > 0) {
          timeString += `${days} day${days > 1 ? 's' : ''} `;
        }
        if (days > 0 || hours > 0) {
          timeString += `${hours} hr${hours > 1 ? 's' : ''} `;
        }
        if (days > 0 || hours > 0 || minutes > 0) {
          timeString += `${minutes} min${minutes > 1 ? 's' : ''} `;
        }
        timeString += `${seconds} sec${seconds > 1 ? 's' : ''}`;

        countdownElement.textContent = timeString;
      
      }

      timerId = setInterval(updateCountdown, 1000);
    });
  });
}

startCountdown();




