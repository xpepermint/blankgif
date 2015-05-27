function getImageBuffer() {
  var buff = new Buffer(35);
  buff.write("R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", "base64");
  return buff;
}

function sendBlankGif(req, res) {
  var buff = getImageBuffer();
  res.type('image/gif');
  res.set('Content-Length', '35');
  return res.send(buff);
}

function middleware() {
  return function(req, res, next) {
    res.sendBlankGif = function() { return sendBlankGif(req, res) };
    next();
  }
}

module.exports.getImageBuffer = getImageBuffer;
module.exports.sendBlankGif = sendBlankGif;
module.exports.middleware = middleware;
