console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = () => {
    "use strict";
    //remove problem with not existing file.
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};
let saveNotes = (notes) => {
    "use strict";
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    "use strict";
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    //checking that title isnt duplicate
    let duplicateNotes = notes.filter((note) => note.title === title);
    //update json if there isnt duplicate title.
    if (duplicateNotes.length === 0 ) {
        notes.push(note);
        saveNotes(notes);
        return note;
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