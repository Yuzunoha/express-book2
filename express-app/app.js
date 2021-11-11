var express = require('express');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');

var app = express();
const p = console.log;

app.engine('ejs', ejs.renderFile);
app.use(cookieParser());

app.get('/', (req, res) => {
  var cnt = req.cookies.cnt ? req.cookies.cnt : 0;
  cnt++;
  res.cookie('cnt', cnt, { maxAge: 5000 });
  res.render('temp.ejs', { cnt });
});

app.listen(80, () => {
  p('サーバを起動しました。');
});
