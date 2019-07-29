require('dotenv').config();
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const Author = require('./author.model');
const mongoose = require('mongoose');


// it('', (done)=>{ done();});
describe('Author Model', () => {
    var author;
    beforeEach(() => {
        this.author = new Author();
    });
    it('should have a first name that is required', (done) => {

        this.author.validate((err) => {
            expect(err.errors.first_name).to.exist;
            done();
        });
    });
    it('should have a last_name that is required', (done) => {
        this.author.validate((err) => {
            expect(err.errors.last_name).to.exist;
            done();
        });
    });
    it('should have a author slug name that is required', (done) => {

        this.author.validate((err) => {
            expect(err.errors.slug).to.exist;
            done();
        });
    });
    it('should have a author profile link that is required', (done) => {

        this.author.validate((err) => {
            expect(err.errors.profile_image).to.exist;
            done();
        });
    });

});

//Integration testing routes
describe('Author routes', () => {
    let app;
    let testAuthor = [{"_id":"5d3c7dabc85d537c13df1c11","bio":"","facebook_url":"","first_name":"Larry","instagram_url":"","last_name":"Adams","linkedin_url":"","profile_image":"https://avatars2.githubusercontent.com/u/38711500?v=4","slug":"erick","title":"","twitter_handle":"","email":"elrdevllc@gmail.com"}];
    before(()=>{
        app = express();

        var port = 3000;
        //mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        
        var router = express.Router();
        
        router = require('../routes')(app, router);
    });
    it('should return an list of all the authors in the collection', (done) => {
        request(app).get('/api/author/s').then((response)=>{
            expect(response.body).not.undefined;
            expect(response.statusCode).equal(200);
            
        });
        done();
    });
    it('should return one Author given the id', (done) => {
        request(app).get('/api/author/5d3c7dabc85d537c13df1c11').then((response)=>{
            expect(response.body).equal(testAuthor);
        });
        done();
    });
    it('should update one author based on the id and the given object', (done) => {
        done();
    });
    it('should delete an author object based on a given id', (done) => {
        done();
    });

    after((done) => {

        mongoose.connection.close();
        done();
    })
});