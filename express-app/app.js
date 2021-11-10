var http = require('http');
var url = require('url');
var fs = require('fs');

const p = console.log;

var server = http.createServer((req, res) => {
  var urlParts = url.parse(req.url);
  var path = __dirname + '/' + urlParts.pathname;
  p('path', path);
  var stream = fs.createReadStream(path);

  stream.on('data', (data) => {
    res.write(data);
  });
  stream.on('end', (data) => {
    res.end();
  });
});

server.listen(80);
p('サーバを起動しました。');
