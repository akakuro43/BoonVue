/*
 * リサイズイベント等で実施する処理を間引く
 */
module.exports = function (urls, callback, errorCallback) {
  var numUrls = urls.length;
  var numComplete = 0;
  var result = [];

  // Callback for a single file
  function partialCallback(text, urlIndex) {
    result[urlIndex] = text;
    numComplete++;

    // When all files have downloaded
    if (numComplete == numUrls) {
      callback(result);
    }
  }

  for (var i = 0; i < numUrls; i++) {
    loadFile(urls[i], i, partialCallback, errorCallback);
  }

  function loadFile(url, data, callback, errorCallback) {
    // Set up an asynchronous request
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    // Hook the event that gets called as the request progresses
    request.onreadystatechange = function () {
      // If the request is "DONE" (completed or failed)
      if (request.readyState == 4) {
        // If we got HTTP status 200 (OK)
        if (request.status == 200) {
          callback(request.responseText, data)
        } else { // Failed
          errorCallback(url);
        }
      }
    };

    request.send(null);
  }
}

// サンプル
// loadFiles(['./art2/vertex.shader', './art2/fragment.shader'], function (shaderText) {
//   material = makeMaterial(shaderText[0], shaderText[1]);
// }, function (url) {
//   alert('Failed to download "' + url + '"');
// }); 