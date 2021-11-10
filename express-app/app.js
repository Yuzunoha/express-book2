var http = require('http');
var morgan = require('morgan');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  return res.render('index', { title: 'こんにちは世界!ejs' });
});
app.get('/form', (req, res) => {
  return res.render('form');
});
app.post('/form', (req, res) => {
  const obj = {
    username: req.body.username,
    message: req.body.message,
  };
  return res.render('result', obj);
});

var server = http.createServer(app);
server.listen(80);
