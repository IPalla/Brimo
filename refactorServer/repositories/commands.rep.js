const sqlite3 = require('sqlite3').verbose();
var db = null;

// Create DB & insert default user
function connect(database) {
  db = database;
  db.run("CREATE TABLE IF NOT EXISTS commands (command_id INTEGER PRIMARY KEY AUTOINCREMENT, command_descr text NOT NULL, command_code TEXT NOT NULL, device_id INTEGER, FOREIGN KEY (device_id) REFERENCES devices(device_id))", (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }
  });
}

function insertCommand(device_id, command) {
  if ( device_id == null || command == null || command.command_code == null || command.command_descr == null){
    throw {
      status: 403,
      message: "Error inserting command"
    };
  }
  return new Promise((resolve, reject)=>{
    db.run("INSERT INTO commands (device_id, command_descr, command_code) VALUES (?1,?2,?3)",
    {
      1: device_id,
      2: command.command_descr,
      3: command.command_code
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve({ command_id: this.lastID});
    });
  });
}

function deleteCommands(device_id) {
  return new Promise((resolve, reject)=>{
    db.run("DELETE FROM commands WHERE device_id = ?1",
    {
      1: device_id
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve({ command_id: this.lastID});
    });
  });
}

function getDeviceCommands(device_id){
  return new Promise((resolve, reject)=>{
    db.all("select command_descr, command_code from commands where device_id = ?1",
    {
      1: device_id
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

function addComand(device, command) {
  //TODO
  device.commands.push(command);
  return device;
}

module.exports = {
  connect,
  insertCommand,
  deleteCommands,
  getDeviceCommands
}