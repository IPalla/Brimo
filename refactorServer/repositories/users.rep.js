	
const sqlite3 = require('sqlite3').verbose();
var db = null;

// Create DB & insert default user
function connect() {
  db = new sqlite3.Database("./db/users.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => { 
    if (err) {
      console.error(err.message);
      throw err;
    }
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user UNIQUE,pass) ", (err) => {
      if (err){
        console.error(err.message);
        throw err;
      }
      db.run("INSERT INTO users (user, pass) VALUES (\"root\", \"root\")", (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
})
  /*db = new sqlite3.Database('./db/users.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE , (err) => {
    if (err) {
      console.error(err.message);
    }
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user,pass) ");
    db.run("INSERT INTO users (user, pass) VALUES (\"root\", \"root\")");
    console.log('connected0)');
  });*/
}

function login(user, pwd ) {
  return new Promise((resolve, reject)=>{
    db.get("SELECT * FROM users WHERE user = $user AND pass = $pass", { $pass: pwd, $user: user }, (err, rows) => {
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