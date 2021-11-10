var http = require('http');

const p = console.log;

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('こんにちは、世界!');
  res.end();
});

server.listen(80);
p('サーバを起動しました。');
