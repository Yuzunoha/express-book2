var http = require('http');
var func = require('./func');

const { add, sub } = func;
const p = console.log;

p(add(1, 21));
p(sub(10, 30));

var server = http.createServer((req, res) => {
  res.end('サーバです');
});

server.listen(80);
p('サーバを起動しました。');
