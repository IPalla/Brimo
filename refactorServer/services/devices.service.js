const devicesRep = require('../repositories/devices.rep');
const commandsRep = require('../repositories/commands.rep');
const locationsRep = require('../repositories/rooms.rep');
const rp = require('request-promise')
/**
 * Retrieves all devices from database. Split commands_list.
 */
function list() {
  devices_list = [];
  return devicesRep.list().then(response => {
    response.forEach(device => {
      if (device.room_id == null)
        device.descr = null;
    });
    return response;
  });
}
/**
 * Creates a device into database. If commands field is set, then inserts each commands on commands database.
 * Throws 500 error if error.
 * @param {Object} device 
 */
function create(device) {
  var room = null;
  if (device.room != null && device.room.id != null) {
    console.log(device.room.id);
    return locationsRep.findById(device.room.id).then(room => {
      return devicesRep.create(device, room).then(dev => {
        if (device.commands != null) {
          device.commands.forEach(command => commandsRep.insertCommand(dev.device_id, command).catch(err => console.log(err)));
        }
        return dev;
      });
    });
  }
  return devicesRep.create(device, null).then(dev => {
    if (device.commands != null) {
      device.commands.forEach(command => commandsRep.insertCommand(dev.device_id, command).catch(err => console.log(err)));
    }
    return dev;
  });
}

/**
 * Edit device.info field and update lastupdate field.
 * @param {Object} device 
 * @param {int} id 
 */
function editInfo(info, deviceId) {
  return devicesRep.editInfo(info, deviceId).catch(err => {
    throw {
      status: 400,
      message: err
    };
  });
}

/**
 * Edit device.location & device.name fields
 * @param {int} location 
 * @param {string} name 
 * @param {int} deviceId 
 */
function editNameAndLocation(location, name, deviceId) {
  return devicesRep.editNameAndLocation(location, name, deviceId)
    .catch(err => {
      throw {
        status: 400,
        message: err
      };
    });
}

/**
 * Delete device and device commands.
 * @param {int} id 
 */
function deleteDevice(id) {
  return devicesRep.deleteDevice(id).then(response => {
    return commandsRep.deleteCommands(id);
  }).catch(err => {
    throw {
      status: 404,
      message: err
    };
  });
}


function getDevice(device_id) {
  return devicesRep.getDevice(device_id).then(device => {
    return commandsRep.getDeviceCommands(device_id).then(commands => {
      device.commands = commands;
      return locationsRep.findById(device.room_id).then(location => {
        device.descr = (location != null) ? location.descr : null;
        return device;
      });
    });
  });
}

function sendCommand(device_id, command_code) {
  let commandfound = false;
  return devicesRep.getDevice(device_id).then(device => {
    return commandsRep.getDeviceCommands(device_id).then(commands => {
      commands.forEach(command => {
        if (command.command_code == command_code) {
          commandfound = true;
        }
      });
      if (!commandfound)
        throw {
          status: 400,
          message: 'Command \'' + command_code + '\' not found'
        };
      else{
        console.log('http://' + device.IP + ':8081/command?command_code=' + command_code);
        return rp.post({ uri: 'http://' + device.IP + ':8081/command?command_code=' + command_code, json: true, method: 'POST' });
      }
    });
  });
}

module.exports = {
  list,
  create,
  editInfo,
  editNameAndLocation,
  deleteDevice,
  getDevice,
  sendCommand
}