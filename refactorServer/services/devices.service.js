const devicesRep = require('../repositories/devices.rep');
const commandsRep = require('../repositories/commands.rep');
function list() {
  return devicesRep.list();
}

function create(device) {
  return devicesRep.create(device).then( response => {
    promises = [];
    device.commands.forEach(command => {
      promises.push(commandsRep.insertCommand(response.id, command));
    });
    return Promise.all(promises).then(res=>{return response;}).catch(err => {
      throw {
        status: 400,
        message: `Error while inserting device ${response.id} commands.`
      }
    });
  });
}

function editInfo(device, id) {
  device.id = id;
  return devicesRep.editInfo(device).catch(err => {
    throw {status: 400, message: err};
  });
}

function validateDevice(device) {
  return new Promise((resolve, reject) => {
      if ( device.commands.length != 3) {
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
    editInfo
  }