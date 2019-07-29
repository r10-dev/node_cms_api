require('dotenv').config()
const sinon = require('sinon');
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

//I should be mocking the requests here
describe('Author Model', () => {

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    
    mongoose.set('debug', true);
    console.log('mongoose connected');
    before(() => {
        
     
        model.insertMany([
            { first_name: 'erick1', last_name: 'roberts1', profile_image: 'some1.png', slug: 'i_am_erick1' },
            { bio: 'I am great2', first_name: 'erick2', last_name: 'roberts2', profile_image: 'some.png2', slug: 'i_am_erick2' },
            { bio: 'I am great3', first_name: 'erick3', last_name: 'roberts3', profile_image: 'some3.png', slug: 'i_am_erick3' },
        ])
    });

    it('should return an list of all the authors in the collection', (done) => {
        console.log(Author.);
        done();
    });
    it('should return one Author given the id', (done) => {
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