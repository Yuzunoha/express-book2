var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

const p = console.log;
const index = fs.readFileSync('./index.html', 'utf-8');

const disp = (method, obj) => {
  const { name, age } = obj;
  p(`---${method} Request---`);
  p(`name: ${name}`);
  p(`age : ${age}`);
};

var server = http.createServer((req, res) => {
  if ('GET' === req.method) {
    var urlParts = url.parse(req.url, true);
    disp('GET', urlParts.query);
  } else {
    var body = '';

    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      var params = qs.parse(body);
      disp('POST', params);
    });
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(index);
  res.end();
});

server.listen(80);
p('サーバを起動しました。');
