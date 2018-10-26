	const sqlite3 = require('sqlite3').verbose();
	var db = null;

	// Create DB & insert default user
	function connect(database) {
		db = database;
		db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user UNIQUE,pass) ", (err) => {
			if (err) {
				console.error(err.message);
				throw err;
			}
			db.run("INSERT INTO users (user, pass) VALUES (\"root\", \"root\")", (err) => {
				if (err) {
					console.error(err);
				}
			});
		});
	}

	function login(user, pwd) {
	  return new Promise((resolve, reject) => {
	    db.get("SELECT * FROM users WHERE user = $user AND pass = $pass", {
	      $pass: pwd,
	      $user: user
	    }, (err, rows) => {
	      if (err) {
	        reject(err);
	      }
	      resolve(rows);
	    });
	  });
	}

	module.exports = {
	  connect,
	  login
	}