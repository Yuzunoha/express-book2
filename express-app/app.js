var http = require('http');
var fs = require('fs');

const p = console.log;

var server = http.createServer((req, res) => {
  var target = '';

  switch (req.url) {
    case '/':
    case '/index':
      target = './index.html';
      break;
    case '/next':
      target = './next.html';
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('bad request');
      return;
  }

  fs.readFile(target, 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(80);
p('サーバを起動しました。');
