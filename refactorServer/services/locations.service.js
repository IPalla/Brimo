const locationsRep = require('../repositories/rooms.rep');

/**
 * Retrieves all locations from database.
 */
function list() {
  return locationsRep.list();
}

/**
 * Creates a location into database.
 */
function create(location) {
  return locationsRep.create(location);
}

/**
 * Edit location.name field.
 * @param {Object} room descr 
 * @param {int} id 
 */
function editLocation( location, room_id) {
    location.room_id = room_id;
  return locationsRep.editName(location);
}

/**
 * Delete location and location commands.
 * @param {int} id 
 */
function deletelocation(id) {
  return locationsRep.deleteLocation(id);
}

module.exports = {
  list,
  create,
  editLocation,
  deletelocation
}