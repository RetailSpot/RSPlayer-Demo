const RetailSpotConfig = {
  vastUrl: "https://retailspot.github.io/RSPlayer-Demo/vast/video_omid.xml",
  //placement: "eq-8-560837-1702737-118062",
  //mediatype: "native",
  align: "right",
  //CSSSelector: "#target", // ignored by slider ad format
  format: "slider",
  //align: "left", // default is bottom right
  //vmargin: 50, // default is 30
  //hmargin: 50, // default is 30
  //anim: "top" // default is 'auto': minimal distance animation
}

document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();

  // first load the curront config from the page
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log("bgobject : ", bg);
    console.log(bg.RetailSpotConfig[tabs[0].id]);
    
  });

  // when click on apply, send new config to page
  var apply = document.getElementById('applybutton');
  // onClick's logic below:
  apply.addEventListener('click', function() {
    console.log("sending config from ext");
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      console.log("sending config from ext to tab : ", tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, {type: "RS_FROM_EXT", config: RetailSpotConfig } );
    });
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