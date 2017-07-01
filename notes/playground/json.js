const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};
//create json from object and create file contains json.
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
//parse json to object amd read it from specified file.
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);