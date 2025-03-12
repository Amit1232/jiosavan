document.addEventListener('DOMContentLoaded', function() {
  // Get status element
  const statusElement = document.getElementById('status');
  
  // Get options button
  const optionsButton = document.getElementById('options-btn');
  
  // Check if we're connected to Jio Savan
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    if (currentTab && currentTab.url && currentTab.url.includes('jiosaavn.com')) {
      statusElement.textContent = 'Connected to Jio Saavn';
      statusElement.style.color = '#4CAF50';
    } else {
      statusElement.textContent = 'Not connected to Jio Saavn';
      statusElement.style.color = '#F44336';
    }
  });
  
  // Add event listener for options button
  optionsButton.addEventListener('click', function() {
    // You can open options page if you have one
    // chrome.runtime.openOptionsPage();
    
    // For now, just show a message
    statusElement.textContent = 'Options functionality coming soon!';
    statusElement.style.color = '#2196F3';
  });
});