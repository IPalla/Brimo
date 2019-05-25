var express = require('express');
var router = express.Router();
var usersService = require('../services/users.service');
var jwtToken = require('../middleware/auth.token');

router.post('/login', function (req, res, next) {
  const user = req.body;
  if (!user.username) return next({status: 400, message:'Missing username.'});
  if (!user.password) return next({status: 400, message:'Missing password.'});
  usersService.login(user.username, user.password).then(response => {
    let tkn = jwtToken.createToken(response.id);
    res.json({'tkn_auth': tkn});
  }).catch(err => next(err)); 
});

router.post('/users', function (req, res, next) {
  let user = req.body;
  usersService.create( user ).then(response => {
    res.status(201);
    res.json(response);
  }).catch(err => next(err)); 
});

module.exports = router;