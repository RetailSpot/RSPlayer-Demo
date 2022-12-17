function launchAd(color) {
  document.body.style.backgroundColor = color;
  console.log(window.RetailSpotConfig);


}


document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();

  var reload = document.getElementById('reloadbutton');
  reload.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      console.log("bgobject : ", bg);
      console.log(bg.RetailSpotConfig[tabs[0].id]);
      
    });
  });

  var apply = document.getElementById('applybutton');
  // onClick's logic below:
  apply.addEventListener('click', function() {
    console.log("sending config from ext");
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      console.log("sending config from ext to tab : ", tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, {config : "config"} );
    });

    chrome.runtime.sendMessage(null, {type: "RS_FORM_EXT", data: "config" });
  });
});

/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // query the active tab, which will be only one tab
      //and inject the script in it
      chrome.tabs.executeScript(tabs[0].id, {
        func: injectedFunction
      });
    });
*/