var express = require('express');
var router = express.Router();
var devicesService = require('../services/devices.service');

/**
 * Route POST /commands/{device_id}. Edit location information.
 * Return 201 if success.
 */
router.post('/:device_id/commands', function (req, res, next) {
    let device_id = req.params.device_id;
    let command_code = req.query.command_code;
    if (command_code == null) return next({status: 400, message:'Missing command code.'});
    devicesService.sendCommand(device_id, command_code).then(response => {
        res.status(200);
        res.json(response);
      }).catch(err => next(err));
});


module.exports = router;