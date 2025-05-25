// popup.js

// Helper function to load settings from storage
const loadSettings = (callback) => {
  chrome.storage.sync.get(["toggleFeedHidden", "toggleUnblockSearch", "toggleUnblockProfile"], callback);
};

// Helper function to save settings to storage
const saveSettings = (settings, callback) => {
  chrome.storage.sync.set(settings, callback);
};

// Helper function to send message to content script
const sendMessageToContentScript = (message) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleFeedHiddenCheckbox = document.getElementById("toggleFeedHiddenCheckbox");
  const toggleUnblockSearchCheckbox = document.getElementById("toggleUnblockSearchCheckbox");
  const toggleUnblockProfileCheckbox = document.getElementById("toggleUnblockProfileCheckbox");

  // Load the saved states
  loadSettings((data) => {
    toggleFeedHiddenCheckbox.checked = data.toggleFeedHidden !== false;
    toggleUnblockSearchCheckbox.checked = data.toggleUnblockSearch !== false;
    toggleUnblockProfileCheckbox.checked = data.toggleUnblockProfile !== false;
  });

  // Save the state when the checkboxes change
  toggleFeedHiddenCheckbox.addEventListener("change", () => {
    saveSettings({ toggleFeedHidden: toggleFeedHiddenCheckbox.checked }, () => {
      sendMessageToContentScript({ action: "updateSettings" });
    });
  });

  toggleUnblockSearchCheckbox.addEventListener("change", () => {
    saveSettings({ toggleUnblockSearch: toggleUnblockSearchCheckbox.checked }, () => {
      sendMessageToContentScript({ action: "updateSettings" });
    });
  });

  toggleUnblockProfileCheckbox.addEventListener("change", () => {
    saveSettings({ toggleUnblockProfile: toggleUnblockProfileCheckbox.checked }, () => {
      sendMessageToContentScript({ action: "updateSettings" });
    });
  });
});
