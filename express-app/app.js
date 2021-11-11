var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var main = fs.readFileSync('./main.ejs', 'utf-8');
var sub = fs.readFileSync('./sub.ejs', 'utf-8');
const p = console.log;

var server = http.createServer((req, res) => {
  const contents = ejs.render(sub, {
    data: '<p>hogehoge</p>',
  });
  var data = ejs.render(main, { contents });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
});

server.listen(80);
p('サーバを起動しました。');
