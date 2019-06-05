
var chai =require('chai');
var chaiHttp =require('chai-http');
var app =require('../app.js');
// Configure chai
chai.use(chaiHttp);
chai.should();
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyIjoicm9vdCIsInBhc3MiOiJyb290Iiwicm9sZSI6MX0sImlhdCI6MTU1ODk4NDg1NywiZXhwIjoxOTE4OTgxMjU3fQ.j5uB9iiOKamecB0kpYEJp75Afm1F_wzFVpkXy7JzRJ0';

const validUserBody = {
	"password": "user",
	"username": "user",
	"role": 1
}

describe("Users Controller", function () {
    describe("Add users", function () {
        it("Should fail if body is missing.", function () {
            chai.request(app)
                 .post('/brimo/login-api/users/')
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(400);
                  });
        });
        it("Should save a user with given body.", function () {
            chai.request(app)
                 .post('/brimo/login-api/users/')
                 .type('application/json')
                 .send(validUserBody)
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(201||200);
                  });
        });
        
        it("Should delete saved user.", function () {
            chai.request(app)
                 .delete('/brimo/login-api/users/2')
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(200);
                  });
        });
    });
  });