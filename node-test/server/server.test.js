const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'To do App v1.0.0'
                    })
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('should return user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Lukas',
                        age: 28
                    })
                })
                .end(done);
        });
    });
});

