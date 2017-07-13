const utils = require('./utils');
const expect = require('expect');


it('should add two numbers', () => {
    let res = utils.add(33,11);
    expect(res).toBe(44)
    .toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(3,4, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
});

it('should square a number.', () => {
    let res = utils.square(3);
    expect(res).toBe(9)
    .toBeA('number');
    // if (res !== 9) {
    //     throw new Error(`Expected 9, but got ${res}`);
    // }
});

it('should async square a number', (done) => {
   utils.asyncSquare(3, (square) => {
       expect(square).toBe(9).toBeA('number');
       done();
   })
});

it('should verify first and last name are set', () => {
    let user = {location: 'Warsaw', age: 28};
    let res = utils.setName(user, 'Lukas Solka');
    expect(res).toInclude({
        firstName: 'Lukas',
        lastName: 'Solka'
    }).toBeA('object');

});

// it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    // expect([2,3,4]).toExclude(1);
    // expect({
    //     name: 'Lukas',
    //     age: 28,
    //     location: 'Warsaw'
    // }).toInclude({
    //     age: 28
    // });
// });