const color = "orange";
function changeBackgroundColor(col) {
  
  document.body.style.backgroundColor = col;
}

function injectTheScript() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // query the active tab, which will be only one tab
      //and inject the script in it
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: changeBackgroundColor,
        args: [color],
      },
      () => {});
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('applybutton');
  // onClick's logic below:
  link.addEventListener('click', function() {

    injectTheScript();
    
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