var express = require('express');
var router = express.Router();
var usersService = require('../services/users.service');

/**
 * Edit user name and password. User id is taken from token.
 */
router.put('/', function (req, res, next)  {
  let userInfo = req.body;
  let userId = req.token.id;
  if (!userInfo.pwd) return next({status: 400, message:'Missing pwd.'});
  if (!userInfo.user) return next({status: 400, message:'Missing user.'});
  usersService.edit(userId, userInfo).then(response => {
    res.status(201);
    res.json(response);
  }).catch(err => next(err)); 
});

module.exports = router;