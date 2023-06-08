
// constant demos DATA : vast url and mock native data 
const vastFolder = "https://retailspot.github.io/RSPlayer-Demo/vast/";

let nativeDataMap = {};

//complete select options with demo declared in contentChice.json
const sel = document.getElementById("content-select");
fetch("https://retailspot.github.io/RSPlayer-Demo/contentChoice.json")
  .then((res) => res.json())
  .then((demos) => {
    nativeDataMap = demos;
    Object.keys(demos).forEach((key) => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.text = demos[key].domain;
      sel.add(opt);
    });
  });


const RetailSpotConfig = {
  //vastUrl: "https://retailspot.github.io/RSPlayer-Demo/vast/video.xml",
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

function onFormatChange(format) {
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
document.getElementById("format-select").onchange = (event)=> {onFormatChange(event.target.value)};

function onContentChange(content) {

  if(content === 'atv') {
    Array.from(document.getElementsByClassName("hide-product-disc")).forEach(el => {
      el.style.display = "none";
    });    
  } else {
    Array.from(document.getElementsByClassName("hide-product-disc")).forEach(el => {
      el.style.display = "";
    }); 
  }

}
document.getElementById("content-select").onchange = (event)=> {onContentChange(event.target.value)};

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
    const contentKey = document.getElementById('content-select').value;
    RetailSpotConfig.vastUrl = vastFolder+contentKey;
    RetailSpotConfig.content = contentKey;
    RetailSpotConfig.nativeData = nativeDataMap[contentKey];

    RetailSpotConfig.format = document.getElementById('format-select').value;
    RetailSpotConfig.align = document.getElementById('align-select').value;
    RetailSpotConfig.ingridSize = document.getElementById('size-select').value;
    RetailSpotConfig.soundButton = document.getElementById('sound-check').checked;
    RetailSpotConfig.enlargeVideo = document.getElementById('enlarge-check').checked;
    RetailSpotConfig.videoBackground = document.getElementById('vid-bg-select').value;
    RetailSpotConfig.videoFit = document.getElementById('vid-fit-select').value;
    RetailSpotConfig.sponsoredAlign = document.getElementById('sponsored-align-select').value;
    RetailSpotConfig.sponsoredLabel = document.getElementById('sponsored-label-input').value;
    
    if(RetailSpotConfig.content !== "atv" && RetailSpotConfig.format === 'ingrid' && document.getElementById('native-check').checked){
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