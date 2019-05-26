var express = require('express');
var router = express.Router();
var usersService = require('../services/users.service');
var jwtToken = require('../middleware/auth.token');

router.post('/', function (req, res, next) {
  const user = req.body;
  if (!user.username) return next({status: 400, message:'Missing username.'});
  if (!user.password) return next({status: 400, message:'Missing password.'});
  usersService.login(user.username, user.password).then(response => {
    let tkn = jwtToken.createToken(response);
    res.json({'tkn_auth': tkn});
  }).catch(err => next(err)); 
});

module.exports = router;