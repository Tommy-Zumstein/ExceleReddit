var chai = require('chai');
var chaiHttp = require('chai-http');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Get Reddit Homepage', function () {
    var requestResult;
    var response;

    before(function (done) {
        chai.request("https://pay.reddit.com")
            .get("/r/all/.json")
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
        expect(response.body.data.children).to.be.a('array');
        expect(response.body.data.children).to.not.be.a.string;
    });

    it('The elements in the array have the expected properties', function () {
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body.data.children[i]).to.have.property('subreddit').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('author').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('title').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('subreddit_name_prefixed').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('thumbnail').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('preview').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('id').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('url').that.is.a('string');
                    expect(body.data.children[i]).to.have.property('permalink').that.is.a('string');
                }
                return true;
            });
    });

});

describe('Get a Reddit Post', function () {
    var requestResult;
    var response;

    before(function (done) {
        chai.request("https://pay.reddit.com")
            .get("/comments/bui4om.json")
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

    it('The first entry in the array has known properties', function () {
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.be.an('object');
        expect(response.body[1]).to.be.an('object');
        expect(response.body[0].data.children).to.be.an('array');
        expect(response.body[1].data.children).to.be.an('array');
        expect(response.body).to.not.be.a.string;
    });

    it('The elements in the array have the expected properties', function () {
        expect(response.body[0].data.children[0].data).to.have.property('subreddit').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('author').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('title').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('subreddit_name_prefixed').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('thumbnail').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('id').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('url').that.is.a('string');
        expect(response.body[0].data.children[0].data).to.have.property('permalink').that.is.a('string');
    });

    it('The elements in the array have the expected properties', function () {
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[1].data.children[i].data).to.have.property('subreddit').that.is.a('string');
                    expect(body[1].data.children[i].data).to.have.property('author').that.is.a('string');
                    expect(body[1].data.children[i].data).to.have.property('subreddit_name_prefixed').that.is.a('string');
                    expect(body[1].data.children[i].data).to.have.property('id').that.is.a('string');
                    expect(body[1].data.children[i].data).to.have.property('permalink').that.is.a('string');
                }
                return true;
            });
    });

});