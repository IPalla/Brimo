var express = require('express');
var router = express.Router();
var usersService = require('../services/users.service');
var jwtToken = require('../middleware/auth.token')
/* GET users listing. */
router.post('/', function (req, res, next) {
  const user = req.body;
  if (!user.username) return next(createError(400, 'Missing username.'));
  if (!user.password) return next(createError(400, 'Missing mail.'));
  usersService.login(user.username, user.password).then(response => {
    let tkn = jwtToken.createToken(response.id);
    res.json({'tkn_auth': tkn});
  }).catch(err => next(err)); 
});

module.exports = router;