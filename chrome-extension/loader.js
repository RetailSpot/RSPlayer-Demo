
function loadRetailSpot(config, callback) {
  var url = 'https://retailspot.github.io/RSPlayer-Demo/versions/rsplayer.js'
  if(config.content === "atv") {
    url = 'https://retailspot.github.io/RSPlayer-Demo/versions/rsatv.js'
  }
  var s = document.createElement("script");
  s.setAttribute("src", url);
  s.setAttribute("async", "");
  s.onload = callback;
  document.body.appendChild(s);
}

function showAd(config) {
  const initFunc = config.content === "atv" ? window.RSATV?.showVideo  : window.RetailSpot?.init

	if(!initFunc) {
    loadRetailSpot(config, () => { showAd(config) })
  }
  else {
    initFunc(config, function(creative) {
      creative.subscribe(function(){
        console.log("RSPlayer - Extension: Creative Loaded!");
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
