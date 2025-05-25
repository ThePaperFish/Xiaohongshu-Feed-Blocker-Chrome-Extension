## Title
Create a Chrome Extension to Block Feed Content on Xiaohongshu

## Objective:
Develop a lightweight Chrome extension that selectively hides or removes the feed content (typically located in the main <div> feed block) on the Xiaohongshu (小红书) website. This extension aims to improve focus and reduce distraction by preventing the main feed from displaying upon visiting the site.

## Functionality Requirements:

- Detect when the user visits Xiaohongshu's web version (e.g., https://www.xiaohongshu.com/ or its subpages).
- Identify and target the DOM element responsible for rendering the main feed (e.g., a div with a specific class or ID).
- Hide, remove, or block that element entirely from view.
- Run the script automatically when the page loads or when content is dynamically injected (e.g., using a MutationObserver if necessary).
- Ensure minimal performance overhead and no interference with other page elements (e.g., search bar, profile settings, notifications).

## Technical Requirements:
- Uses content_scripts for injecting JavaScript into the page.
- Optional: A browser action (icon) with an on/off toggle for enabling or disabling the feed blocker.
- Code should be clean, modular, and commented for future maintenance.