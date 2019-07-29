const expect = require('chai').expect;
const app = require('../app');
const request = require('supertest');

//I know this is a round about way of testing
//but index js is tested none the less
//TODO: seperate out app.js into (app.js/server.js) - MOCK the app portion
describe('routing functions', () =>
{
    it('should return a json request greeting on the root/api call', (done) => {
        
        const response = request(app).get('/api').then((response) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('should return an error request greeting on the root', (done) => {
        
        const response = request(app).get('/').then((response) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

});