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
    res.json(response);
  }).catch(err => next(err)); 
});

/**
 * Route PUT /devices/{id}. Edit device information.
 * Return 201 if success.
 */
router.put('/:id', function (req, res, next) {
  let deviceInfo = req.body;
  console.log(deviceInfo);
  if( deviceInfo.new_name !== undefined && deviceInfo.new_location !== undefined ) {
    devicesService.editLocation( deviceInfo, req.params.id );
  } else if ( deviceInfo.info !== undefined ) {
    devicesService.editInfo( deviceInfo, req.params.id ).then(response => {
      res.status = 201;
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
    res.json(response);
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

module.exports = router;