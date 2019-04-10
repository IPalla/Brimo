var db = null;
// QUERIES	
const listAllQuery = "select dev.*, room.descr from devices dev left join rooms room where dev.room_id = room.room_id OR dev.room_id is null";
const createTableQuery = "CREATE TABLE IF NOT EXISTS devices (device_id INTEGER PRIMARY KEY AUTOINCREMENT,name, freq, info ,lastupdate, IP," +
	" camera BIT, room_id INTEGER, CONSTRAINT fk_rooms FOREIGN KEY (room_id) REFERENCES rooms(room_id)) ";
const inserDeviceQuery = "INSERT INTO devices (name, freq, info, lastupdate, IP, camera, room_id) VALUES (?1,?2,?3,datetime('now', 'localtime'),?4,?5, ?6 )";
const updateInfoQuery = "UPDATE devices SET info = ?1, lastupdate= datetime('now', 'localtime\') WHERE device_id = ?2";
const editNameAndLocationQuery = "UPDATE devices SET name = ?1, room_id=?2 WHERE device_id = ?3";
const editLocationQuery = "UPDATE devices SET room_id=?1 WHERE device_id = ?2";
const editNameQuery = "UPDATE devices SET name=?1 WHERE device_id = ?2";
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

function editInfo(info, deviceId) {
	return new Promise((resolve, reject) => {
		db.run(updateInfoQuery, {
			1: info,
			2: deviceId
		}, function (err, rows) {
			if (err || this.changes < 1) {
				console.log(err);
				reject(`Error updating device ${deviceId} info.`);
			}
			resolve({
				id: this.lastID
			});
		});
	});
}


function editNameAndLocation(location, name, deviceId) {
	if (name != null && location != null){
		return new Promise((resolve, reject) => {
			console.log('both');
			db.run(editNameAndLocationQuery, {
				1: name,
				2: location,
				3: deviceId
			}, function (err, rows) {
				if (err || this.changes < 1) {
					console.log(err);
					reject(`Error updating device ${deviceId} info.`);
				}
				resolve({
					id: this.lastID
				});
			});
		});
	}
	else {
		return new Promise((resolve, reject) => {
			let query = name != null ? editNameQuery : editLocationQuery;
			db.run(query, {
				1: name != null ? name : location,
				2: deviceId
			}, function (err, rows) {
				if (err || this.changes < 1) {
					console.log(err);
					reject(`Error updating device ${deviceId} info.`);
				}
				resolve({
					id: this.lastID
				});
			});
		});
	}
	
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
	editNameAndLocation,
	deleteDevice,
	getDevice
}