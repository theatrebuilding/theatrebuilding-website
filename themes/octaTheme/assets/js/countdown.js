document.addEventListener('DOMContentLoaded', (event) => {
    const countdownElement = document.getElementById('countdown');
    // Parse the attribute as a float to handle scientific notation for very large number of seconds for events that are far in the future.
    let timeLeft = parseFloat(countdownElement.getAttribute('data-seconds'));
  
    function updateCountdown() {
      const days = Math.floor(timeLeft / (60 * 60 * 24));
      const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
      const seconds = Math.floor(timeLeft % 60);
  
      countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  
      if (timeLeft > 0) {
        timeLeft--; // decrement the timer
      } else {
        clearInterval(timerId); // stop the timer when it reaches 0
        countdownElement.textContent = 'The post date has arrived!';
      }
    }
  
    let timerId = setInterval(updateCountdown, 1000);
  });
  