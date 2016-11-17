var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.listen(51493, function () {
  console.log('Express Server listening on port 51493!')
})

// GET test express
app.get('/ping', function (req, res) {
  res.send('pong');
})

app.get('/api/v0.0.0/products', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(path.join(__dirname, path.join("mocks", "apiProducts.json")));
})

//TODO product api

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Express path not found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);

  res.status(500).send('Express server error');
})


