var chai = require('chai');
var chaiHttp = require('chai-http');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Get all Users', function () {
    //	this.timeout(15000);

    var requestResult;
    var response;

    before(function (done) {
        chai.request("http://localhost:8080")
            .get("/users")
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should return an object', function () {
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.have.headers;
    });

    it('The object should have data.children', function () {
        expect(response.body).to.be.a('array');
        expect(response.body).to.not.be.a.string;
    });

    it('The elements in the array have the expected properties', function () {
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.be.an('object');
                    expect(body[i]).to.have.property('_id').that.is.a('string');
                    expect(body[i]).to.have.property('__v').that.is.a('number');
                }
                return true;
            });
    });

});

describe('Get a Specific User', function () {
    var requestResult;
    var response;

    before(function (done) {
        chai.request('http://localhost:8080')
            .get('/getUser?userId=fcRxlEMuCSNuUrQraIiCnJ5Dkaf1')
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should return an object', function () {
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.have.headers;
    });

    it('The object should have data.children', function () {
        expect(response.body).to.be.a('object');
        expect(response.body).to.not.be.a.string;
    });

    it('The elements in the objects have the expected properties', function () {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('userId').that.is.a('string');
        expect(response.body).to.have.property('friends').that.is.a('array');
        expect(response.body).to.have.property('blocked').that.is.a('array');
        expect(response.body).to.have.property('hidden').that.is.a('array');
        expect(response.body).to.have.property('mine').that.is.an('array');
        expect(response.body).to.have.property('multi').that.is.an('array');
        expect(response.body).to.have.property('user').that.is.an('object');
        expect(response.body.user).to.have.property('userName').that.is.a('string');
        expect(response.body.user).to.have.property('email').that.is.a('string');
        expect(response.body).to.have.property('_id').that.is.a('string');
        expect(response.body).to.have.property('__v').that.is.a('number');
        return true;
    });

});

describe('Get a Specific User', function () {
    var requestResult;
    var response;

    before(function (done) {
        chai.request('http://localhost:8080')
            .get('/getFriends?userId=fcRxlEMuCSNuUrQraIiCnJ5Dkaf1')
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should return an object', function () {
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.have.headers;
    });

    it('The object should have data.children', function () {
        expect(response.body).to.be.a('object');
        expect(response.body).to.not.be.a.string;
    });


});
