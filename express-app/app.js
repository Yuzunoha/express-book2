var http = require('http');
var fs = require('fs');

const p = console.log;

var server = http.createServer((req, res) => {
  fs.readFile('./temp.html', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(80);
p('サーバを起動しました。');
