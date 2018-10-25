var express = require('express');
var router = express.Router();
var devicesService = require('../services/devices.service');

router.get('/', function (req, res, next) {
  devicesService.list().then(response => {
    res.json(response);
  }).catch(err => next(err)); 
});

router.post('/', function (req, res, next) {
  devicesService.create( req.body ).then(response => {
    res.json(response);
  }).catch(err => next(err)); 
});

router.put('/:id', function (req, res, next) {
  devicesService.editInfo( req.body, req.params.id ).then(response => {
    res.json(response);
  }).catch(err => next(err)); 
});

router.delete('/:id', function (req, res, next) {
  res.json(req.params.id)
});

module.exports = router;