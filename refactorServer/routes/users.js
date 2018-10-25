var express = require('express');
var router = express.Router();
var usersService = require('../services/users.service');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json('congrats!')
});

module.exports = router;