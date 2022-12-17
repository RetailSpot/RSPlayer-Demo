
window.addEventListener("message", (event) => {
  if(event.data.type === "RS_FROM_PAGE") {
    chrome.runtime.sendMessage(null, {data: event.data});
  }
}, false);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  console.log("content_script receive: ", message);
  if(message.data.type === "RS_FROM_EXT") {
    console.log("content_script receive from ext: ", message.data);
    window.postMessage({type: message.data.type, config: window.data.config});
  }
});

function insertLoader(file_path) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", file_path);
  document.body.appendChild(s);
}

insertLoader(chrome.extension.getURL('loader.js'));

