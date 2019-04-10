var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.connection.remoteAddress);
  console.log(req.ip);
  console.log(req.ips);
  let command_code = req.query.command_code;
  res.status(200);
  res.json({msg: 'Received command: ' + command_code});
});

module.exports = router;
