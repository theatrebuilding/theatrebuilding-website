function startCountdown() {
  document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      // Assume the attribute is an ISO 8601 date string
      const postDate = new Date(countdownElement.getAttribute('data-seconds'));
      let timerId;

      function updateCountdown() {
        const now = new Date();
        let timeLeft = (postDate - now) / 1000; // convert milliseconds to seconds

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
