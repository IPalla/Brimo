	const sqlite3 = require('sqlite3').verbose();
	var db = null;

	// Create DB & insert default user
	function connect(database) {
		db = database;
		db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user UNIQUE,pass, role INTEGER) ", (err) => {
			if (err) {
				console.error(err.message);
				throw err;
			}
			db.run("INSERT INTO users (user, pass, role) VALUES (\"root\", \"root\", 1)", (err) => {
				if (err) {
					console.error(err);
				}
			});
		});
	}

	function login(user, pwd) {
	  return new Promise((resolve, reject) => {
	    db.get("SELECT * FROM users WHERE user = ?1 AND pass = ?2", {
	      1: user,
	      2: pwd
	    }, (err, rows) => {
	      if (err) {
	        reject(err);
	      }
	      resolve(rows);
	    });
	  });
	}

	function edit(userId, userInfo) {
	  return new Promise((resolve, reject) => {
	    db.run("UPDATE USERS SET USER = ?1, PASS =?2, ROLE = ?3 WHERE ID = ?4", {
	      1: userInfo.username,
				2: userInfo.password,
				3: userInfo.role,
				4: userId
	    }, function (err, rows) {
				if (err || this.changes < 1) {
					console.log(err);
					reject(`Error updating user info.`);
				}
				resolve({
					id: this.lastID
				});
	    });
	  });
	}

	
function addUser(user) {
  return new Promise((resolve, reject)=>{
    db.run("INSERT INTO USERS (USER, PASS, ROLE) VALUES (?1, ?2, ?3)",
    {
			1: user.username,
			2: user.password,
			3: user.role
    }, function (err, rows) {
      if (err) {
        reject(err);
      }
      resolve({ id: this.lastID});
    });
  });
}

	function deleteUser(userId) {
		return new Promise((resolve, reject) => {
			db.run("DELETE FROM USERS WHERE id = ?1", {
				1: userId
			}, function (err, rows) {
				if (err || this.changes < 1) {
					reject(`Error deleting user ${userId}.`);
				}
				resolve({
					id: this.lastID
				});
			});
		});
	}

	module.exports = {
	  connect,
		login,
		edit,
		deleteUser,
		addUser
	}