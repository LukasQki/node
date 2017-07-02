console.log('Starting app.js');
//https://nodejs.org/api/ - list of node modules.

//require build in modules
const fs = require('fs'); // fileSystem
//require 3rd party modules
const _ = require('lodash'); // Helpers
const yargs = require('yargs'); // Simplified input
// require written modules
const notes = require('./notes.js');

const argv = yargs.argv;
//passing args to app: node app.js list // list is an arg
let command = argv._[0];
console.log('Command: ', command);
// console.log('Process: ', process.argv);
console.log('------------------------------------');
console.log('Yargs: ', argv);
if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note created Title: ${note.title} Body: ${note.body}`);
    } else {
        console.log('Note title taken')
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === "read") {
    let noteFound = notes.getNote(argv.title);
    let message = noteFound ? noteFound.body : 'Note not found';
    console.log(message);
} else if (command === 'remove') {
    let noteRemoved = notes.removeNotes(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recognized');
}