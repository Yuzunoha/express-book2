var express = require('express');
var app = express();

const p = console.log;

app.get('/', (req, res) => {
  res.send('Hello Expressあああ');
});

app.listen(80, () => {
  p('サーバを起動しました。');
});
