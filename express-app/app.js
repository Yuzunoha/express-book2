var express = require('express');
var ejs = require('ejs');
var app = express();
const p = console.log;
var msg = '';

app.get('/', (req, res) => {
  res.render('temp.ejs', {});
});

app.post('/ajax', (req, res) => {
  msg += 'hoge';
  res.json({
    msg,
  });
});

app.listen(80, () => {
  p('サーバを起動しました。');
});
