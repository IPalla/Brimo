var express = require('express');
var router = express.Router();
var usersService = require('../services/users.service');

/**
 * Edit user name and password. User id is taken from token.
 */
router.put('/', function (req, res, next)  {
  let userInfo = req.body;
  let userId = req.token.id;
  if (!userInfo.password) return next({status: 400, message:'Missing password.'});
  if (!userInfo.username) return next({status: 400, message:'Missing username.'});
  if (!userInfo.role) return next({status: 400, message:'Missing role.'});
  usersService.edit(userId, userInfo).then(response => {
    res.status(201);
    userInfo.id = userId;
    res.json(userInfo);
  }).catch(err => next(err)); 
});

router.put('/:user_id', function (req, res, next)  {
  let userInfo = req.body;
  let userId = req.params.user_id;
  if (!userInfo.password) return next({status: 400, message:'Missing password.'});
  if (!userInfo.username) return next({status: 400, message:'Missing username.'});
  if (!userInfo.role) return next({status: 400, message:'Missing role.'});
  if (!userId)  return next({status: 400, message:'Missing user id.'});
  usersService.edit(userId, userInfo).then(response => {
    res.status(201);
    userInfo.id = userId;
    res.json(userInfo);
  }).catch(err => next(err)); 
});

router.delete('/:user_id', function (req, res, next)  {
  let userId = req.params.user_id;
  if (!userId)  return next({status: 400, message:'Missing user id.'});
  usersService.deleteUser(userId).then(response => {
    res.status(200);
    res.json({});
  }).catch(err => next(err)); 
});

router.post('/', function (req, res, next) {
  let user = req.body;
  usersService.add( user ).then(response => {
    user.id = response.id;
    res.status(201);
    res.json(user);
  }).catch(err => next(err)); 
});

module.exports = router;