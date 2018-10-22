const usersRep = require('../repositories/users.rep');

function login(user, pwd) {
  return usersRep.login(user, pwd).then( res => {
    if ( res != undefined ) {
      return res;
    }
    throw {status: 401, message: 'Bad Credentials'}
  });
}

module.exports = {
  login
}