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
    let notes = fetchNotes();
    let note = notes.filter(note => note.title === title);
    return note[0];
};
let removeNotes = (title) => {
    "use strict";
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNotes
};