var http = require('http');
var fs = require('fs');

const p = console.log;

const index = fs.readFileSync('./index.html', 'utf-8');
const next = fs.readFileSync('./next.html', 'utf-8');

var server = http.createServer((req, res) => {
  var html = '';

  switch (req.url) {
    case '/':
    case '/index':
      html = index;
      break;
    case '/next':
      html = next;
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('bad request');
      return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(html);
  res.end();
});

server.listen(80);
p('サーバを起動しました。');
