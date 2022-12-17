
function loadRetailSpot(callback) {
  var s = document.createElement("script");
  s.setAttribute("src", "https://retailspot.github.io/RSPlayer-Demo/versions/rsplayer.js");
  s.setAttribute("async", "");
  s.onload = callback;
  document.body.appendChild(s);
}

function showAd(config) {
	if(!window.RetailSpot) {
    loadRetailSpot(() => { showAd(config) })
  }
  else {
    window.RetailSpot.init(config, function(creative) {
      creative.subscribe(function(){
        console.log("RSPlayer - Extension: AdLoaded!");
      }, window.RetailSpot.VPAID_EVENTS.AdLoaded);
    });
  }
}

//window.document.body.style.backgroundColor = "red";
window.postMessage({type: "RS_FROM_PAGE", config: window.RetailSpotConfig});

window.addEventListener("message",  (event) => {
  if(event.data.type === "RS_FROM_EXT") {
    console.log("Received new config: ", event.data.config);
    showAd(event.data.config);
  }
});
