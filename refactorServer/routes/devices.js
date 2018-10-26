var express = require('express');
var router = express.Router();
var devicesService = require('../services/devices.service');


/**
 * Route GET /devices. Get devices list.
 * Return 200 if success.
 */
router.get('/', function (req, res, next) {
  devicesService.list().then(response => {
    console.log(response.length);
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
  console.log(req.body);
  devicesService.create( req.body ).then(response => {
    res.status(201);
    res.json(response);
  }).catch(err => next(err)); 
});

/**
 * Route PUT /devices/{id}. Edit device information.
 * Return 201 if success.
 */
router.put('/:id', function (req, res, next) {
  console.log(req.body);
  devicesService.editInfo( req.body, req.params.id ).then(response => {
    res.status = 201;
    res.json(response);
  }).catch(err => next(err)); 
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

module.exports = router;