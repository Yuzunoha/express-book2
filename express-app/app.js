var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
const p = console.log;

app.engine('ejs', ejs.renderFile);
app.use(bodyParser.urlencoded({ extended: true }));

const disp = (msg, { name, age }) => {
  p(msg);
  p(name);
  p(age);
};

app.get('/', (req, res) => {
  disp('GET', req.query);
  res.render('temp.ejs', {});
});

app.post('/', (req, res) => {
  disp('POST', req.body);
  res.render('temp.ejs', {});
});

app.listen(80, () => {
  p('サーバを起動しました。');
});
