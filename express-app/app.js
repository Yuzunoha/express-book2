var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

const p = console.log;
const index = fs.readFileSync('./index.html', 'utf-8');

var server = http.createServer((req, res) => {
  if ('GET' === req.method) {
    var urlParts = url.parse(req.url, true);
    p('---GET Request---');
    p(`name: ${urlParts.query.name}`);
    p(`age : ${urlParts.query.age}`);
  } else {
    var body = '';

    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      var params = qs.parse(body);
      p('---POST Request---');
      p(`name: ${params.name}`);
      p(`age : ${params.age}`);
    });
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(index);
  res.end();
});

server.listen(80);
p('サーバを起動しました。');
