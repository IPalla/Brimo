var createError = require('http-errors');
var config = require('./config');


function devProtected(req, res, next) {
  var key = req.headers['dev-auth'];
  if (!key || key != config.devAuth ) return next({status: 403, message: 'Unauthorized'});
  next();
}

module.exports = {
  devProtected
};
