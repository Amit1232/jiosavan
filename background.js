// Background script for Jio Savan Extension

// Listen for installation
chrome.runtime.onInstalled.addListener(function() {
  console.log('Jio Savan Extension installed');
  
  // Initialize storage with default values
  chrome.storage.sync.set({
    enabled: true,
    theme: 'light'
  }, function() {
    console.log('Default settings initialized');
  });
});

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getStatus') {
    chrome.storage.sync.get(['enabled', 'theme'], function(data) {
      sendResponse({
        enabled: data.enabled,
        theme: data.theme
      });
    });
    return true; // Required for async sendResponse
  }
});