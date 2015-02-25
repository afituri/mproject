var express = require('express');
var session = require('express-session');
var i18n = require('i18n');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var adminPage = require('./routes/adminPage');
var charts = require('./routes/charts');
var tables = require('./routes/tables');
var forms = require('./routes/forms');
var blankPage = require('./routes/blankPage');
var adminLogin = require('./routes/adminLogin');
var app = express();

// minimal config
i18n.configure({
  locales: ['en', 'ar'],
  cookie: 'locale',
  directory: "" + __dirname + "/locales",
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'NagaDev',resave: true,saveUninitialized: true}));
// init i18n module for this loop
app.use(i18n.init);

// Routes

app.use('/users', users);
app.use('/adminPage',adminPage);
app.use('/charts',charts);
app.use('/tables',tables);
app.use('/forms',forms);
app.use('/blankPage',blankPage);
app.use('/adminLogin',adminLogin);
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;