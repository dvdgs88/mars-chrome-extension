chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript({ file: "contentScript.js" });
  });
});