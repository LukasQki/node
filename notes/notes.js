console.log('Starting notes.js');
const fs = require('fs');
let addNote = (title, body) => {
    "use strict";
    let notes = [];
    let note = {
        title,
        body
    };

    //remove problem with not existing file.
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }
    //checking that title isnt duplicate
    let duplicateNotes = notes.filter((note) => note.title === title);
    //update json if there isnt duplicate title.
    if (duplicateNotes.length === 0 ) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};
let getAll = () => {
    "use strict";
    console.log('Getting all notes');
};
let getNote = (title) => {
    "use strict";
    console.log('Reading note:', title);
};
let removeNotes = (title) => {
    "use strict";
    console.log('Removing note:', title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNotes
};