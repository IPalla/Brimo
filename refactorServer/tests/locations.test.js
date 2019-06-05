
var chai =require('chai');
var chaiHttp =require('chai-http');
var app =require('../app.js');
// Configure chai
chai.use(chaiHttp);
chai.should();
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyIjoicm9vdCIsInBhc3MiOiJyb290Iiwicm9sZSI6MX0sImlhdCI6MTU1ODk4NDg1NywiZXhwIjoxOTE4OTgxMjU3fQ.j5uB9iiOKamecB0kpYEJp75Afm1F_wzFVpkXy7JzRJ0';

describe("Locations Controller", function () {
    describe("Get all locations", function () {
        it("should retrieve 204 when no locations are added", function () {
            chai.request(app)
                 .get('/brimo/interface-api/locations/')
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(204||200);
                  });
        });
    });
    describe("Add locations", function () {
        let locationId = 1;
        it("Should fail if location description is missing.", function () {
            chai.request(app)
                 .post('/brimo/interface-api/locations/')
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(400);
                  });
        });
        it("Should save a location with given description.", function () {
            chai.request(app)
                 .post('/brimo/interface-api/locations/')
                 .type('application/json')
                 .send({descr: "newDescr"})
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(201||200);
                     locationId = res.body.id;
                     
                  });
        });
        
        it("Should delete saved location.", function () {
            chai.request(app)
                 .delete('/brimo/interface-api/locations/'+locationId)
                 .set('x-access-token', token)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                  });
        });
    });
  });