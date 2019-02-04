const sqlite3 = require('sqlite3').verbose();
var db = null;

// Create DB & insert default user
function connect(database) {
  db = database;
  db.run("CREATE TABLE IF NOT EXISTS rooms (id INTEGER PRIMARY KEY AUTOINCREMENT, device_id INTEGER, room text NOT NULL)", (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }
  });
}

function insertRoom(device_id, room) {
  return new Promise((resolve, reject)=>{
    db.run("INSERT INTO rooms (device_id, room) VALUES (?1,?2)",
    {
      1: device_id,
      2: room
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve({ id: this.lastID});
    });
  });
}

module.exports = {
  connect,
  insertRoom
}