const sqlite3 = require('sqlite3').verbose();
var db = null;

// Create DB & create table
function connect(database) {
  db = database;
  db.run("CREATE TABLE IF NOT EXISTS devices_commands (device_id INTEGER, command_id INTEGER, FOREIGN KEY (device_id)"
        + " REFERENCES devices(id),  FOREIGN KEY (command_id) REFERENCES commands(id) )", (err) => {
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


module.exports = {
  connect
}