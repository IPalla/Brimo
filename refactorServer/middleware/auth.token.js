var jwt = require('jsonwebtoken');
var createError = require('http-errors');
var config = require('./config');
const hoursToExpire = 3;

function createToken(user_id) {
  return jwt.sign({
    id: user_id,
  }, config.TOKEN_SECRET, {
    expiresIn: 60 * 60 * hoursToExpire
  });
};

function protected(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) return next({status: 401, message: 'Unauthorized'});
  jwt.verify(token, config.TOKEN_SECRET, function (err, decoded) {
    if (err) return next({status: 401, message: 'Unauthorized'});
    req.verified = true;
    req.token = decoded;
    next();
  });
}

module.exports = {
  createToken,
  protected
};
