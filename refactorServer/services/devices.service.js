const devicesRep = require('../repositories/devices.rep');
const commandsRep = require('../repositories/commands.rep');

/**
 * Retrieves all devices from database. Split commands_list.
 */
function list() {
  devices_list = [];
  return devicesRep.list().then(devices => {
    devices.forEach(dev => {
      if (dev.command_list != null) {
        dev.command_list = dev.command_list.split(",");
      } else {
        dev.command_list = undefined;
      }
    });
    return devices;
  });
}
/**
 * Creates a device into database. If commands field is set, then inserts each commands on commands database.
 * Throws 500 error if error.
 * @param {Object} device 
 */
function create(device) {
  return devicesRep.create(device).then(response => {
    promises = [];
    if (!device.commands) {
      return response;
    }
    device.commands.forEach(command => {
      promises.push(commandsRep.insertCommand(response.id, command));
    });
    return Promise.all(promises).then(res => {
      return response;
    }).catch(err => {
      throw {
        status: 500,
        message: `Error while inserting device ${response.id} commands.`
      }
    });
  });
}

/**
 * Edit device.info field and update lastupdate field.
 * @param {Object} device 
 * @param {int} id 
 */
function editInfo(device, id) {
  device.id = id;
  return devicesRep.editInfo(device).catch(err => {
    throw {
      status: 400,
      message: err
    };
  });
}

/**
 * Edit device.location & device.name fields and update lastupdate field.
 * @param {Object} device 
 * @param {int} id 
 */
function editLocation(deviceInfo, id) {
  deviceInfo.id = id;
  return devicesRep.editName(deviceInfo)
    // .then(() => {
    //     return roomsRep.insertRoom(deviceInfo);
    //   })
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

function validateDevice(device) {
  return new Promise((resolve, reject) => {
    if (device.commands.length != 3) {
      reject({
        status: 400,
        message: 'Invalid device format: commands.'
      });
    } else if ((device.commands[0] != 'Y' && device.commands[0] != 'N') ||
      (device.commands[1] != 'Y' && device.commands[1] != 'N') ||
      (device.commands[2] != 'Y' && device.commands[2] != 'N')
    ) {
      reject({
        status: 400,
        message: 'Invalid device input. Commands must be Y or N.'
      });
    }
    resolve(device);
  });
}

module.exports = {
  list,
  create,
  editInfo,
  editLocation,
  deleteDevice
}