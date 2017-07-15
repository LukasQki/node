const expect = require('expect');
const rewire = require('rewire');


let app = rewire('./app');

describe('App', () => {
    let db = {
      saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call the spy correclty', () => {
        let spy = expect.createSpy();
        spy('Lukas');
        expect(spy).toHaveBeenCalledWith('Lukas');
    });

    it('should call saveUser with user object', () => {
        let email = 'lukasz@expample.com';
        let password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});