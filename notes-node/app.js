console.log('Starting app.js');
//https://nodejs.org/api/ - list of node modules.


//require build in modules
const fs = require('fs');
const os = require('os');


// require written modules
const notes = require('./notes.js');


//require 3rd party modules
const _ = require('lodash');

let user = os.userInfo();
let res = notes.addNote();

console.log(_.isString(true));
console.log(_.isString('Lukas'));

let filteredArray = _.uniq([1,1,1,2,3,4,4,3,3,2]);

console.log(filteredArray);
console.log('Result: ', notes.add(5,7));

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);