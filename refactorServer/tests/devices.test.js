
var chai =require('chai');
var chaiHttp =require('chai-http');
var app =require('../app.js');
// Configure chai
chai.use(chaiHttp);
chai.should();

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyIjoicm9vdCIsInBhc3MiOiJyb290Iiwicm9sZSI6MX0sImlhdCI6MTU1ODk4NDg1NywiZXhwIjoxOTE4OTgxMjU3fQ.j5uB9iiOKamecB0kpYEJp75Afm1F_wzFVpkXy7JzRJ0';

const deviceBody = {
	"name": "new_device",
	"camera": false,
	"IP": "localhost:3010",
	"freq": 12,
	"room" :{
		"id": 1
	},
	"commands": [
		{
			"command_descr": "ENCENDER",
			"command_code": "ON"
		},
		{
			"command_descr": "APAGAR",
			"command_code": "OFF"
		}
	]
}

describe("Devices Controller", function () {
    describe("Get all devices", function () {
        it("should retrieve devices", function () {
            chai.request(app)
                 .get('/brimo/interface-api/devices/')
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(204||200);
                  });
        });
    });
    describe("Add devices", function () {
        let deviceId = 1;
        it("Should fail if device body is missing.", function () {
            chai.request(app)
                 .post('/brimo/interface-api/devices/')
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(400);
                  });
        });
        it("Should save a device with correct body.", function () {
            chai.request(app)
                 .post('/brimo/interface-api/devices/')
                 .type('application/json')
                 .send(deviceBody)
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(201);
                     deviceId = res.body.id;
                  });
        });
        
        it("Should delete saved device.", function () {
            chai.request(app)
                 .delete('/brimo/interface-api/devices/'+deviceId)
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(200);
                  });
        });
    });
  });