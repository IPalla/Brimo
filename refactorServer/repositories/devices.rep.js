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
	},
	"room_id": {
		"type": "number"
	}
}

// QUERIES	
const listAllQuery = "select dev.*, room.descr from devices dev left join rooms room where dev.room_id = room.room_id OR dev.room_id is null";
const createTableQuery = "CREATE TABLE IF NOT EXISTS devices (device_id INTEGER PRIMARY KEY AUTOINCREMENT,name, freq, info ,lastupdate, IP," +
	" camera BIT, room_id INTEGER, FOREIGN KEY (room_id) REFERENCES rooms(room_id)) ";
const inserDeviceQuery = "INSERT INTO devices (name, freq, info, lastupdate, IP, camera, room_id) VALUES (?1,?2,?3,datetime('now', 'localtime'),?4,?5, ?6 )";
const updateInfoQuery = "UPDATE devices SET info = ?1, lastupdate= datetime('now', 'localtime\') WHERE device_id = ?2";
const editNameQuery = "UPDATE devices SET name = ?1, location=?2 WHERE device_id = ?3";
const selectDeviceQuery = "select * from devices where device_id = 2";

// Create table
function connect(database) {
	db = database;
	db.run(createTableQuery, (err) => {
		if (err) {
			console.error(err.message);
			throw err;
		}
	});
}

function list() {
	return new Promise((resolve, reject) => {
		db.all(listAllQuery, (err, rows) => {
			if (err) {
				reject(err);
			}
			resolve(rows);
		});
	});
}

function create(device, room) {
	return new Promise((resolve, reject) => {
		db.run(inserDeviceQuery, {
			1: device.name,
			2: device.freq,
			3: device.info,
			4: device.IP,
			5: device.camera,
			6: (room != null) ? room.room_id : null
		}, function (err, rows) {
			if (err) {
				reject(err);
			}
			resolve({
				device_id: this.lastID
			});
		});
	});
}

function editInfo(device) {
	return new Promise((resolve, reject) => {
		db.run(updateInfoQuery, {
			1: device.info,
			2: device.device_id
		}, function (err, rows) {
			if (err || this.changes < 1) {
				console.log(err);
				reject(`Error updating device ${device.device_id} info.`);
			}
			resolve({
				id: this.lastID
			});
		});
	});
}


function editName(device) {
	return new Promise((resolve, reject) => {
		db.run(editNameQuery, {
			1: device.new_name,
			2: device.new_location,
			3: device.device_id
		}, function (err, rows) {
			if (err || this.changes < 1) {
				reject(`Error updating device ${device.device_id} info.`);
			}
			resolve({
				id: this.lastID
			});
		});
	});
}

function deleteDevice(id) {
	return new Promise((resolve, reject) => {
		db.run("DELETE FROM DEVICES WHERE device_id = ?1", {
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

function getDevice(id) {
	return new Promise((resolve, reject) => {
		db.all("SELECT * FROM DEVICES WHERE device_id = ?1", {
			1: id
		}, function (err, rows) {
			if (err || rows.length <= 0) {
				reject({status:404, message: `Error retrieving device ${id}.`});
			}
			resolve(rows[0]);
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
	deleteDevice,
	getDevice
}