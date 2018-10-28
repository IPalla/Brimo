const sqlite3 = require('sqlite3').verbose();
// Databases
var usersDb = require('./users.rep');
var devicesDb = require('./devices.rep');
var commandsDb = require('./commands.rep');
var roomsDb = require('./rooms.rep');
var db;
function connect() {
  db = new sqlite3.Database("./db/users.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }
    usersDb.connect(db);
    devicesDb.connect(db);
    commandsDb.connect(db);
    roomsDb.connect(db);
  });
}

module.exports = {
  connect
}