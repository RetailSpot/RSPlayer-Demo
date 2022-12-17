
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if(message.data.type === "RS_FROM_PAGE") {
    console.log("background receive: ", message.data);
    window.RetailSpotConfig = {};
    window.RetailSpotConfig[sender.tab.id] = message.data.config;
  }
});