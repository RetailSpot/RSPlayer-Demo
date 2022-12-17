
window.addEventListener("message", (event) => {
  if(event.data.type === "RS_FROM_PAGE") {
    chrome.runtime.sendMessage(null, {data: event.data});
  }
}, false);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("content_script receive: ", message);

  if(message.type === "RS_FROM_EXT") {
    console.log("content_script receive from ext: ", message);
    window.postMessage(message);
  }
});

function insertLoader(file_path) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", file_path);
  document.body.appendChild(s);
}

insertLoader(chrome.extension.getURL('loader.js'));

