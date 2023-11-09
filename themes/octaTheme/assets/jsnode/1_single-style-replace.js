// Function to grab the text inside the 'css' div and add it to <style> in HEAD
function insertCustomStyles() {
  const cssDiv = document.getElementById('css');
  const customStyles = document.getElementById('custom-styles');

  if (cssDiv && customStyles) {
    // Remove any existing link tags with rel="stylesheet"
    const styleLinks = document.querySelectorAll('link[rel="stylesheet"]');
    styleLinks.forEach(link => {
      if (link.href) {
        link.remove();
      }
    });

    // Get the CSS text, remove backslashes, and add it to customStyles
    const cssText = cssDiv.innerText;
    const cleanCssText = cssText.replace(/\\/g, ''); // This removes all backslashes that Tina seems to be adding into the CSS styles.
    customStyles.innerHTML = cleanCssText;

    // Remove the 'css' div from the DOM
    cssDiv.remove();
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', insertCustomStyles);
