//event page

var core = {
  /**
   * 
   * @return Object
   */
  "getOptions": function(){
    console.log('getOptions', localStorage);
    return localStorage;
  },
}

window.onload = function(){
  /**
   * request: {
   *   action: "...",
   *   args: [a, b, c, ...]
   * }
   **/
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(sendResponse)
    console.log(request)
    console.log(sender)
    var ret = (core[request.action] || function(){}).apply(this, request.args);
    console.log(ret)
    sendResponse(ret);
  });
}
