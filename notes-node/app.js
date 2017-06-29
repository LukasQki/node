console.log('Starting app');
//https://nodejs.org/api/ - list of node modules.
const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFile('greatings.txt', `Hello ${user.username}!`);