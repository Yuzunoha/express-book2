var express = require('express');
var ejs = require('ejs');

var app = express();
const p = console.log;

app.engine('ejs', ejs.renderFile);

app.get('/', (req, res) => {
  const contents = '<p>hoge</p>';
  res.render('temp.ejs', {
    contents,
  });
});

app.listen(80, () => {
  p('サーバを起動しました。');
});
