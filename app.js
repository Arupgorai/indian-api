var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//var config   = require("konphyg")(__dirname + "/config")("all");
//var db = config.MONGO_CONFIG.DB;
//var url= config.MONGO_CONFIG.URL;

var index = require('./routes/index');
var bank = require('./routes/bank');


var app = express();
//mongoose.connect(url+db);


// uncomment after placing your favicon in /public

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/pincode', index);
app.use('/bank', bank);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err);
  res.json({error: err.message});
  res.status(err.status || 500);
  res.json({message: "Internal Server Error"});
});

app.disable('x-powered-by');

module.exports = app;
