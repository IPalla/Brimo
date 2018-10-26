var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Routers
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var devicesRouter = require('./routes/devices');
// Middleware
var jwtAuth = require('./middleware/auth.token');
var devAuth = require('./middleware/auth.dev');
var debugReq = require('./middleware/debug');
// Databases
var dbConfig = require('./repositories/config');
// Api init
var app = express();
const context = '/brimo/api'
// Database connection
dbConfig.connect();
//Directories & default middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Routing
app.use( context + '/login', devAuth.devProtected, loginRouter);
app.use( context + '/users', jwtAuth.protected, usersRouter);
app.use( context + '/devices', devAuth.devProtected, devicesRouter);
// Error control
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  res.status( err.status || 500);
  res.json( {error: err.message || 'Unknown error' });
});

module.exports = app;