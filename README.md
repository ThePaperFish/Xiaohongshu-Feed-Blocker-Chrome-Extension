# Xiaohongshu Feed Blocker Chrome Extension

A Chrome browser extension that blocks the main feed content on the Xiaohongshu (小红书) website, helping you stay focused and reduce distractions while browsing.

## Installation

To install the extension, follow these steps:

1.  Download or clone this repository to your local machine.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable "Developer mode" by toggling the switch in the top right corner.
4.  Click the "Load unpacked" button in the top left corner.
5.  Select the directory where you saved the extension files (the `feeds_blocker` folder).

The extension should now be installed and active.

## Usage

Once installed, the extension will automatically hide the main feed content when you visit `https://www.xiaohongshu.com/` or any of its subpages. You can customize the behavior using the following options in the extension popup:

- **Hide Feed Content**: Toggle the main feed visibility (enabled by default)
- **Show Content on Search Pages**: Allow feed content to appear on search result pages
- **Show Content on Profile Pages**: Allow feed content to appear on user profile pages

If the feed appears after the page loads, the extension uses a MutationObserver to detect and hide it dynamically based on your settings.

## Contributing

If you find issues or have suggestions for improvement, feel free to open an issue or submit a pull request.