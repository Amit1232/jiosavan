// Content script for Jio Savan Extension
// This script runs on jiosaavn.com pages

console.log('Jio Savan Extension content script loaded');

// Check if we're on a Jio Saavn page
if (window.location.hostname.includes('jiosaavn.com')) {
  // Get extension status from background script
  chrome.runtime.sendMessage({action: 'getStatus'}, function(response) {
    if (response && response.enabled) {
      initExtension(response.theme);
    }
  });
}

// Initialize the extension features
function initExtension(theme) {
  console.log('Initializing Jio Savan Extension with theme:', theme);
  
  // Add custom styles based on theme
  const style = document.createElement('style');
  if (theme === 'dark') {
    style.textContent = `
      body {
        background-color: #121212 !important;
        color: #ffffff !important;
      }
      /* Add more dark theme styles here */
    `;
  } else {
    style.textContent = `
      /* Add light theme enhancements here */
      .o-header {
        background-color: #e91e63 !important;
      }
    `;
  }
  document.head.appendChild(style);
  
  // You can add more features here, such as:
  // - Custom player controls
  // - Lyrics integration
  // - Download buttons
  // - UI enhancements
  
  // Example: Add a custom button to the player
  setTimeout(addCustomFeatures, 2000); // Wait for page to fully load
}

// Add custom features to the page
function addCustomFeatures() {
  // Example: Add a custom info button to the player
  const playerControls = document.querySelector('.c-player__controls');
  if (playerControls) {
    const infoButton = document.createElement('button');
    infoButton.className = 'custom-info-btn';
    infoButton.innerHTML = '<span>ℹ️</span>';
    infoButton.title = 'Song Info';
    infoButton.style.cssText = 'background: none; border: none; cursor: pointer; margin-left: 10px;';
    
    infoButton.addEventListener('click', function() {
      const songTitle = document.querySelector('.c-player__song');
      if (songTitle) {
        alert('Now playing: ' + songTitle.textContent);
      }
    });
    
    playerControls.appendChild(infoButton);
    console.log('Custom info button added');
  }
}