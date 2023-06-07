
// constant demos DATA : vast url and mock native data 
const vastFolder = "https://retailspot.github.io/RSPlayer-Demo/vast/";

const nativeDataMap = {
  "samsung.xml": {
    "title": "Galaxy Z Flip 5G",
    "price": "999 €",
    "desc": "The shape of the future. Le Z FLip4 512Go au prix du 256Go !\nCoque au choix offerte",
    "ctatext": "En savoir plus",
    "domain": "Samsung",
    "image": {
      "url": "https: //imgart.casino.fr/imageserver/MC2/8/196608_M1_T1.jpg"
    },
    "brandLogo": {
      "url": ""
    },
    "sponsoredLabel": ""
  },
  "karcher.xml": {
    "title": "Nettoyeur de sols FC 5",
    "price": "164,99 €",
    "desc": "Élimine les saletés et les liquides renversés en un seul passage",
    "ctatext": "En savoir plus",
    "domain": "kaercher",
    "image": {
      "url": "https: //s1.kaercher-media.com/mam/10554000/mainproduct/84798/d4.jpg"
    },
    "brandLogo": {
      "url": ""
    },
    "sponsoredLabel": ""
  },
  "nivea.xml": {
    "title": "Lait corps sous la douche",
    "price": "4,15 €",
    "desc": "Nourrissant pour peaux trés sèches. Huile d'amande douce",
    "ctatext": "En savoir plus",
    "domain": "Nivea",
    "image": {
      "url": "https://www.nocibe.fr/fstrz/r/s/www.nocibe.fr/medias/produits/262414/262414-nivea-lait-nourrissant-huile-d-amande-douce-lait-corps-sous-la-douche-250ml-flacon-1000x1000.jpg?frz-v=5104"
    },
    "brandLogo": {
      "url": ""
    },
    "sponsoredLabel": ""
  },
  "hotels-com.xml": {
    "title": "facile et avantageux. Toujours.",
    "price": "",
    "desc": "Commencez à planifier votre prochaine escapade !",
    "ctatext": "En savoir plus",
    "domain": "Hotels.com",
    "image": {
      "url": "https://a.travel-assets.com/mad-service/footer/bnaBanners/HCOM_POOL_Stocksy_300dpi.jpg"
    },
    "brandLogo": {
      "url": ""
    },
    "sponsoredLabel": ""
  }
}

//complete select options with demo declared in contentChice.json
const sel = document.getElementById("content-select");
fetch("https://retailspot.github.io/RSPlayer-Demo/contentChoice.json")
  .then((res) => res.json())
  .then((demos) => {
    Object.keys(demos).forEach((key) => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.text = demos[key];
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

/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // query the active tab, which will be only one tab
      //and inject the script in it
      chrome.tabs.executeScript(tabs[0].id, {
        func: injectedFunction
      });
    });
*/