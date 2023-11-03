function calculateLoadingTime(kbToLoad, codeExecutionTime, internetSpeedKbps) {
    const kbPerSecond = internetSpeedKbps / 8;
    const loadTimeInSeconds = (kbToLoad / kbPerSecond) + codeExecutionTime;
    return loadTimeInSeconds;
  }
  
  function updateLoadingBar(percentage) {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.width = `${percentage}%`;
  }
  
  function hideLoadScreen() {
    const loadScreen = document.getElementById('load-screen');
    loadScreen.style.display = 'none';
  }
  
  function startLoading(kbToLoad, codeExecutionTime, internetSpeedKbps) {
    const estimatedLoadTime = calculateLoadingTime(kbToLoad, codeExecutionTime, internetSpeedKbps);
  
    let currentPercentage = 0;
    const loadingStep = 100 / (estimatedLoadTime * 1000 / 10);
  
    const loadingInterval = setInterval(() => {
      currentPercentage += loadingStep;
      if (currentPercentage > 100) {
        currentPercentage = 100;
      }
  
      updateLoadingBar(currentPercentage);
  
      if (currentPercentage >= 100) {
        clearInterval(loadingInterval);
        hideLoadScreen();
      }
    }, 10);
  }
  
  // Replace these values with the actual values for your website
  const kbToLoad = 5; // Total kilobytes to load
  const codeExecutionTime = 1; // Estimated time in seconds to execute JS code
  const internetSpeedKbps = 10000; // User's internet speed in Kbps
  
  startLoading(kbToLoad, codeExecutionTime, internetSpeedKbps);
  