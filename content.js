const FEED_SELECTOR = "div.feeds-container";

function hideFeed(feedElement) {
  feedElement.style.display = "none";
  console.log("Xiaohongshu feed element hidden.");
}

function showFeed(feedElement) {
  feedElement.style.display = "";
  console.log("Xiaohongshu feed element shown.");
}

function getPageType() {
  const url = window.location.href;
  if (url.includes("keyword=")) return "search";
  if (url.includes("/user/profile/")) return "profile";
  if (url.includes("/explore/") && !url.includes("channel_id=")) return "post";
  return "feed";
}

function applyFeedVisibility(feedElement, pageType, toggleFeedHidden, toggleUnblockSearch, toggleUnblockProfile) {
  if (!feedElement) {
    console.log("Xiaohongshu feed element not found yet.");
    return;
  } else if (
    !toggleFeedHidden ||
    (pageType === "search" && toggleUnblockSearch) ||
    (pageType === "profile" && toggleUnblockProfile) ||
    pageType === "post"
  ) {
    showFeed(feedElement);
  } else {
    hideFeed(feedElement);
  }
}

function getFeedElementAndSettings(callback) {
  const feedElement = document.querySelector(FEED_SELECTOR);
  const pageType = getPageType();

  chrome.storage.sync.get(["toggleFeedHidden", "toggleUnblockSearch", "toggleUnblockProfile"], (data) => {
    const toggleFeedHidden = data.toggleFeedHidden !== false;
    const toggleUnblockSearch = data.toggleUnblockSearch === true;
    const toggleUnblockProfile = data.toggleUnblockProfile === true;
    callback(feedElement, pageType, toggleFeedHidden, toggleUnblockSearch, toggleUnblockProfile);
  });
}

function updateFeedVisibility() {
  getFeedElementAndSettings(applyFeedVisibility);
}

const observer = new MutationObserver(updateFeedVisibility);
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case "updateSettings":
      updateFeedVisibility();
      break;
  }
});
