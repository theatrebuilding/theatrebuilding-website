function startCountdown() {
  document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      // Assume the attribute is an ISO 8601 date string
      const dateAttribute = countdownElement.getAttribute('data-seconds');
      const isoDate = dateAttribute.replace(' ', 'T').replace(' +0000 UTC', 'Z');
      const dateObj = new Date(isoDate);
      let timerId;

      function updateCountdown() {
        const now = new Date();
        let timeLeft = (dateObj - now) / 1000; // convert milliseconds to seconds

        if (timeLeft <= 0) {
          clearInterval(timerId);
          countdownElement.textContent = 'The performance is now live!';
       //   setTimeout(function(){location.reload();},2000); // wait 2 seconds and then refresh the page
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
          timeString += `${hours} hour${hours > 1 ? 's' : ''} `;
        }
        if (days > 0 || hours > 0 || minutes > 0) {
          timeString += `${minutes} minute${minutes > 1 ? 's' : ''} `;
        }
        timeString += `${seconds} second${seconds > 1 ? 's' : ''}`;

        countdownElement.textContent = timeString;
      }

      timerId = setInterval(updateCountdown, 1000);
    }
  });
}

startCountdown();
