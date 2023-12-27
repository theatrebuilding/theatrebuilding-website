function hideBackButton() {
  document.addEventListener('DOMContentLoaded', () => {
    const backContainer = document.querySelector('#header-container');
    const backButton = document.querySelector('#octaMenu');
    backButton.style.transition = 'transform 1s ease';
    
    function hideDelay() {
      setTimeout(() => {
        backButton.style.transform = 'translateX(-65px)';
      }, 10000)
    }

    backContainer.addEventListener('mouseenter', () => {
      backButton.style.transform = 'translateX(0px)';
    });
    backButton.addEventListener('mouseleave', () => {
      backButton.style.transform = 'translateX(-65px)';
    });
    backButton.addEventListener('touchend', () => {
      backButton.style.transform = 'translateX(0px)';
      hideDelay();
    });

    hideDelay();
    
  });
}

hideBackButton();
