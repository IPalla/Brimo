var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var jwtAuth = require('./middleware/auth.token');

var app = express();
var usersDb = require('./repositories/users.rep');
const context = '/brimo/api'
// Database connection
usersDb.connect();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( context + '/login', loginRouter);
app.use( context + '/users', jwtAuth.protected, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status( err.status || 500);
  res.json( err.message || 'Unknown error' );
});

module.exports = app;
