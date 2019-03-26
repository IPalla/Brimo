const sqlite3 = require('sqlite3').verbose();
var db = null;

// Create DB & insert default user
function connect(database) {
  db = database;
  db.run("CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, command text NOT NULL, command_code)", (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }
  });
}

function insertCommand(device_id, command) {
  return new Promise((resolve, reject)=>{
    db.run("INSERT INTO commands (device_id, command) VALUES (?1,?2)",
    {
      1: device_id,
      2: command
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve({ id: this.lastID});
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
      resolve({ id: this.lastID});
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
  deleteCommands
}