const sqlite3 = require('sqlite3').verbose();
var db = null;

// Create DB & insert default user
function connect(database) {
  db = database;
  db.run("CREATE TABLE IF NOT EXISTS rooms (id INTEGER PRIMARY KEY AUTOINCREMENT, descr text NOT NULL)", (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }
  });
}

function list() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM rooms", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

function create(room) {
  return new Promise((resolve, reject)=>{
    db.run("INSERT INTO rooms (descr) VALUES (?1)",
    {
      1: room.descr
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve({ id: this.lastID});
    });
  });
}



function editName(room) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE rooms SET descr = ?1 WHERE id = ?2", {
      1: room.descr,
      2: room.id
    }, function (err, rows) {
      if (err || this.changes < 1) {
        reject(`Error updating room ${room.id} name.`);
      }
      resolve({
        id: this.lastID
      });
    });
  });
}

function deleteLocation(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM rooms WHERE id = ?1", {
      1: id
    }, function (err, rows) {
      if (err || this.changes < 1) {
        reject(`Error deleting room ${id}.`);
      }
      resolve({
        id: this.lastID
      });
    });
  });
}

module.exports = {
  connect,
  create,
  list,
  editName,
  deleteLocation
}