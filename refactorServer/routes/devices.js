var express = require('express');
var router = express.Router();
var devicesService = require('../services/devices.service');


/**
 * Route GET /devices. Get devices list.
 * Return 200 if success.
 */
router.get('/', function (req, res, next) {
  devicesService.list().then(response => {
    if (response.length == 0) {
      res.status(204);
      res.json();
    } else {
      res.json(response);
    }
  }).catch(err => next(err)); 
});

/**
 * Route POST /devices. Create device.
 * Return 201 if success.
 */
router.post('/', function (req, res, next) {
  let device = req.body;
  if (!device.name) return next({status: 400, message:'Missing name.'});
  if (!device.freq) return next({status: 400, message:'Missing freq.'});
  if (!device.camera) {
    device.camera = false;
  }
  devicesService.create( device ).then(response => {
    res.status(201);
    device.device_id = response.device_id;
    res.json(device);
  }).catch(err => next(err)); 
});

/**
 * Route PUT /devices/{id}. Edit device information.
 * Return 201 if success.
 */
router.put('/:id', function (req, res, next) {
  let name = req.query.name;
  let room_id = req.query.room_id;
  let info = req.query.info;
  let deviceId = req.params.id;
  if ( deviceId == null)  return next({status: 400, message:'Missing device id.'});
  if (info != null){
    devicesService.editInfo( info, deviceId ).then(response => {
      res.status = 200;
      res.json();
    }).catch(err => next(err)); 
  }
  else if (name != null || room_id != null){
    devicesService.editNameAndLocation( room_id, name, deviceId ).then(response => {
      res.status = 200;
      res.json(response);
    }).catch(err => next(err)); 
  } else {
    return next({status: 400, message:'Info field or new_name and new_location are required.'});
  }
});


router.patch('/:id', function (req, res, next) {
  let name = req.query.name;
  let room_id = req.query.room_id;
  let deviceId = req.params.id;
  if ( deviceId == null)  return next({status: 400, message:'Missing device id.'});
  if (name != null || room_id != null){
    devicesService.editNameAndLocation( room_id, name, deviceId ).then(response => {
      res.status = 200;
      res.json(response);
    }).catch(err => next(err)); 
  } else {
    return next({status: 400, message:'Info field or new_name and new_location are required.'});
  }
});

/**
 * Route DELETE /devices/{id}. Delete device.
 * Return 201 if success.
 */
router.delete('/:id', function (req, res, next) {
  devicesService.deleteDevice( req.params.id ).then(response => {
    res.json();
  }).catch(err => next(err)); 
});


/**
 * Route GET /devices/{id}. Obtain device.
 * Return 404 if not found.
 */
router.get('/:id', function (req, res, next) {
  devicesService.getDevice( req.params.id ).then(response => {
    res.json(response);
  }).catch(err => next(err)); 
});

/**
 * Route POST /devices/{device_id}/commands. Send command to device
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