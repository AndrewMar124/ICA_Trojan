const blockedDomains = [
  "doubleclick.net",
  "googleadservices.com",
  "ads.yahoo.com",
  "adroll.com"
];

// Function to intercept web requests and block known ad domains
browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  {
    urls: blockedDomains.map(domain => `*://*.${domain}/*`)
  },
  ["blocking"]
);

console.log("Simple ad block is running! XD :)");
