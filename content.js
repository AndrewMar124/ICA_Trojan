// A simple list of ad-related CSS selectors to block
const adSelectors = [
    '.adsbygoogle',  // Google AdSense
    '.ad-banner',    // General ad class
    '#advertisement', // ID for ads
    '.sponsored',    // Sponsored content
    '[id*="ad-"]'    // ID attributes containing "ad"
  ];
  
  // Remove ad elements
  adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => ad.style.display = 'none');
  });
  