var express = require('express');
var ejs = require('ejs');

var app = express();
const p = console.log;

app.engine('ejs', ejs.renderFile);

app.get('/', (req, res) => {
  res.render('temp.ejs', {
    title: 'タイトルだよー',
    contents: '<p>hoge</p>',
  });
});

app.listen(80, () => {
  p('サーバを起動しました。');
});
