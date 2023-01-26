const RetailSpotConfig = {
  vastUrl: "https://retailspot.github.io/RSPlayer-Demo/vast/video.xml",
  //placement: "eq-8-560837-1702737-118062",
  //mediatype: "native",
  align: "right",
  height:"224",
  //CSSSelector: "", // ignored by slider ad format
  format: "slider",
  //align: "left", // default is bottom right
  //vmargin: 50, // default is 30
  //hmargin: 50, // default is 30
  //anim: "top" // default is 'auto': minimal distance animation
}

function disabledFor(element, sec){
  element.setAttribute("disabled", "");
  setTimeout(() => {
    element.removeAttribute("disabled");
  }, sec * 1000)
}

function updateFields(format) {
  Array.from(document.getElementsByClassName("show-intext")).forEach(el => {
    el.style.display = "none";
  });
  Array.from(document.getElementsByClassName("show-ingrid")).forEach(el => {
    el.style.display = "none";
  });
  Array.from(document.getElementsByClassName("show-intext")).forEach(el => {
    el.style.display = "none";
  });

  Array.from(document.getElementsByClassName("show-"+format)).forEach(el => {
    el.style.display = "";
  });
}
document.getElementById("format-select").onchange = (event)=> {updateFields(event.target.value)};


document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage();

  // first load the curront config from the page
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log("bgobject : ", bg);
    console.log(bg.RetailSpotConfig[tabs[0].id]);
    
  });

  // when click on apply, send new config to page
  var applyButton = document.getElementById('applybutton');
  applyButton.addEventListener('click', function() {
    // read config from form
    RetailSpotConfig.format = document.getElementById('format-select').value;
    RetailSpotConfig.align = document.getElementById('align-select').value;
    RetailSpotConfig.ingridSize = document.getElementById('size-select').value;
    if(RetailSpotConfig.format === 'ingrid' && document.getElementById('native-check').checked){
      RetailSpotConfig.mediatype = "native";
    }

    disabledFor(applyButton, 10);
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