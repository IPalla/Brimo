var jwt = require('jsonwebtoken');
var createError = require('http-errors');
var config = require('./config');
const hoursToExpire = 3;

function createToken(user) {
  console.log('creating token with data:');
  console.log(user);
  return jwt.sign({
    user
  }, config.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 99999
  });
};

function protected(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) return next({status: 401, message: 'Unauthorized'});
  jwt.verify(token, config.TOKEN_SECRET, function (err, decoded) {
    if (err) return next({status: 401, message: 'Unauthorized'});
    req.verified = true;
    req.token = decoded;
    console.log(decoded);
    next();
  });
}

module.exports = {
  createToken,
  protected
};
