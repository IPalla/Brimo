var express = require('express');
var router = express.Router();
var locationsService = require('../services/locations.service');


/**
 * Route GET /locations. Get locations list.
 * Return 200 if success.
 */
router.get('/', function (req, res, next) {
  locationsService.list().then(response => {
    if (response.length == 0) {
      res.status(204);
      res.json();
    } else {
      res.json(response);
    }
  }).catch(err => next(err)); 
});

/**
 * Route POST /locations. Create location.
 * Return 201 if success.
 */
router.post('/', function (req, res, next) {
  let location = req.body;
  if (!location.descr) return next({status: 400, message:'Missing descr.'});
  locationsService.create( location ).then(response => {
    res.status(201);
    res.json(response);
  }).catch(err => next(err)); 
});

/**
 * Route PUT /locations/{id}. Edit location information.
 * Return 201 if success.
 */
router.put('/:id', function (req, res, next) {
    let locationInfo = req.body;
    if (!locationInfo.descr) return next({status: 400, message:'Missing descr.'});
        locationsService.editLocation( locationInfo, req.params.id ).then(response => {
        res.status = 201;
        res.json(response);
    }).catch(err => next(err));
});

/**
 * Route DELETE /locations/{id}. Delete location.
 * Return 201 if success.
 */
router.delete('/:id', function (req, res, next) {
  locationsService.deletelocation( req.params.id ).then(response => {
    res.json(response);
  }).catch(err => next(err)); 
});

module.exports = router;