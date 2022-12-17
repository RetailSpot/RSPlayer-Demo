

window.RetailSpotConfig = {
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

//window.document.body.style.backgroundColor = "red";
window.postMessage({type: "RS_FROM_PAGE", config: window.RetailSpotConfig});

window.addEventListener("message",  (event) => {
  
  if(event.data.type === "RS_FROM_EXT") {
    window.document.body.style.backgroundColor = "orange";
    console.log("Received new config: ", event.data);
  }
});

/*
var s = document.createElement("script");
s.src = "https://retailspot.github.io/RSPlayer-Demo/versions/rsplayer.js";
s.setAttribute("async", "");
document.body.appendChild(s);
*/
