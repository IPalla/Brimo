	const sqlite3 = require('sqlite3').verbose();
	var db = null;
	var jv = require('json-validation');
	var createDeviceSchema = {
	  "commands": {
	    "type": "array",
	    "minItems": 3,
	    "maxItems": 3,
	    "items": {
	      "type": "string"
	    }
	  },
	  "name": {
	    "type": "string"
	  },
	  "IP": {
	    "type": "string"
	  },
	  "freq": {
	    "type": "number"
	  }
	}

	// Create table
	function connect(database) {
	  db = database;
	  db.run("CREATE TABLE IF NOT EXISTS devices (id INTEGER PRIMARY KEY AUTOINCREMENT,name, freq, info,location ,lastupdate, commands, IP, camera BIT, room_id INTEGER, FOREIGN KEY (room_id) REFERENCES rooms(id)) ", (err) => {
	    if (err) {
	      console.error(err.message);
	      throw err;
	    }
	  });
	}

	function list() {
	  return new Promise((resolve, reject) => {
	    db.all("SELECT DEVICES.ID, NAME, FREQ, INFO, LOCATION, LASTUPDATE, IP, CAMERA, GROUP_CONCAT(COMMANDS.COMMAND) AS command_list FROM  DEVICES LEFT JOIN COMMANDS ON COMMANDS.DEVICE_ID = DEVICES.ID GROUP BY DEVICES.ID", (err, rows) => {
	      if (err) {
	        reject(err);
	      }
	      resolve(rows);
	    });
	  });
	}

	function create(device) {
	  console.log(device);
	  return new Promise((resolve, reject) => {
	    db.run("INSERT INTO devices (name, freq, info, lastupdate, IP, camera) VALUES (?1,?2,?3,datetime('now', 'localtime'),?4,?5 )", {
	      1: device.name,
	      2: device.freq,
	      3: device.info,
	      4: device.IP,
	      5: device.camera
	    }, function (err, rows) {
	      if (err) {
	        reject(err);
	      }
	      resolve({
	        id: this.lastID
	      });
	    });
	  });
	}

	function editInfo(device) {
	  return new Promise((resolve, reject) => {
	    db.run("UPDATE devices SET info = ?1, lastupdate= datetime('now', 'localtime\') WHERE id = ?2", {
	      1: device.info,
	      2: device.id
	    }, function (err, rows) {
	      if (err || this.changes < 1) {
          console.log(err);
	        reject(`Error updating device ${device.id} info.`);
	      }
	      resolve({
	        id: this.lastID
	      });
	    });
	  });
	}


	function editName(device) {
	  return new Promise((resolve, reject) => {
	    db.run("UPDATE devices SET name = ?1, location=?2 WHERE id = ?3", {
	      1: device.new_name,
	      2: device.new_location,
	      3: device.id
	    }, function (err, rows) {
	      if (err || this.changes < 1) {
	        reject(`Error updating device ${device.id} info.`);
	      }
	      resolve({
	        id: this.lastID
	      });
	    });
	  });
	}

	function deleteDevice(id) {
	  return new Promise((resolve, reject) => {
	    db.run("DELETE FROM DEVICES WHERE ID = ?1", {
	      1: id
	    }, function (err, rows) {
	      if (err || this.changes < 1) {
	        reject(`Error deleting device ${id}.`);
	      }
	      resolve({
	        id: this.lastID
	      });
	    });
	  });
	}

	function validateCreateInput(device) {
	  return true;
	}

	module.exports = {
	  connect,
	  list,
	  create,
	  editInfo,
	  editName,
	  deleteDevice
	}