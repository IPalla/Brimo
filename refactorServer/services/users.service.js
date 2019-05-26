const usersRep = require('../repositories/users.rep');

function login(user, pwd) {
  return usersRep.login(user, pwd).then( res => {
    if ( res != undefined ) {
      return res;
    }
    throw {status: 401, message: 'Bad Credentials'}
  });
}

function add(user) {
  return usersRep.addUser(user);
}

function edit(userId, userInfo) {
  return usersRep.edit(userId, userInfo).then( res => {
    if ( res != undefined ) {
      return res;
    }
    throw {status: 400, message: 'Error editing user info.'}
  });
}

function deleteUser(userId) {
  return usersRep.deleteUser(userId).then( res => {
    if ( res != undefined ) {
      return res;
    }
    throw {status: 400, message: 'Error deleting user.'}
  });
}

module.exports = {
  login,
  edit,
  add,
  deleteUser
}